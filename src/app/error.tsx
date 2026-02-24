"use client";

import React, { useEffect, useState } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center px-4">

      {/* Giant 500 */}
      <p
        className={`
          text-[clamp(120px,30vw,280px)] font-black leading-none select-none
          text-primary/30
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        500
      </p>

      {/* Blinking dot */}
      <span
        className={`
          block w-1.5 h-1.5 rounded-full bg-primary my-5
          animate-[blink_1.4s_ease-in-out_infinite]
          transition-opacity duration-700 delay-200
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Message */}
      <p
        className={`
          text-xs tracking-[0.2em] uppercase text-light/40
          transition-opacity duration-700 delay-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        Algo salió mal
      </p>

      {/* CTA */}
      <button
        onClick={reset}
        className={`
          mt-10 px-7 py-2.5 rounded-full
          bg-transparent text-primary border border-primary/50
          text-xs font-bold tracking-[0.12em] uppercase cursor-pointer
          hover:bg-primary/[0.08] active:scale-95
          transition-all duration-200
          delay-[450ms]
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        Reintentar
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.15; }
        }
      `}</style>
    </main>
  );
}