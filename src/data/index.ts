import type { Combo, EventItem } from "@/data/types";
import { getCDNUrl } from "@/app/api/lib/cdn";

// Re-export types for convenience
export type { Combo, ComboEquipment, ComboSpec, EventItem } from "@/data/types";

// ─── Combos ──────────────────────────────────────────────────────────────────
//
// Images are fetched from S3/CDN bucket.
// Fallback: `imagePlaceholder` (CSS gradient) when image fails to load.

export const combos: Combo[] = [
  {
    id: "setup-pioneer",
    title: "Setup Pioneer",
    description:
      "El estándar de oro de la industria. Sonido de alta fidelidad sin compromisos para los escenarios más grandes del mundo.",
    imagePlaceholder: "from-secondary to-dark-deeper",
    image: getCDNUrl("combos/setup-pioneer.webp"),
    equipment: [
      {
        name: "1x MIXER V10 LF",
        description:
          "Mezcladora profesional de 6 canales con EQ de 4 bandas, convertidores A/D-D/A de 32 bits y 96kHz de muestreo.",
      },
      {
        name: "2x CDJ-3000",
        description:
          "Multireproductor profesional con pantalla táctil HD de 9\", MPU avanzada, Key Sync/Shift y Pro DJ Link Gigabit.",
      },
      {
        name: "1 RMX 1000",
        description:
          "Estación de efectos profesional para DJ con procesamiento DSP de alta resolución, integración plug-in VST/AU y total compatibilidad con mixers y CDJ mediante conexión MIDI y USB.",
      },
    ],
      specs: [
        { label: "Audio Resolution", value: "32-bit A/D & D/A", sub: "Mixer & Players" },
        { label: "Sampling Rate", value: "96 kHz", sub: "Mixer Processing" },
        { label: "Player Output Quality", value: "115 dB S/N", sub: "CDJ-3000" },
        { label: "Effect Processing", value: "24-bit/48 kHz", sub: "RMX-1000 FX Unit" },
        { label: "Channels / Control", value: "6-Ch", sub: "Mixer" },
        { label: "Display", value: "9″ HD Touch", sub: "CDJ-3000" },
      ],
  },
  {
    id: "sonido-pro",
    title: "Sonido PRO de alta fidelidad",
    description:
      "Potencia y claridad inigualable con Wharfedale Pro. Cobertura acústica perfecta para cualquier aforo de 100 a 200 personas.",
    imagePlaceholder: "from-dark-deeper to-secondary/50",
    image: getCDNUrl("combos/sonido.webp"),
    equipment: [
      {
        name: "2x TOURUS-AX15-MBT",
        description:
          "Altavoces bi-amplificados activos 15\" de 2 vías, 900W pico, diseño fanless y conectividad Bluetooth/TWS.",
      },
      {
        name: "1x T-Sub-AX15B",
        description:
          "Subwoofer activo 15\", 1400W pico, gabinete de contrachapado de abedul 15mm con pintura Tough-Tone y Clase D.",
      },
      {
        name: "2x Samsung Sound Tower MX-T50",
        description:
          "Altavoces bidireccionales de 500W para cabina de DJ con tecnología Bass Booster y diseño ergonómico.",
      },
    ],
    specs: [
      { label: "Main Speakers", value: "900W", sub: "Peak each" },
      { label: "Subwoofer", value: "1400W", sub: "Peak" },
      { label: "Booth", value: "500W", sub: "x2 towers" },
      { label: "Max SPL", value: "132dB", sub: "Sub" },
      { label: "Freq Range", value: "45Hz", sub: "to 20kHz" },
      { label: "Cooling", value: "Fanless", sub: "Convection" },
    ],
  },
{
    id: "pantalla-led",
    title: "PANTALLA LED 6M2",
    description:
      "Pantalla LED de alta definición de 6 m² con pixel pitch 3.91 mm, elevadas tasas de refresco para imágenes fluidas, diseño modular y resistencia IP65 para usos en interiores y exteriores.",
    imagePlaceholder: "from-primary/10 to-dark-deeper",
    image: getCDNUrl("combos/alphatheta.webp"),
    equipment: [
      {
        name: "Pantalla LED 6m²",
        description:
          "Display LED modular de 6 metros cuadrados con pixel pitch 3.91 mm, paneles SMD de alta densidad, protección IP65 para exteriores, alto brillo y compatibilidad con diversas fuentes de video.",
      },
    ],
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm", sub: "Density ~65 536 px/m²" },
      { label: "Refresh Rate", value: "≥3 840 Hz", sub: "Flicker-free display" },
      { label: "Brightness", value: "≥5 000 nits", sub: "Outdoor ready" },
      { label: "Viewing Angle", value: "140°/140°", sub: "H/V" },
      { label: "Ingress Protection", value: "IP65", sub: "Front/Outdoor" },
      { label: "Lifetime", value: "≥100 000 h", sub: "LED lifespan" },
    ],
  }
];

// ─── Events ──────────────────────────────────────────────────────────────────

export const events: EventItem[] = [
  {
    id: "neon-fest",
    title: "Evento en Agrelo",
    imagePlaceholder: "from-primary/20 via-dark to-secondary",
    image: getCDNUrl("eventos/evento-1/evento-1_1.webp"),
  },
  {
    id: "skyline",
    title: "Cumpleaños en Guaymallén",
    imagePlaceholder: "from-secondary via-dark-deeper to-primary/10",
    image: getCDNUrl("eventos/evento-2/evento-2_1.webp"),
  },
  {
    id: "techno",
    title: "Evento en café - bar Coordenadas en Potrerillos",
    imagePlaceholder: "from-dark-deeper to-dark",
    image: getCDNUrl("eventos/evento-3/evento-3_1.webp"),
  },
  {
    id: "tuki",
    title: "Cumpleaños en Godoy Cruz",
    imagePlaceholder: "from-dark-deeper to-dark",
    image: getCDNUrl("eventos/evento-4/evento-4_1.webp"),
  },
];