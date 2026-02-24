"use client";

import React, { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to API/email service
    console.log("Form submitted:", formData);
    alert("¡Gracias! Te contactamos en menos de 24 horas.");
  };

  const inputBase =
    "w-full bg-secondary/60 border border-light/10 rounded-xl px-4 py-3 text-light text-sm placeholder:text-light/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200";

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <SectionLabel>Hablemos</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-light uppercase leading-tight">
            ¿Tienes un
            <br />
            <span className="text-primary">Evento?</span>
          </h2>
          <p className="text-light/40 text-sm max-w-sm leading-relaxed">
            Nuestro equipo técnico está listo para asesorarte en menos de 24 horas.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-secondary/40 border border-light/10 rounded-2xl p-6 md:p-8 backdrop-blur"
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-light/50 text-xs font-semibold uppercase tracking-widest">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre..."
                value={formData.name}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-light/50 text-xs font-semibold uppercase tracking-widest">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>
          </div>

          {/* Phone + Event type row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-light/50 text-xs font-semibold uppercase tracking-widest">
                Celular
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+54 9..."
                value={formData.phone}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-light/50 text-xs font-semibold uppercase tracking-widest">
                Tipo de Evento
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={`${inputBase} appearance-none`}
              >
                <option value="" disabled>
                  Seleccioná...
                </option>
                <option value="bodega">Bodega / Salón</option>
                <option value="club">Bar / Pub / Club</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="casamiento">Casamiento</option>
                <option value="corporativo">Corporativo</option>
                <option value="festival">Festival</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-light/50 text-xs font-semibold uppercase tracking-widest">
              Tu Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Cuéntanos sobre tu evento..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputBase} resize-none`}
            />
          </div>

          <Button type="submit" size="lg" className="w-full mt-2">
            Enviar Mensaje ↗
          </Button>
        </form>
      </div>
    </section>
  );
};