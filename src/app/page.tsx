"use client";

import Image from "next/image";

// ─── Waveform Bars ───────────────────────────────────────────────────────────
const BARS = [
  { h: 18, delay: "0s" }, { h: 32, delay: "0.1s" }, { h: 48, delay: "0.2s" },
  { h: 60, delay: "0.3s" }, { h: 72, delay: "0.4s" }, { h: 56, delay: "0.5s" },
  { h: 80, delay: "0.6s" }, { h: 96, delay: "0.7s" }, { h: 80, delay: "0.8s" },
  { h: 64, delay: "0.9s" }, { h: 88, delay: "1.0s" }, { h: 100, delay: "1.1s" },
  { h: 88, delay: "1.2s" }, { h: 72, delay: "1.3s" }, { h: 56, delay: "1.4s" },
  { h: 40, delay: "1.5s" }, { h: 24, delay: "1.6s" },
];

const WaveformBars: React.FC = () => (
  <div className="flex items-end gap-[3px] h-16 mb-6">
    {BARS.map((bar, i) => (
      <div
        key={i}
        className="w-[5px] rounded-full bg-gradient-to-t from-primary/40 to-primary"
        style={{
          height: `${bar.h}%`,
          animation: `waveBar 1.4s ease-in-out infinite alternate`,
          animationDelay: bar.delay,
        }}
      />
    ))}
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ComingSoonPage() {
  return (
    <>
      {/* ── Inline keyframes ── */}
      <style>{`
        @keyframes waveBar {
          0%   { transform: scaleY(0.4); opacity: 0.6; }
          100% { transform: scaleY(1);   opacity: 1;   }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.04; transform: scale(1);    }
          50%       { opacity: 0.09; transform: scale(1.06); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); opacity: 0; }
          50%  { opacity: 0.12; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .anim-fade-up { animation: fadeUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        .delay-5 { animation-delay: 0.7s; }
      `}</style>

      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark px-4 py-16">

        {/* ── Background glows ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Center radial */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary"
            style={{ opacity: 0.04, filter: "blur(120px)", animation: "pulseGlow 6s ease-in-out infinite" }}
          />
          {/* Bottom left */}
          <div className="absolute bottom-0 left-0 w-80 h-60 bg-primary/5 rounded-full" style={{ filter: "blur(80px)" }} />
          {/* Top right */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/40 rounded-full" style={{ filter: "blur(60px)" }} />

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "160px 160px",
            }}
          />

          {/* Scanline sweep */}
          <div
            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
            style={{ animation: "scanline 8s linear infinite", top: 0 }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,244,209,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full gap-0">
          {/* Waveform animation */}
          <div className="anim-fade-up delay-1 mt-2">
            <WaveformBars />
          </div>

          {/* Badge */}
          <div className="anim-fade-up delay-1">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-primary/80 mb-4">
              <span className="w-5 h-px bg-primary/50" />
              Próximamente
              <span className="w-5 h-px bg-primary/50" />
            </span>
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up delay-2 text-4xl sm:text-5xl md:text-6xl font-black text-light uppercase leading-[0.92] tracking-tight mb-3">
            Algo Grande
            <br />
            <span className="text-primary">Está en Camino</span>
          </h1>

          {/* Sub */}
          <p className="anim-fade-up delay-3 text-light/40 text-sm max-w-sm leading-relaxed mb-8">
            Estamos preparando la plataforma definitiva para la producción de
            eventos con sonido, luces y visuales de clase mundial.
          </p>

          {/* Divider */}
          <div className="anim-fade-up delay-4 w-full max-w-md h-px bg-gradient-to-r from-transparent via-light/10 to-transparent my-8" />

          {/* Contact & Social */}
          <div className="anim-fade-up delay-5 flex flex-col items-center gap-4">
            <a
              href="tel:+5493516813717"
              className="text-primary/80 hover:text-primary text-sm font-semibold tracking-wide transition-colors"
            >
              +54 9 351 681 3717
            </a>
            {/* <div className="flex items-center gap-3">
              {[
                { label: "ig", href: "#" },
                { label: "fb", href: "#" },
                { label: "𝕏",  href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-light/10 flex items-center justify-center text-light/40 hover:border-primary/50 hover:text-primary transition-all text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div> */}
            <p className="text-light/15 text-[10px] tracking-widest uppercase">
              © 2026 MASTER EVENT — MENDOZA, ARGENTINA
            </p>
          </div>
        </div>
      </main>
    </>
  );
}