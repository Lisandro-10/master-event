import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const features = [
  { icon: "◈", label: "Calidad Hi-Fi", desc: "32-bit / 96kHz, Pioneer & Wharfedale Pro" },
  { icon: "◉", label: "Soporte 24/7", desc: "Asesoramiento técnico e instalación in situ" },
  { icon: "◐", label: "Puerta a Puerta", desc: "Logística y montaje completo incluido" },
  { icon: "◑", label: "Marcas Líderes", desc: "Pioneer DJ, AlphaTheta, Wharfedale Pro" },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — visual card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-secondary">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(37,244,209,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.8) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative p-8 md:p-10 flex flex-col gap-4 min-h-64">
                <div className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center">
                  <span className="text-primary text-xl">◈</span>
                </div>
                {/* ✅ FIX 1: "Techniccal" → "Technical" */}
                <h3 className="text-light text-xl font-black uppercase leading-tight">
                  Technical Team
                </h3>
                <p className="text-light/40 text-xs uppercase tracking-widest">
                  Master Event
                </p>
                <div className="mt-auto flex items-center gap-2 text-primary text-sm font-semibold">
                  {/* ✅ FIX 2: teléfono incorrecto "+54 9 351 681 3717" → dato real del Footer */}
                  <span>+54 9 2617 52-3497</span>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-tl-none rounded-br-2xl" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-dark rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider">Potencia</p>
              {/* ✅ FIX 5: "3200W+" → "4200W+" (2×900 + 1400 + 2×500 = 4200W pico real) */}
              <p className="text-xl font-black">4200W+</p>
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <SectionLabel>Quiénes Somos</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-light uppercase leading-tight">
              Poder{" "}
              <span className="text-primary">Creativo Total</span>{" "}
              en Producción
            </h2>
            <p className="text-light/50 text-sm leading-relaxed">
              En Master Event, entendemos que la técnica es el motor para la
              emoción. Somos especialistas en transformar espacios mediante la
              tecnología de punta y siempre enfocados en inspirar y hacer vibrar
              {/* ✅ FIX 3: "cada muevo" → "cada show" */}
              cada show.
            </p>
            <p className="text-light/40 text-sm leading-relaxed">
              Trabajamos con las mejores marcas globales como{" "}
              <span className="text-primary font-semibold">Pioneer DJ</span>,{" "}
              <span className="text-primary font-semibold">AlphaTheta</span>,{" "}
              <span className="text-primary font-semibold">Wharfedale Pro</span> y{" "}
              {/* ✅ FIX 4: "Shure" → "Samsung" (marca real del sistema, Shure no aparece en el doc) */}
              <span className="text-primary font-semibold">Samsung</span>, para
              asegurar que cada detalle sea de alta fidelidad.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1.5 p-3 rounded-xl bg-secondary border border-light/5"
                >
                  <span className="text-primary text-lg">{f.icon}</span>
                  <p className="text-light text-sm font-bold">{f.label}</p>
                  <p className="text-light/40 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-2">
              <Button href="#contact" size="md">
                Trabajemos Juntos →
              </Button>
              <span className="text-light/30 text-xs">MASTER EVENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};