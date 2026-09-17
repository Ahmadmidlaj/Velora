import { ArrowUpRight, Clock3, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '../data/site'

export default function StoreLocator() {
  return (
    <section id="visit-us" className="bg-[#e9d9c0] px-5 py-24 text-obsidian sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
        <div className="lg:pb-3"><p className="eyebrow">Come closer</p><h2 className="section-title mt-4">The most beautiful<br /><em>pieces are felt.</em></h2><p className="mt-7 max-w-md text-sm leading-7 text-ink/70">A quiet moment. A considered conversation. A jewel you know is yours. Visit the Velora showroom in Uppinangady and take your time.</p><a href="https://maps.google.com/?q=Uppinangady,Karnataka" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-obsidian pb-2.5 text-[10px] font-bold uppercase tracking-luxe text-obsidian transition hover:border-gold-600 hover:text-gold-600">Find the showroom <ArrowUpRight size={16} /></a></div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="image-frame overflow-hidden bg-obsidian shadow-luxury">
          <div className="relative min-h-[430px] overflow-hidden p-6 sm:min-h-[510px] sm:p-8">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1500&q=88" alt={`Diamond ring display at ${site.name}`} className="absolute inset-0 h-full w-full object-cover opacity-85" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,21,18,.9),rgba(30,21,18,.08)_70%)]" />
            <div className="relative z-10 flex min-h-[382px] flex-col justify-between sm:min-h-[462px]"><div className="w-fit bg-ivory p-2 shadow-xl"><img src="/velora-logo-transparent.png" alt={site.name} className="h-12 w-auto object-contain sm:h-14" /></div><div className="text-white"><p className="text-[9px] font-bold uppercase tracking-[.22em] text-gold-200">Velora showroom</p><h3 className="mt-3 font-display text-4xl leading-none sm:text-5xl">Uppinangady,<br /><em className="font-normal text-gold-100">Karnataka.</em></h3><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/25 pt-5 text-xs text-white/75"><span className="flex items-center gap-2"><MapPin size={15} className="text-gold-200" /> {site.location}</span><span className="flex items-center gap-2"><Clock3 size={15} className="text-gold-200" /> Personal consultations</span></div></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
