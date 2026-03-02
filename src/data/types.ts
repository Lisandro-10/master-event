// ─── Types only — importar desde acá para evitar cross-boundary issues ───────

export interface ComboEquipment {
  name: string;
  description: string;
}

export interface ComboSpec {
  label: string;
  value: string;
  sub?: string;
}

export interface Combo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
  /**
   * Ruta a la imagen del combo dentro de /public.
   * Ejemplo: "/images/combos/premium-club.jpg"
   * Mientras no haya imagen real, puede ser undefined — el componente
   * mostrará el gradient imagePlaceholder como fallback.
   */
  image?: string;
  equipment: ComboEquipment[];
  specs: ComboSpec[];
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  image?: string;
}