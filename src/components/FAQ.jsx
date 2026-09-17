import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqItems } from '../data/site'

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0)

  return <section className="bg-champagne/35 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">Velora, Uppinangady</p><h2 className="section-title mt-3">Good things to <em>know.</em></h2><p className="mt-5 max-w-sm text-sm leading-7 text-ink/65">Everything you need before your visit to Velora Gold &amp; Diamonds.</p></div><div className="border-t border-ink/15">{faqItems.map((item, index) => <div key={item.question} className="border-b border-ink/15"><button onClick={() => setOpenItem(openItem === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-2xl text-obsidian sm:py-6 sm:text-3xl" aria-expanded={openItem === index}><span>{item.question}</span><ChevronDown size={20} className={`shrink-0 text-gold-600 transition ${openItem === index ? 'rotate-180' : ''}`} /></button><AnimatePresence initial={false}>{openItem === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-2xl pb-6 text-sm leading-7 text-ink/65">{item.answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
}
