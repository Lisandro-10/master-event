import React from "react";
import { events } from "@/data/index";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

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
            <div
              key={ev.id}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${ev.imagePlaceholder} h-48 border border-light/10`}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(37,244,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <Badge variant="dark">{ev.type}</Badge>
                <h3 className="text-light font-bold text-sm">{ev.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: masonry-style grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 h-[520px]">
          {/* Wide card — row 1, col 1-2 */}
          <div
            className={`relative col-span-2 rounded-2xl overflow-hidden bg-gradient-to-br ${events[0].imagePlaceholder} border border-light/10 group cursor-pointer`}
          >
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(37,244,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.5) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/70 via-transparent to-transparent group-hover:from-dark-deeper/80 transition-all duration-300" />
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <Badge variant="dark">{events[0].type}</Badge>
              <h3 className="text-light font-bold text-xl">{events[0].title}</h3>
              <p className="text-light/50 text-sm max-w-sm">{events[0].description}</p>
            </div>
          </div>

          {/* Tall card — col 3, row 1-2 */}
          <div
            className={`relative row-span-2 rounded-2xl overflow-hidden bg-gradient-to-br ${events[1].imagePlaceholder} border border-light/10 group cursor-pointer`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/70 via-transparent to-transparent group-hover:from-dark-deeper/80 transition-all duration-300" />
            <div className="absolute bottom-6 left-4 flex flex-col gap-2">
              <Badge variant="dark">{events[1].type}</Badge>
              <h3 className="text-light font-bold text-lg">{events[1].title}</h3>
            </div>
          </div>

          {/* Bottom row — col 1 and col 2 */}
          {events.slice(2, 4).map((ev) => (
            <div
              key={ev.id}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${ev.imagePlaceholder} border border-light/10 group cursor-pointer`}
            >
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(37,244,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/70 via-transparent to-transparent group-hover:from-dark-deeper/80 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <Badge variant="dark">{ev.type}</Badge>
                <h3 className="text-light font-bold text-sm">{ev.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};