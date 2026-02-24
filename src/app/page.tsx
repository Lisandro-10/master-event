"use client";

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
      `}</style>

      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark px-4 py-16">

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full gap-0">
          {/* Waveform animation */}
          <div className="mt-2">
            <WaveformBars />
          </div>

          {/* Badge */}
          <div className="">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-primary/80 mb-4">
              <span className="w-5 h-px bg-primary/50" />
              Próximamente
              <span className="w-5 h-px bg-primary/50" />
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-light uppercase leading-[0.92] tracking-tight mb-3">
            Algo Grande
            <br />
            <span className="text-primary">Está en Camino</span>
          </h1>

          {/* Sub */}
          <p className="text-light/40 text-sm max-w-sm leading-relaxed mb-8">
            Estamos preparando la plataforma definitiva para la producción de
            eventos con sonido, luces y visuales de clase mundial.
          </p>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-light/10 to-transparent my-8" />

          {/* Contact & Social */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:+5492617523497"
              className="text-primary/80 hover:text-primary text-sm font-semibold tracking-wide transition-colors"
            >
              +54 9 261 752 3497
            </a>
            <p className="text-light/15 text-[10px] tracking-widest uppercase">
              © 2026 MASTER EVENT — MENDOZA, ARGENTINA
            </p>
          </div>
        </div>
      </main>
    </>
  );
}