"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getCDNUrl } from "@/app/api/lib/cdn";

const navLinks = [
  { label: "Combos", href: "#combos" },
  { label: "Quiénes Somos", href: "#about" },
  { label: "Eventos", href: "#events" },
  { label: "Contacto", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-primary/10 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 z-10">
            <Image
              src={getCDNUrl("logo.png")}
              alt="Master Event"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="text-light font-bold text-sm tracking-wider hidden md:block">
              MasterEvent
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-light/60 hover:text-primary text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" href="#contact">
              Consúltanos
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 z-10"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-light transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-light transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-light transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" />
        <nav className="relative flex flex-col justify-center items-start h-full px-8 gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-light/80 hover:text-primary transition-colors duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            size="lg"
            className="mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Consúltanos
          </Button>
        </nav>
      </div>
    </>
  );
};