import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/site'

const links = [
  ['Collections', '#collections'],
  ['Our Story', '#story'],
  ['Visit Us', '#visit-us'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const originalOverflow = document.body.style.overflow
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return <>
    <div id="announcement" className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-gold-gradient py-2 text-[9px] font-semibold tracking-[.16em] text-obsidian sm:text-[10px]"><div className="flex w-max animate-marquee whitespace-nowrap">{[0, 1].map((item) => <span key={item} className="mr-8">VELORA GOLD &amp; DIAMONDS <span className="mx-5">✦</span> UPPINANGADY <span className="mx-5">✦</span> FINE GOLD <span className="mx-5">✦</span> DIAMONDS <span className="mx-5">✦</span> BRIDAL CRAFT <span className="mx-5">✦</span> VISIT OUR SHOWROOM</span>)}</div></div>
    <header className="fixed inset-x-0 top-[29px] z-40 border-b border-ink/10 bg-ivory/90 text-ink backdrop-blur-md"><nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-8" aria-label="Primary navigation"><a href="#home" className="flex items-center" aria-label={`${site.name} home`}><img src="/velora-logo-transparent.png" alt={site.name} className="h-[60px] w-auto object-contain sm:h-[66px]" /></a><div className="hidden items-center gap-8 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-semibold uppercase tracking-[.16em] text-ink/70 transition hover:text-gold-600">{label}</a>)}</div><div className="flex items-center gap-1 sm:gap-2"><button className="hidden rounded-full p-2 text-ink/70 transition hover:bg-gold-100 hover:text-gold-600 sm:block" aria-label="Search collection"><Search size={19} /></button><a href="#collections" className="hidden rounded-full p-2 text-ink/70 transition hover:bg-gold-100 hover:text-gold-600 sm:block" aria-label="View collection"><ShoppingBag size={19} /></a><button onClick={() => setOpen((current) => !current)} className="rounded-full p-2 text-ink transition hover:bg-gold-100 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={22} /> : <Menu size={22} />}</button></div></nav></header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onPointerDown={() => setOpen(false)} className="fixed inset-0 z-[60] bg-obsidian/35 p-3 pt-[112px] backdrop-blur-[2px] lg:hidden"><motion.div initial={{ opacity: 0, y: -18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -18, scale: .98 }} transition={{ type: 'spring', damping: 24, stiffness: 280 }} onPointerDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Mobile navigation" className="mx-auto w-full max-w-lg rounded-2xl border border-gold-300/50 bg-ivory p-6 text-ink shadow-2xl"><div className="mb-4 flex items-start justify-between"><img src="/velora-logo-transparent.png" alt={site.name} className="h-24 w-auto object-contain" /><button onClick={() => setOpen(false)} className="rounded-full p-2 transition hover:bg-gold-100" aria-label="Close menu"><X size={20} /></button></div>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 font-display text-2xl last:border-0">{label}</a>)}<a href="#visit-us" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-gold-gradient px-5 py-3 text-center text-xs font-bold uppercase tracking-luxe text-obsidian">Plan your visit</a><p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[.14em] text-ink/45">Tap outside to close</p></motion.div></motion.div>}</AnimatePresence>
  </>
}
