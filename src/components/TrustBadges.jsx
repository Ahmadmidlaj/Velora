import { BadgeCheck, Gem, RefreshCcw } from 'lucide-react'
import { motion } from 'framer-motion'

const badges = [
  { icon: BadgeCheck, number: '01', title: 'BIS Hallmarked', text: 'Gold with an assured standard.' },
  { icon: Gem, number: '02', title: 'Certified stones', text: 'Every detail, carefully verified.' },
  { icon: RefreshCcw, number: '03', title: 'Easy exchange', text: 'A value made to stay with you.' },
]

export default function TrustBadges() {
  return (
    <section className="relative overflow-hidden bg-[#30221d] px-5 py-20 text-ivory sm:px-8 lg:py-24">
      <div className="absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-gold-200/15" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_2.2fr] lg:gap-16">
        <div><p className="eyebrow text-gold-200">The Velora standard</p><h2 className="mt-4 font-display text-4xl leading-[.88] text-white sm:text-5xl">Good jewellery<br /><em className="font-normal text-gold-200">is a promise.</em></h2></div>
        <div className="grid gap-0 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-y-0">
          {badges.map(({ icon: Icon, number, title, text }, index) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group py-7 first:pt-0 last:pb-0 sm:px-7 sm:py-0 sm:first:pl-0 sm:last:pr-0"><div className="flex items-center justify-between"><Icon size={25} strokeWidth={1.15} className="text-gold-200 transition duration-500 group-hover:rotate-[-12deg]" /><span className="font-display text-2xl text-white/25">{number}</span></div><h3 className="mt-8 font-display text-3xl leading-none text-white">{title}</h3><p className="mt-3 max-w-[180px] text-xs leading-5 text-white/58">{text}</p></motion.div>)}
        </div>
      </div>
    </section>
  )
}
