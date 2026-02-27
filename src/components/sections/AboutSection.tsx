import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { getCDNUrl } from "@/app/api/lib/cdn";
import {
  HiOutlineSpeakerWave,
  HiOutlineWrenchScrewdriver,
  HiOutlineTruck,
  HiOutlineSparkles,
} from "react-icons/hi2";

const features = [
  {
    Icon: HiOutlineSpeakerWave,
    label: "Calidad Hi-Fi",
    desc: "32-bit / 96kHz, Pioneer DJ & Wharfedale Pro",
  },
  {
    Icon: HiOutlineWrenchScrewdriver,
    label: "Asesoramiento Técnico",
    desc: "Instalación in situ y soporte especializado en cada evento",
  },
  {
    Icon: HiOutlineTruck,
    label: "Puerta a Puerta",
    desc: "Logística, traslado e instalación in situ incluidos",
  },
  {
    Icon: HiOutlineSparkles,
    label: "Eventos a Medida",
    desc: "Bodegas, casamientos, corporativos, pubs, cumpleaños y más",
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="items-center">

          {/* Left — visual card */}
          {/* <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-secondary">
              <div className="relative p-8 md:p-10 flex flex-col gap-4 min-h-64">
                <Image
                  src={getCDNUrl("logo.png")}
                  alt="Imagen Quienes Somos"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-tl-none rounded-br-2xl" />
            </div>
          </div> */}

          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <SectionLabel>Quiénes Somos</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-light uppercase leading-tight">
              Poder{" "}
              <span className="text-primary">Creativo Total</span>{" "}
              en Producción
            </h2>

            <p className="text-light/50 text-sm lg:text-base leading-relaxed">
              En Master Event nos dedicamos a transformar eventos en{" "}
              <span className="text-light/80 font-medium">experiencias únicas</span>{" "}
              combinando equipos, sonido, iluminación y visuales profesionales.
              Nuestro compromiso está fundamentado en la{" "}
              <span className="text-light/80 font-medium">pasión y el profesionalismo</span>.
            </p>

            <p className="text-light/40 text-sm lg:text-base leading-relaxed">
              Cada detalle de la mezcla de{" "}
              <span className="text-primary font-semibold">precisión digital de 32 bits</span>{" "}
              (<span className="text-primary font-semibold">Pioneer DJ / AlphaTheta</span>) se escucha
              con potencia y claridad a través del sistema acústico{" "}
              <span className="text-primary font-semibold">Wharfedale Pro</span>,
              juego de luces{" "}
              <span className="text-primary font-semibold">DMX 512</span>{" "}
              y pantalla{" "}
              <span className="text-primary font-semibold">LED de 6m²</span>.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1.5 p-3 rounded-xl bg-secondary border border-light/5"
                >
                  <f.Icon className="text-primary text-lg lg:text-xl" />
                  <p className="text-light text-sm lg:text-base font-bold">{f.label}</p>
                  <p className="text-light/40 text-xs lg:text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-2">
              <Button href="#contact" size="md">
                Trabajemos Juntos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};