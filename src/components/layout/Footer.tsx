import React from "react";
import Image from "next/image";
import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const footerLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Combos", href: "#combos" },
  { label: "Quiénes Somos", href: "#about" },
  { label: "Eventos", href: "#events" },
  { label: "Contacto", href: "#contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-light/10 py-10 md:py-14 px-4 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-dark-deeper/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Master Event"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-light font-black text-sm tracking-widest uppercase">
              Master Event
            </span>
          </div>
          <p className="text-light/30 text-xs max-w-[200px] text-center md:text-left leading-relaxed">
            Especialistas en la creación de experiencias sonoras y visuales
            inolvidables.
          </p>
          <p className="text-light/20 text-xs">
            © 2026 MASTER EVENT. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-light/40 hover:text-primary text-xs font-medium tracking-wider transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              {[{icon:"𝕏", link: ""}, {icon:<FaInstagram/>, link: "https://www.instagram.com/juan_ignacio_lemmo/"}, {icon: <FaThreads/>, link: "https://www.threads.com/@juan_ignacio_lemmo?xmt=AQF0zS1lWVRbleAoWjwQzYXwrXfjT3It5jfnfUtrHDWbZ_g"}].map((s) => (
                <a
                  key={s.link}
                  href={s.link}
                  target="_blank"
                  className="w-8 h-8 rounded-full border border-light/10 flex items-center justify-center text-light/40 hover:border-primary/50 hover:text-primary transition-all text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-2">
                <FaPhone className="text-light/40 hover:text-primary text-xs font-medium tracking-wider transition-colors duration-200"/>
                <span className="text-light/40 hover:text-primary text-xs font-medium tracking-wider transition-colors duration-200">+54 9 2617 52-3497</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-light/40 hover:text-primary text-xs font-medium tracking-wider transition-colors duration-200"/>
                <span className="text-light/40 hover:text-primary text-xs font-medium tracking-wider transition-colors duration-200">lemmojuanignacio@gmail.com</span>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  );
};