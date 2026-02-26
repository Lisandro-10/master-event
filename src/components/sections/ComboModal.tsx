"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { Combo } from "@/data/types";
import { Badge } from "@/components/ui/Badge";

interface ComboModalProps {
  combo: Combo | null;
  onClose: () => void;
}

export const ComboModal: React.FC<ComboModalProps> = ({ combo, onClose }) => {
  const [tab, setTab] = useState<"equipment" | "specs">("equipment");
  const [imgError, setImgError] = useState(false);

  // Reset image error when combo changes
  useEffect(() => {
    setImgError(false);
  }, [combo?.id]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    if (combo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [combo]);

  if (!combo) return null;

  const showImage = combo.image && !imgError;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-deeper/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-secondary rounded-2xl border border-light/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image / gradient header */}
        <div
          className={`relative h-40 md:h-52 flex items-end p-4 ${!showImage ? `bg-gradient-to-br ${combo.imagePlaceholder}` : ""}`}
        >
          {showImage && combo.image && (
            <Image
              src={combo.image}
              alt={combo.title}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,244,209,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,244,209,0.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
          <div className="relative flex flex-col gap-1 z-10">
            <Badge variant="primary">{combo.badge}</Badge>
            <h2 className="text-light font-black text-lg md:text-xl leading-tight">
              {combo.subtitle}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark/60 backdrop-blur flex items-center justify-center text-light/60 hover:text-light transition-colors z-10"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-light/10">
          {(["equipment", "specs"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase transition-colors ${
                tab === t
                  ? "text-primary border-b-2 border-primary"
                  : "text-light/40 hover:text-light/70"
              }`}
            >
              {t === "equipment" ? "Equipamiento" : "Especificaciones"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 max-h-64 md:max-h-[70vh] overflow-y-auto">
          {tab === "equipment" ? (
            <div className="flex flex-col gap-3">
              {combo.equipment.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl bg-dark/40 border border-light/5"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-light text-sm font-semibold">{item.name}</p>
                    <p className="text-light/50 text-xs leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {combo.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-3 rounded-xl bg-dark/40 border border-light/5 text-center"
                >
                  <span className="text-primary font-black text-base">
                    {spec.value}
                  </span>
                  {spec.sub && (
                    <span className="text-light/40 text-[9px] uppercase tracking-wider">
                      {spec.sub}
                    </span>
                  )}
                  <span className="text-light/60 text-[10px] mt-1 leading-tight">
                    {spec.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};