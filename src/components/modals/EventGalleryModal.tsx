"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { HiOutlineWifi } from "react-icons/hi2";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GalleryMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
}

interface EventGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: GalleryMedia[];
  /** "loading" while discovering files from CDN, "done" when ready */
  discoveryStatus?: "idle" | "loading" | "done" | "error";
  eventTitle?: string;
  initialIndex?: number;
}

// ─── Equalizer loader (shared) ────────────────────────────────────────────────

const HEIGHTS = [0.6, 1, 0.75, 0.9, 0.5, 0.8, 0.65, 1, 0.7];

const EqualizerLoader: React.FC<{ size?: "sm" | "md"; label?: string }> = ({
  size = "md",
  label,
}) => {
  const barH = size === "sm" ? 24 : 40;
  const barW = size === "sm" ? 2 : 3;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-end" style={{ gap: 3, height: barH }}>
        {HEIGHTS.slice(0, size === "sm" ? 7 : 9).map((h, i) => (
          <div
            key={i}
            className="rounded-full bg-primary/70"
            style={{
              width: barW,
              height: h * barH,
              animation: `equalize 0.9s ease-in-out ${i * 0.09}s infinite alternate`,
            }}
          />
        ))}
      </div>
      {label && (
        <span className="text-light/40 text-xs tracking-widest uppercase">{label}</span>
      )}
      <style>{`
        @keyframes equalize {
          from { transform: scaleY(0.3); opacity: 0.5; }
          to   { transform: scaleY(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// ─── Video Slide ──────────────────────────────────────────────────────────────

const VideoSlide: React.FC<{ item: GalleryMedia; isActive: boolean }> = ({
  item,
  isActive,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [slowConnection, setSlowConnection] = useState(false);
  const slowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isActive) {
      videoRef.current?.pause();
      setLoading(true);
      setSlowConnection(false);
      if (slowTimerRef.current) clearTimeout(slowTimerRef.current);
    } else {
      setLoading(true);
      setSlowConnection(false);
      slowTimerRef.current = setTimeout(() => setSlowConnection(true), 4000);
    }
    return () => { if (slowTimerRef.current) clearTimeout(slowTimerRef.current); };
  }, [isActive]);

  const handleCanPlay = () => {
    setLoading(false);
    setSlowConnection(false);
    if (slowTimerRef.current) clearTimeout(slowTimerRef.current);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        controls
        playsInline
        preload="metadata"
        onCanPlay={handleCanPlay}
        onWaiting={() => setLoading(true)}
        onPlaying={() => setLoading(false)}
        className={`max-w-full max-h-full w-full h-full object-contain transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
          <EqualizerLoader size="md" />
          <div
            className={`flex items-center gap-2 transition-all duration-500 ${
              slowConnection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
          >
            <HiOutlineWifi className="text-light/40 text-sm" />
            <span className="text-light/40 text-xs tracking-widest uppercase">
              Cargando video...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Image Slide ──────────────────────────────────────────────────────────────

const ImageSlide: React.FC<{ item: GalleryMedia }> = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <EqualizerLoader size="sm" />
        </div>
      )}
      <Image
        src={item.src}
        alt={item.alt ?? "Evento"}
        fill
        className={`object-contain transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        sizes="100vw"
        priority
      />
    </div>
  );
};

// ─── Discovery loading screen ─────────────────────────────────────────────────

const DiscoveryLoader: React.FC = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black">
    <EqualizerLoader size="md" />
    <span className="text-light/30 text-xs tracking-widest uppercase">
      Cargando galería...
    </span>
  </div>
);

// ─── Empty state ──────────────────────────────────────────────────────────────

const EmptyState: React.FC = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black">
    <div className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M4 4V2.5A.5.5 0 014.5 2h7a.5.5 0 01.5.5V4M6 7v4M10 7v4M2 4l1 9.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5L14 4" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-light/30 text-xs tracking-widest uppercase">
      Sin contenido disponible
    </span>
  </div>
);

// ─── Main Modal ───────────────────────────────────────────────────────────────

export const EventGalleryModal: React.FC<EventGalleryModalProps> = ({
  isOpen,
  onClose,
  media,
  discoveryStatus = "done",
  eventTitle,
  initialIndex = 0,
}) => {
  const [current, setCurrent] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) setCurrent(initialIndex);
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, current, media.length]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + media.length) % media.length);
  }, [media.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % media.length);
  }, [media.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next(); else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen) return null;

  const isLoading = discoveryStatus === "loading";
  const isEmpty = discoveryStatus === "done" && media.length === 0;
  const item = media[current];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/92 backdrop-blur-xl" />

      {/* Modal shell */}
      <div
        className="relative flex flex-col w-full h-full md:w-[90vw] md:h-[90vh] md:max-w-5xl md:rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 py-3 md:px-5 md:py-4 bg-dark/80 backdrop-blur shrink-0 border-b border-light/5">
          <div className="flex items-center gap-3 min-w-0">
            {eventTitle && (
              <span className="text-light/70 text-xs font-semibold tracking-widest uppercase truncate">
                {eventTitle}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 shrink-0">
            {!isLoading && media.length > 1 && (
              <span className="text-light/30 text-xs tabular-nums tracking-wider">
                {current + 1}
                <span className="mx-1 text-light/15">/</span>
                {media.length}
              </span>
            )}
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full flex items-center justify-center text-light/50 hover:text-light hover:bg-light/10 transition-all duration-150"
              aria-label="Cerrar galería"
            >
              <HiXMark className="text-base" />
            </button>
          </div>
        </div>

        {/* Media area */}
        <div className="relative flex-1 bg-black min-h-0">
          {/* Discovery loading */}
          {isLoading && <DiscoveryLoader />}

          {/* Empty */}
          {isEmpty && <EmptyState />}

          {/* Slide */}
          {!isLoading && !isEmpty && item && (
            <div className="absolute inset-0">
              {item.type === "video" ? (
                <VideoSlide item={item} isActive={true} key={`video-${current}`} />
              ) : (
                <ImageSlide item={item} key={`image-${current}`} />
              )}
            </div>
          )}

          {/* Nav arrows */}
          {!isLoading && media.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10
                  w-9 h-9 md:w-10 md:h-10 rounded-full
                  bg-dark/60 backdrop-blur border border-light/10
                  flex items-center justify-center
                  text-light/60 hover:text-primary hover:border-primary/40
                  transition-all duration-150 active:scale-90"
                aria-label="Anterior"
              >
                <HiChevronLeft className="text-lg" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10
                  w-9 h-9 md:w-10 md:h-10 rounded-full
                  bg-dark/60 backdrop-blur border border-light/10
                  flex items-center justify-center
                  text-light/60 hover:text-primary hover:border-primary/40
                  transition-all duration-150 active:scale-90"
                aria-label="Siguiente"
              >
                <HiChevronRight className="text-lg" />
              </button>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {!isLoading && media.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 py-3 bg-dark/80 backdrop-blur shrink-0 border-t border-light/5">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-light/20 hover:bg-light/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};