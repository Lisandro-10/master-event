const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || ''

/**
 * Safely extracts hostname from CDN URL for Next.js config
 */
export function getCDNHostname(): string {
  if (!CDN_URL) return ''
  try {
    const url = new URL(CDN_URL)
    return url.hostname
  } catch {
    // Fallback: try to extract hostname manually
    return CDN_URL.replace(/^https?:\/\//, '').split('/')[0]
  }
}

function joinUrl(base: string, path: string): string {
  const cleanBase = base.replace(/\/+$/, '')
  const cleanPath = path.replace(/^\/+/, '')
  return `${cleanBase}/${cleanPath}`
}

function cleanPath(path: string): string {
  return path.startsWith('/') ? path.slice(1) : path
}

/**
 * Convierte una ruta relativa en una URL completa de S3/CDN
 * @param path - Ruta relativa (ej: 'eventos/evento-12/hero.webp')
 * @returns URL completa de S3/CDN
 */
export function getCDNUrl(path: string): string {
  // Si ya es una URL completa, retornarla sin modificar
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const cleaned = cleanPath(path)

  // Si no hay CDN_URL configurado, retornar la ruta original
  if (!CDN_URL) {
    return `/${cleaned}`
  }

  return joinUrl(CDN_URL, cleaned)
}

/**
 * Check if CDN is configured
 */
export function isCDNConfigured(): boolean {
  return Boolean(CDN_URL)
}

// ─── Event Helpers ────────────────────────────────────────────────────────────
// Bucket structure: eventos/evento-{number}/...

export function getEventBasePath(eventNumber: number | string): string {
  return `eventos/evento-${eventNumber}`
}

export function getEventAssetUrl(eventNumber: number | string, path: string): string {
  return getCDNUrl(`${getEventBasePath(eventNumber)}/${cleanPath(path)}`)
}

export function getEventImageUrl(eventNumber: number | string, filename: string): string {
  return getEventAssetUrl(eventNumber, filename)
}

// ─── Combo Helpers ────────────────────────────────────────────────────────────
// Bucket structure: combos/{id}.webp

export function getComboImageUrl(comboId: string): string {
  return getCDNUrl(`combos/${comboId}.webp`)
}

// ─── General Asset Helpers ────────────────────────────────────────────────────

export function getLogoUrl(): string {
  return getCDNUrl('logo.png')
}

// ─── Image Strategy Helpers ───────────────────────────────────────────────────

/**
 * Determina si una URL corresponde a un asset de evento.
 * Los assets de eventos se sirven directo desde S3 sin pasar por el
 * optimizador de Vercel, ya que:
 *  - Ya están en .webp (conversión no necesaria)
 *  - Se agregan frecuentemente (URLs nuevas = sin stale cache)
 *  - Si se reemplazan, se usa nombre distinto (hero-v2.webp)
 *
 * Esto preserva las 5K transformaciones gratuitas de Vercel
 * para assets verdaderamente estáticos (combos, logo, brand).
 */
export function isEventAsset(url: string): boolean {
  return url.includes('/eventos/')
}