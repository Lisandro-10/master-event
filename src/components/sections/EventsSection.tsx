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
  showDescription?: boolean;
  titleSize?: "sm" | "lg" | "xl";
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  className = "",
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
      className={`relative rounded-2xl overflow-hidden border border-light/10 group cursor-pointer ${!showImage ? `bg-gradient-to-br ${event.imagePlaceholder}` : ""} ${className}`}
    >
      {showImage && event.image && (
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
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
      <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/80 via-transparent to-transparent group-hover:from-dark-deeper/90 transition-all duration-300" />
      <div className="absolute bottom-4 left-4 flex flex-col gap-1 z-10">
        <Badge variant="dark">{event.type}</Badge>
        <h3 className={`text-light font-bold ${titleClasses[titleSize]}`}>
          {event.title}
        </h3>
        {showDescription && (
          <p className="text-light/50 text-sm max-w-sm">{event.description}</p>
        )}
      </div>
    </div>
  );
};

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background */}
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

        {/* Mobile: stacked list */}
        <div className="flex flex-col gap-4 md:hidden">
          {events.map((ev) => (
            <EventCard key={ev.id} event={ev} className="h-48" />
          ))}
        </div>

        {/* Desktop: masonry-style grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 h-[520px]">
          {/* Wide card — row 1, col 1-2 */}
          <EventCard
            event={events[0]}
            className="col-span-2"
            showDescription
            titleSize="xl"
          />

          {/* Tall card — col 3, row 1-2 */}
          <EventCard
            event={events[1]}
            className="row-span-2"
            titleSize="lg"
          />

          {/* Bottom row — col 1 and col 2 */}
          {events.slice(2, 4).map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </div>
    </section>
  );
};