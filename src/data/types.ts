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
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
  equipment: ComboEquipment[];
  specs: ComboSpec[];
}

export interface EventItem {
  id: string;
  type: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  span?: "wide" | "tall" | "normal";
}