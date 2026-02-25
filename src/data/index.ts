import type { Combo, EventItem } from "@/data/types";

// Re-export types for convenience
export type { Combo, ComboEquipment, ComboSpec, EventItem } from "@/data/types";

// ─── Combos ──────────────────────────────────────────────────────────────────
//
// Convención de rutas de imagen → /public/images/combos/<id>.jpg
// Colocar las imágenes en esa carpeta y descomentar la key `image`.
// Mientras no existan, el componente usa `imagePlaceholder` (gradient CSS) como fallback.

export const combos: Combo[] = [
  {
    id: "premium-club",
    badge: "PRO",
    title: "Combo Pioneer V10 + CDJ3000",
    subtitle: "Premium Club Bundle",
    description:
      "El estándar de oro de la industria. Sonido de alta fidelidad sin compromisos para los escenarios más grandes del mundo.",
    imagePlaceholder: "from-secondary to-dark-deeper",
    // image: "/images/combos/premium-club.jpg",
    equipment: [
      {
        name: "1x Pioneer DJM-V10",
        description:
          "Mezcladora profesional de 6 canales con EQ de 4 bandas, convertidores A/D-D/A de 32 bits y 96kHz de muestreo.",
      },
      {
        name: "2x CDJ-3000",
        description:
          "Multireproductor profesional con pantalla táctil HD de 9\", MPU avanzada, Key Sync/Shift y Pro DJ Link Gigabit.",
      },
      {
        name: "2x Wharfedale Pro TOURUS-AX15-MBT",
        description:
          "Altavoces bi-amplificados activos 15\", 900W pico, diseño fanless con diafragma de titanio 1.75\" y Bluetooth/TWS.",
      },
    ],
    specs: [
      { label: "Audio Processing", value: "32-bit", sub: "96kHz" },
      { label: "Max Output", value: "900W", sub: "Peak" },
      { label: "Connectivity", value: "Pro Link", sub: "Gigabit" },
      { label: "Control", value: "6-Ch", sub: "Mixer" },
      { label: "SPL Máx", value: "130dB", sub: "Speakers" },
      { label: "Pantalla CDJ", value: '9"', sub: "Touchscreen" },
    ],
  },
  {
    id: "sonido-pro",
    badge: "FULL PRODUCTION",
    title: "Sistema de Sonido Pro",
    subtitle: "Pro Sound System",
    description:
      "Potencia y claridad inigualable con Wharfedale Pro. Cobertura acústica perfecta para cualquier aforo de 100 a 200 personas.",
    imagePlaceholder: "from-dark-deeper to-secondary/50",
    // image: "/images/combos/sonido-pro.jpg",
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
    id: "alphatheta",
    badge: "NEXT-GEN",
    title: "Setup AlphaTheta Next-Gen",
    subtitle: "Full Production Setup",
    description:
      "La última tecnología para tu evento. Innovación y diseño al servicio de la creatividad más vanguardista con visuales LED de 6m².",
    imagePlaceholder: "from-primary/10 to-dark-deeper",
    // image: "/images/combos/alphatheta.jpg",
    equipment: [
      {
        name: "1x Pioneer DJM-V10",
        description:
          "Mezcladora de 6 canales con EQ de 4 bandas, Beat FX, velocidad de muestreo de 96kHz y 32 bits.",
      },
      {
        name: "2x CDJ-3000",
        description:
          "Multireproductor avanzado con Key Sync, Touch Preview, Stacked Waveform y Pro DJ Link Gigabit Ethernet.",
      },
      {
        name: "1x RMX-1000",
        description:
          "Sistema 3 en 1 de efectos y sampler: Scene FX, Isolator FX y X-Pad con Pitch Shift. Peso: 1.3kg.",
      },
      {
        name: "Pantalla LED 6m²",
        description:
          "12 módulos, pixel pitch 3.91mm, protección IP65, tasa de refresco 1920-7860Hz, resolución HD/Full HD/4K.",
      },
    ],
    specs: [
      { label: "Visual", value: "6m²", sub: "LED Screen" },
      { label: "Pixel Pitch", value: "3.91mm", sub: "IP65" },
      { label: "Refresh", value: "7860Hz", sub: "Anti-flicker" },
      { label: "Resolution", value: "4K", sub: "Large format" },
      { label: "Lighting", value: "DMX 512", sub: "Controller" },
      { label: "Fixtures", value: "8", sub: "Accesorios" },
    ],
  },
];

// ─── Events ──────────────────────────────────────────────────────────────────

export const events: EventItem[] = [
  {
    id: "neon-fest",
    type: "Live Event",
    title: "Neon Summer Fest",
    description: "Festival al aire libre con sistema de sonido completo y pantalla LED.",
    imagePlaceholder: "from-primary/20 via-dark to-secondary",
    // image: "/images/events/neon-fest.jpg",
    span: "wide",
  },
  {
    id: "skyline",
    type: "Corporate",
    title: "Skyline Executive Event",
    description: "Producción integral para evento corporativo de alto nivel.",
    imagePlaceholder: "from-secondary via-dark-deeper to-primary/10",
    // image: "/images/events/skyline.jpg",
    span: "normal",
  },
  {
    id: "techno",
    type: "Club Night",
    title: "Techno Warehouse Session",
    description: "Setup Pioneer V10 + CDJ3000 para noche de club underground.",
    imagePlaceholder: "from-dark-deeper to-dark",
    // image: "/images/events/techno.jpg",
    span: "normal",
  },
  {
    id: "innovation",
    type: "Corporate",
    title: "Global Innovation Expo",
    description: "Sonido y visuales para exposición internacional.",
    imagePlaceholder: "from-secondary/80 to-dark-deeper",
    // image: "/images/events/innovation.jpg",
    span: "normal",
  },
  {
    id: "birthday",
    type: "Party",
    title: "Elite Birthday Celebration",
    description: "Experiencia sonora completa para celebración privada.",
    imagePlaceholder: "from-primary/15 to-secondary",
    // image: "/images/events/birthday.jpg",
    span: "normal",
  },
];