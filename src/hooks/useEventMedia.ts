"use client";

import { useState, useEffect } from "react";
import { getCDNUrl } from "@/app/api/lib/cdn";
import type { GalleryMedia } from "@/components/modals/EventGalleryModal";

const MAX_FILES = 10;

/**
 * Probes a URL by loading it as an <img> element.
 * This avoids CORS preflight entirely — browsers treat image loads as
 * "no-cors" subresource requests, so CloudFront doesn't need CORS headers.
 */
function probeImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/**
 * Probes a video URL by loading just its metadata via a <video> element.
 * Like images, this is a no-cors subresource request — no CORS preflight.
 * onloadedmetadata fires if the file exists; onerror fires on 404/fail.
 */
function probeVideo(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "metadata";

    const cleanup = () => {
      video.onloadedmetadata = null;
      video.onerror = null;
      video.src = "";
      video.load(); // abort any pending load
    };

    video.onloadedmetadata = () => {
      cleanup();
      resolve(true);
    };

    video.onerror = () => {
      cleanup();
      resolve(false);
    };

    video.src = url;
    video.load();
  });
}

/**
 * Sequentially probes URLs built by buildUrl(i) starting at 1.
 * Stops at the first miss or after MAX_FILES.
 */
async function probeSequential(
  buildUrl: (i: number) => string,
  probe: (url: string) => Promise<boolean>,
  max = MAX_FILES
): Promise<string[]> {
  const found: string[] = [];
  for (let i = 1; i <= max; i++) {
    const url = buildUrl(i);
    const ok = await probe(url);
    if (!ok) break;
    found.push(url);
  }
  return found;
}

/**
 * Discovers all images (.webp) and videos (.webm) for a given event number.
 *
 * S3 bucket convention:
 *   eventos/evento-{n}/evento-{n}_{i}.webp   → images
 *   eventos/evento-{n}/evento-{n}_{i}.webm   → videos
 *
 * Both are probed in parallel, then merged: images first, videos after.
 */
async function discoverEventMedia(eventNumber: number): Promise<GalleryMedia[]> {
  const base = `eventos/evento-${eventNumber}`;
  const prefix = `evento-${eventNumber}`;

  const [imageUrls, videoUrls] = await Promise.all([
    probeSequential(
      (i) => getCDNUrl(`${base}/${prefix}_${i}.webp`),
      probeImage
    ),
    probeSequential(
      (i) => getCDNUrl(`${base}/${prefix}_v${i}.webm`),
      probeVideo
    ),
  ]);

  const images: GalleryMedia[] = imageUrls.map((src, idx) => ({
    type: "image",
    src,
    alt: `Foto ${idx + 1}`,
  }));

  // Use first image as poster/thumbnail for all videos
  const poster = imageUrls[0] ?? undefined;

  const videos: GalleryMedia[] = videoUrls.map((src) => ({
    type: "video",
    src,
    poster,
  }));

  return [...images, ...videos];
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export type DiscoveryStatus = "idle" | "loading" | "done" | "error";

interface UseEventMediaResult {
  media: GalleryMedia[];
  status: DiscoveryStatus;
}

/**
 * Discovers and returns all media for a given event from the CDN.
 *
 * @param eventNumber  Numeric ID matching folder evento-N in S3
 * @param enabled      Pass false to skip (e.g. modal not open yet)
 */
export function useEventMedia(
  eventNumber: number | null,
  enabled = true
): UseEventMediaResult {
  const [media, setMedia] = useState<GalleryMedia[]>([]);
  const [status, setStatus] = useState<DiscoveryStatus>("idle");

  useEffect(() => {
    if (!enabled || eventNumber === null) {
      setMedia([]);
      setStatus("idle");
      return;
    }

    let cancelled = false;
    setStatus("loading");
    setMedia([]);

    discoverEventMedia(eventNumber)
      .then((found) => {
        if (cancelled) return;
        setMedia(found);
        setStatus("done");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [eventNumber, enabled]);

  return { media, status };
}