'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

interface FloatingWhatsAppProps {
  phoneNumber: string
  message?: string
}

export function FloatingWhatsApp({ 
  phoneNumber, 
  message = 'Hola! Me interesa consultar sobre...' 
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip — visible on hover, desktop only */}
      <div
        className="
          hidden lg:flex items-center gap-2
          absolute right-full mr-4 top-1/2 -translate-y-1/2
          px-3 py-2
          bg-secondary border border-light/10
          text-light/80 text-xs font-medium tracking-wide
          rounded-xl shadow-lg whitespace-nowrap
          opacity-0 translate-x-1
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200 ease-out
          pointer-events-none
        "
      >
        {/* Teal accent dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
        ¿Necesitas ayuda?
        {/* Arrow */}
        <span
          className="absolute -right-[7px] top-1/2 -translate-y-1/2
            border-[7px] border-transparent border-l-secondary"
        />
        {/* Border arrow (outline) */}
        <span
          className="absolute -right-[8px] top-1/2 -translate-y-1/2
            border-[8px] border-transparent border-l-light/10"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Main button */}
      <div
        className="
          relative flex items-center justify-center
          w-14 h-14 sm:w-[3.75rem] sm:h-[3.75rem]
          rounded-full
          bg-[#25D366]
          shadow-[0_4px_24px_rgba(37,211,102,0.35)]
          transition-all duration-300 ease-out
          group-hover:scale-110
          group-hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)]
          active:scale-95
        "
      >
        <FaWhatsapp className="w-7 h-7 sm:w-7 sm:h-7 text-white" />
      </div>
    </Link>
  )
}