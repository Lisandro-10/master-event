"use client";

import React, { useState } from "react";
import Image from "next/image";
import { events } from "@/data/index";
import type { EventItem } from "@/data/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EventGalleryModal } from "@/components/modals/EventGalleryModal";
import { useEventMedia } from "@/hooks/useEventMedia";
import { isCDNAsset } from "@/app/api/lib/cdn";

// ─── Helper: extract event number from EventItem ───────────────────────────────
//
// Tries to read the number from the image path (eventos/evento-3/...)
// which is always present. Falls back to parsing the id string.

function getEventNumber(event: EventItem): number | null {
  // Try from image URL: "…/evento-3/…" → 3
  if (event.image) {
    const match = event.image.match(/evento-(\d+)/);
    if (match) return parseInt(match[1], 10);
  }
  // Try from id: "neon-fest-2" → null, "evento-2" → 2
  const idMatch = event.id.match(/(\d+)/);
  if (idMatch) return parseInt(idMatch[1], 10);
  return null;
}

// ─── Gallery wrapper — owns discovery for the selected event ─────────────────

interface GalleryManagerProps {
  event: EventItem | null;
  onClose: () => void;
}

const GalleryManager: React.FC<GalleryManagerProps> = ({ event, onClose }) => {
  const eventNumber = event ? getEventNumber(event) : null;
  const { media, status } = useEventMedia(eventNumber, !!event);

  return (
    <EventGalleryModal
      isOpen={!!event}
      onClose={onClose}
      media={media}
      discoveryStatus={status}
      eventTitle={event?.title}
      initialIndex={0}
    />
  );
};

// ─── EventCard ────────────────────────────────────────────────────────────────

interface EventCardProps {
  event: EventItem;
  className?: string;
  style?: React.CSSProperties;
  titleSize?: "sm" | "lg" | "xl";
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  className = "",
  style,
  titleSize = "sm",
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);
  const showImage = event.image && !imgError;

  const titleClasses = { sm: "text-sm", lg: "text-lg", xl: "text-xl" };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-light/10 group cursor-pointer ${
        !showImage ? `bg-gradient-to-br ${event.imagePlaceholder}` : ""
      } ${className}`}
      style={style}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      aria-label={`Ver galería de ${event.title}`}
    >
      {showImage && event.image && (
        <Image
          src={event.image}
          alt={event.title}
          fill
          unoptimized={isCDNAsset(event.image)}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,244,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/85 via-dark-deeper/20 to-transparent group-hover:from-dark-deeper/90 transition-all duration-300" />

      {/* Expand icon */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur border border-light/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M7.5 1.5H10.5V4.5M10.5 1.5L6.5 5.5M4.5 10.5H1.5V7.5M1.5 10.5L5.5 6.5"
            stroke="#25F4D1"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5 z-10">
        <h3 className={`text-light font-bold leading-tight ${titleClasses[titleSize]}`}>
          {event.title}
        </h3>
      </div>
    </div>
  );
};

// ─── Layouts ──────────────────────────────────────────────────────────────────

type LayoutProps = { items: EventItem[]; onOpen: (e: EventItem) => void };

function Layout1({ items, onOpen }: LayoutProps) {
  return (
    <div style={{ height: 420 }}>
      <EventCard event={items[0]} className="h-full" titleSize="xl" onClick={() => onOpen(items[0])} />
    </div>
  );
}

function Layout2({ items, onOpen }: LayoutProps) {
  return (
    <div className="grid grid-cols-2 gap-4" style={{ height: 420 }}>
      <EventCard event={items[0]} className="h-full" titleSize="lg" onClick={() => onOpen(items[0])} />
      <EventCard event={items[1]} className="h-full" titleSize="lg" onClick={() => onOpen(items[1])} />
    </div>
  );
}

function Layout3({ items, onOpen }: LayoutProps) {
  return (
    <div className="grid grid-cols-3 gap-4" style={{ height: 420 }}>
      <EventCard event={items[0]} className="col-span-2 h-full" titleSize="xl" onClick={() => onOpen(items[0])} />
      <div className="grid grid-rows-2 gap-4">
        <EventCard event={items[1]} className="h-full" titleSize="sm" onClick={() => onOpen(items[1])} />
        <EventCard event={items[2]} className="h-full" titleSize="sm" onClick={() => onOpen(items[2])} />
      </div>
    </div>
  );
}

function Layout4({ items, onOpen }: LayoutProps) {
  return (
    <div className="grid grid-cols-2 gap-4" style={{ height: 520 }}>
      <EventCard
        event={items[0]}
        className="row-span-2 h-full"
        style={{ gridRow: "1 / span 2" }}
      
        titleSize="xl"
        onClick={() => onOpen(items[0])}
      />
      <EventCard event={items[1]} className="h-full" titleSize="lg" onClick={() => onOpen(items[1])} />
      <EventCard event={items[2]} className="h-full" titleSize="sm" onClick={() => onOpen(items[2])} />
      <EventCard event={items[3]} className="h-full" titleSize="sm" onClick={() => onOpen(items[3])} />
    </div>
  );
}

function LayoutMany({ items, onOpen }: LayoutProps) {
  const ROW_H = 260;
  const GAP = 16;
  const featured = items[0];
  const tall = items[1];
  const remaining = items.slice(2);
  const rows: EventItem[][] = [];
  for (let i = 0; i < remaining.length; i += 2) rows.push(remaining.slice(i, i + 2));
  const totalRows = rows.length + 1;
  const totalHeight = totalRows * ROW_H + (totalRows - 1) * GAP;

  return (
    <div
      className="grid grid-cols-3 gap-4"
      style={{ height: totalHeight, gridTemplateRows: `repeat(${totalRows}, ${ROW_H}px)` }}
    >
      <EventCard event={featured} style={{ gridColumn: "1 / span 2", gridRow: "1 / span 1" }} titleSize="xl" onClick={() => onOpen(featured)} />
      <EventCard event={tall} style={{ gridColumn: "3", gridRow: `1 / span ${totalRows}` }} titleSize="lg" onClick={() => onOpen(tall)} />
      {rows.map((pair, rowIdx) =>
        pair.length === 1 ? (
          <EventCard key={pair[0].id} event={pair[0]} style={{ gridColumn: "1 / span 2", gridRow: rowIdx + 2 }} titleSize="sm" onClick={() => onOpen(pair[0])} />
        ) : (
          pair.map((ev, colIdx) => (
            <EventCard key={ev.id} event={ev} style={{ gridColumn: colIdx + 1, gridRow: rowIdx + 2 }} titleSize="sm" onClick={() => onOpen(ev)} />
          ))
        )
      )}
    </div>
  );
}

function DesktopLayout({ items, onOpen }: LayoutProps) {
  if (items.length === 0) return null;
  if (items.length === 1) return <Layout1 items={items} onOpen={onOpen} />;
  if (items.length === 2) return <Layout2 items={items} onOpen={onOpen} />;
  if (items.length === 3) return <Layout3 items={items} onOpen={onOpen} />;
  if (items.length === 4) return <Layout4 items={items} onOpen={onOpen} />;
  return <LayoutMany items={items} onOpen={onOpen} />;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <>
      <section id="events" className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <SectionLabel>Galería del Proyecto</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-light uppercase leading-tight">
              Nuestros
              <br />
              Eventos
            </h2>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-4 md:hidden">
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} className="h-48" onClick={() => setSelectedEvent(ev)} />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <DesktopLayout items={events} onOpen={setSelectedEvent} />
          </div>

          {events.length === 0 && (
            <div className="flex flex-col items-center justify-center h-48 border border-dashed border-light/10 rounded-2xl text-light/30 text-sm">
              No hay eventos disponibles aún.
            </div>
          )}
        </div>
      </section>

      <GalleryManager event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
};