import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { site, whatsappUrl } from '../data/site'

export default function WhatsAppFloat() {
  const message = `Hello ${site.shortName}, I would like to speak with a jewellery consultant.`

  return <motion.a initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }} href={whatsappUrl(message)} target="_blank" rel="noreferrer" className="group fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_rgba(37,211,102,.4)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_38px_rgba(37,211,102,.52)] sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:gap-3 sm:px-4 sm:py-3" aria-label={`Chat with ${site.name} on WhatsApp`}><FaWhatsapp size={29} /><span className="hidden text-xs font-bold sm:inline">Chat with us</span><span className="pointer-events-none absolute right-[66px] hidden whitespace-nowrap rounded-md bg-obsidian px-3 py-2 text-[10px] font-bold uppercase tracking-[.13em] text-white opacity-0 transition group-hover:opacity-100 md:block">Message Velora</span></motion.a>
}
