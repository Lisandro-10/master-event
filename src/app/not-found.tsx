"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center px-4">

      {/* Giant 404 */}
      <p
        className={`
          text-[clamp(120px,30vw,280px)] font-black leading-none select-none
          text-primary/30
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        404
      </p>

      {/* Divider */}
      <div
        className={`
          w-10 h-px bg-primary/40 mx-auto mb-6
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
        Esta página no existe
      </p>

      {/* CTA */}
      <Link
        href="/"
        className={`
          mt-10 px-7 py-2.5 rounded-full
          bg-primary text-dark
          text-xs font-bold tracking-[0.12em] uppercase
          hover:brightness-110 active:scale-95
          transition-all duration-200
          delay-[450ms]
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        Volver al inicio
      </Link>
    </main>
  );
}