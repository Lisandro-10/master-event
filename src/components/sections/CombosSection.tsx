"use client";

import React, { useState } from "react";
import Image from "next/image";
import { combos } from "@/data/index";
import type { Combo } from "@/data/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ComboModal } from "@/components/sections/ComboModal";
import { BsArrowRight } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";

const ComboCard: React.FC<{ combo: Combo; onOpen: (c: Combo) => void }> = ({
  combo,
  onOpen,
}) => {
  const [imgError, setImgError] = useState(false);
  const showImage = combo.image && !imgError;

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-light/10 bg-secondary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,244,209,0.08)]">
      {/* Image / gradient */}
      <div
        className={`relative h-44 md:h-52 overflow-hidden ${!showImage ? `bg-gradient-to-br ${combo.imagePlaceholder}` : ""}`}
      >
        {showImage && combo.image && (
          <Image
            src={combo.image}
            alt={combo.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,244,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-5 gap-3">
        <h3 className="text-light font-bold text-base leading-tight">
          {combo.title}
        </h3>
        <p className="text-light/50 text-sm leading-relaxed flex-1">
          {combo.description}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="self-start px-0 text-primary hover:text-primary/80"
          onClick={() => onOpen(combo)}
        >
          Saber más
          <BsArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export const CombosSection: React.FC = () => {
  const [selectedCombo, setSelectedCombo] = useState<Combo | null>(null);

  return (
    <>
      <section id="combos" className="relative py-20 md:py-28 px-4">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="flex flex-col gap-3">
              <SectionLabel>Equipamiento Premium</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-black text-light uppercase leading-tight">
                Nuestros
                <br />
                Combos
              </h2>
            </div>
            <p className="text-light/40 text-sm max-w-xs leading-relaxed md:text-right">
              Soluciones a medida para bodegas, casamientos, corporativos,
              bares, bares, cumpleaños y más.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {combos.map((combo) => (
              <ComboCard
                key={combo.id}
                combo={combo}
                onOpen={setSelectedCombo}
              />
            ))}
          </div>
          <div className="text-center text-primary/90 text-sm mt-8 px-4 py-2 rounded-md font-medium flex justify-center items-center gap-2">
            <BiInfoCircle className="text-primary" size={32} />
            <span>Todos los combos incluyen setup de luces sin ningún costo adicional.</span>
          </div>
        </div>
      </section>

      <ComboModal combo={selectedCombo} onClose={() => setSelectedCombo(null)} />
    </>
  );
};