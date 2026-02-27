"use client";

import React, { useState } from "react";
import Image from "next/image";
import { events } from "@/data/index";
import type { EventItem } from "@/data/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

interface EventCardProps {
  event: EventItem;
  className?: string;
  style?: React.CSSProperties;
  showDescription?: boolean;
  titleSize?: "sm" | "lg" | "xl";
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  className = "",
  style,
  showDescription = false,
  titleSize = "sm",
}) => {
  const [imgError, setImgError] = useState(false);
  const showImage = event.image && !imgError;

  const titleClasses = {
    sm: "text-sm",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-light/10 group cursor-pointer ${
        !showImage ? `bg-gradient-to-br ${event.imagePlaceholder}` : ""
      } ${className}`}
      style={style}
    >
      {showImage && event.image && (
        <Image
          src={event.image}
          alt={event.title}
          fill
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
      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5 z-10">
        {/* <Badge variant="dark">{event.type}</Badge> */}
        <h3 className={`text-light font-bold leading-tight ${titleClasses[titleSize]}`}>
          {"{Nombre_evento}/{fecha_evento}"}
        </h3>
        {showDescription && (
          <p className="text-light/50 text-xs leading-relaxed line-clamp-2">
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
};

// ─── Layouts por cantidad de eventos ──────────────────────────────────────────

function Layout1({ items }: { items: EventItem[] }) {
  return (
    <div style={{ height: 420 }}>
      <EventCard event={items[0]} className="h-full" showDescription titleSize="xl" />
    </div>
  );
}

function Layout2({ items }: { items: EventItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4" style={{ height: 420 }}>
      <EventCard event={items[0]} className="h-full" showDescription titleSize="lg" />
      <EventCard event={items[1]} className="h-full" titleSize="lg" />
    </div>
  );
}

function Layout3({ items }: { items: EventItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-4" style={{ height: 420 }}>
      {/* Featured — 2 columnas */}
      <EventCard
        event={items[0]}
        className="col-span-2 h-full"
        showDescription
        titleSize="xl"
      />
      {/* Col derecha: 2 cards apiladas */}
      <div className="grid grid-rows-2 gap-4">
        <EventCard event={items[1]} className="h-full" titleSize="sm" />
        <EventCard event={items[2]} className="h-full" titleSize="sm" />
      </div>
    </div>
  );
}

function Layout4({ items }: { items: EventItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4" style={{ height: 520 }}>
      {/* Featured grande — ocupa toda la altura */}
      <EventCard
        event={items[0]}
        className="row-span-2 h-full"
        style={{ gridRow: "1 / span 2" }}
        showDescription
        titleSize="xl"
      />
      {/* Dos cards apiladas a la derecha */}
      <EventCard event={items[1]} className="h-full" titleSize="lg" />
      <EventCard event={items[2]} className="h-full" titleSize="sm" />
      <EventCard event={items[3]} className="h-full" titleSize="sm" />
    </div>
  );
}

/**
 * Layout para 5+ eventos:
 *  - Col 1-2 fila 1: featured (wide)
 *  - Col 3 todas las filas: tall
 *  - Filas 2+: remaining en pares (col 1 y col 2)
 */
function LayoutMany({ items }: { items: EventItem[] }) {
  const ROW_H = 260;
  const GAP = 16;

  const featured = items[0];
  const tall = items[1];
  const remaining = items.slice(2);

  // Dividir remaining en pares para las filas
  const rows: EventItem[][] = [];
  for (let i = 0; i < remaining.length; i += 2) {
    rows.push(remaining.slice(i, i + 2));
  }

  const totalRows = rows.length + 1; // +1 por la fila del featured
  const totalHeight = totalRows * ROW_H + (totalRows - 1) * GAP;

  return (
    <div
      className="grid grid-cols-3 gap-4"
      style={{
        height: totalHeight,
        gridTemplateRows: `repeat(${totalRows}, ${ROW_H}px)`,
      }}
    >
      {/* Featured — col 1-2, fila 1 */}
      <EventCard
        event={featured}
        style={{ gridColumn: "1 / span 2", gridRow: "1 / span 1" }}
        showDescription
        titleSize="xl"
      />

      {/* Tall — col 3, todas las filas */}
      <EventCard
        event={tall}
        style={{ gridColumn: "3", gridRow: `1 / span ${totalRows}` }}
        titleSize="lg"
      />

      {/* Remaining rows — col 1-2, filas 2+ */}
      {rows.map((pair, rowIdx) =>
        pair.length === 1 ? (
          // Impar al final: ocupa las 2 columnas
          <EventCard
            key={pair[0].id}
            event={pair[0]}
            style={{ gridColumn: "1 / span 2", gridRow: rowIdx + 2 }}
            titleSize="sm"
          />
        ) : (
          pair.map((ev, colIdx) => (
            <EventCard
              key={ev.id}
              event={ev}
              style={{ gridColumn: colIdx + 1, gridRow: rowIdx + 2 }}
              titleSize="sm"
            />
          ))
        )
      )}
    </div>
  );
}

// ─── Selector de layout ───────────────────────────────────────────────────────

function DesktopLayout({ items }: { items: EventItem[] }) {
  if (items.length === 0) return null;
  if (items.length === 1) return <Layout1 items={items} />;
  if (items.length === 2) return <Layout2 items={items} />;
  if (items.length === 3) return <Layout3 items={items} />;
  if (items.length === 4) return <Layout4 items={items} />;
  return <LayoutMany items={items} />;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <SectionLabel>Galería del Proyecto</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-light uppercase leading-tight">
            Nuestros
            <br />
            Eventos
          </h2>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {events.map((ev) => (
            <EventCard key={ev.id} event={ev} className="h-48" />
          ))}
        </div>

        {/* Desktop: dynamic layout */}
        <div className="hidden md:block">
          <DesktopLayout items={events} />
        </div>

        {/* Empty state */}
        {events.length === 0 && (
          <div className="flex flex-col items-center justify-center h-48 border border-dashed border-light/10 rounded-2xl text-light/30 text-sm">
            No hay eventos disponibles aún.
          </div>
        )}
      </div>
    </section>
  );
};