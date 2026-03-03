import React from "react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-secondary/30 blur-[80px]" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-6">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight uppercase">
          <span className="block text-light">MÁS QUE</span>
          <span className="block text-light">MÚSICA,</span>
          <span className="block text-primary">UNA</span>
          <span className="block text-primary">EXPERIENCIA</span>
          <span className="block text-light">INOLVIDABLE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-light/50 text-sm md:text-base max-w-md leading-relaxed mt-2">
          Producción técnica, integral y alquiler de equipos de alta fidelidad
          para los eventos más exigentes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button href="#combos" size="lg">
            Ver Combos
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Contactanos
          </Button>
        </div>
      </div>
    </section>
  );
};