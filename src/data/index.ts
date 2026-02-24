import type { Combo, EventItem } from "@/data/types";

// Re-export types for convenience
export type { Combo, ComboEquipment, ComboSpec, EventItem } from "@/data/types";

// ─── Combos ──────────────────────────────────────────────────────────────────

export const combos: Combo[] = [
  {
    id: "premium-club",
    badge: "PRO",
    title: "Combo Pioneer V10 + CDJ3000",
    subtitle: "Premium Club Bundle",
    description:
      "El estándar de oro de la industria. Sonido de alta fidelidad sin compromisos para los escenarios más grandes del mundo.",
    imagePlaceholder: "from-secondary to-dark-deeper",
    equipment: [
      {
        name: "1x Pioneer DJM-V10",
        description:
          "Professional 6-channel flagship mixer with elite sound quality and 32-bit converters.",
      },
      {
        name: "2x CDJ-3000",
        description:
          "Industry standard multi players with high res 9\" touch screens and MPU technology.",
      },
      {
        name: "2x Wharfedale Pro TOURUS-AX15",
        description:
          "High performance active speakers, 900W peak, fanless design with titanium drivers.",
      },
    ],
    specs: [
      { label: "Audio Processing", value: "32-bit", sub: "96kHz" },
      { label: "Max Output", value: "900W", sub: "Peak" },
      { label: "Connectivity", value: "Pro Link", sub: "Gigabit" },
      { label: "Control", value: "6-Ch", sub: "Mixer" },
      { label: "Weight", value: "~1.0kg", sub: "RMX unit" },
      { label: "Total", value: "45kg", sub: "Full rig" },
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
    equipment: [
      {
        name: "2x TOURUS-AX15-MBT",
        description:
          "Bi-amplified active 15\" speakers, 900W peak, Bluetooth & TWS, fanless cooling.",
      },
      {
        name: "1x T-Sub-AX15B",
        description:
          "Active 15\" subwoofer, 1400W peak, birch plywood cabinet with Tough-Tone finish.",
      },
      {
        name: "2x Samsung Sound Tower MX-T50",
        description:
          "500W bi-directional DJ booth speakers with Bass Booster technology.",
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
    equipment: [
      {
        name: "1x Pioneer DJM-V10",
        description:
          "6-channel mixer with 4-band EQ, Beat FX, 96kHz sampling rate.",
      },
      {
        name: "2x CDJ-3000",
        description:
          "Advanced multi players with Key Sync, Touch Preview and Gigabit Ethernet.",
      },
      {
        name: "1x RMX-1000",
        description:
          "3-in-1 effects & sampler unit: Scene FX, Isolator FX, X-Pad with Pitch Shift.",
      },
      {
        name: "Pantalla LED 6m²",
        description:
          "12 modules, pixel pitch 3.91mm, IP65, 1920-7860Hz refresh rate, HD/Full HD/4K.",
      },
    ],
    specs: [
      { label: "Visual", value: "6m²", sub: "LED Screen" },
      { label: "Pixel Pitch", value: "3.91mm", sub: "IP65" },
      { label: "Refresh", value: "7860Hz", sub: "Anti-flicker" },
      { label: "Resolution", value: "4K", sub: "Large format" },
      { label: "Lighting", value: "DMX 512", sub: "Controller" },
      { label: "FX Units", value: "10+", sub: "Fixtures" },
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
    span: "wide",
  },
  {
    id: "skyline",
    type: "Corporate",
    title: "Skyline Executive Event",
    description: "Producción integral para evento corporativo de alto nivel.",
    imagePlaceholder: "from-secondary via-dark-deeper to-primary/10",
    span: "normal",
  },
  {
    id: "techno",
    type: "Club Night",
    title: "Techno Warehouse Session",
    description: "Setup Pioneer V10 + CDJ3000 para noche de club underground.",
    imagePlaceholder: "from-dark-deeper to-dark",
    span: "normal",
  },
  {
    id: "innovation",
    type: "Corporate",
    title: "Global Innovation Expo",
    description: "Sonido y visuales para exposición internacional.",
    imagePlaceholder: "from-secondary/80 to-dark-deeper",
    span: "normal",
  },
  {
    id: "birthday",
    type: "Party",
    title: "Elite Birthday Celebration",
    description: "Experiencia sonora completa para celebración privada.",
    imagePlaceholder: "from-primary/15 to-secondary",
    span: "normal",
  },
];