const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || ''

function joinUrl(base: string, path: string): string {
  const cleanBase = base.replace(/\/+$/, '')
  const cleanPath = path.replace(/^\/+/, '')
  return `${cleanBase}/${cleanPath}`
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
  
  // Remover slash inicial si existe
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Si no hay CDN_URL configurado, retornar la ruta original
  if (!CDN_URL) {
    return `/${cleanPath}`
  }
  
  return joinUrl(CDN_URL, cleanPath)
}

/**
 * Helpers para imágenes de eventos
 * Estructura de bucket: eventos/evento-{number}/...
 */
export function getEventBasePath(eventNumber: number | string): string {
  return `eventos/evento-${eventNumber}`
}

export function getEventAssetUrl(eventNumber: number | string, path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return getCDNUrl(`${getEventBasePath(eventNumber)}/${cleanPath}`)
}

export function getEventImageUrl(eventNumber: number | string, filename: string): string {
  return getEventAssetUrl(eventNumber, filename)
}