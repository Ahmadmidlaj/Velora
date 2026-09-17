import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { categories } from '../data/products'

const layouts = [
  'lg:col-span-5 lg:row-span-2 lg:aspect-auto',
  'lg:col-span-3 lg:aspect-[.82]',
  'lg:col-span-4 lg:aspect-[1.13]',
  'lg:col-span-7 lg:aspect-[1.72]',
]

export default function CategoryGrid({ onSelect }) {
  return (
    <section className="relative overflow-hidden bg-ivory px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-28 h-72 w-72 rounded-full border border-gold-300/25" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div><p className="eyebrow">The house of Velora</p><h2 className="section-title mt-4">A collection for<br /><em>every version of you.</em></h2></div>
          <p className="max-w-md text-sm leading-7 text-ink/65 lg:mb-1 lg:justify-self-end">From an everyday glint to the piece that anchors a celebration, find jewels designed to stay close to your story.</p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              onClick={() => onSelect(category.name)}
              className={`group relative aspect-[1.12] overflow-hidden text-left shadow-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600 ${layouts[index]}`}
            >
              <img src={category.image} alt={`${category.name} jewellery`} className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-[1.055]" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,21,18,.88),rgba(30,21,18,.04)_67%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div className="text-white"><p className="mb-2 text-[9px] font-semibold uppercase tracking-[.22em] text-gold-100">Explore</p><h3 className="font-display text-3xl leading-none sm:text-4xl">{category.name}</h3><p className="mt-2 text-xs text-white/66">{category.description}</p></div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/45 text-white transition duration-300 group-hover:rotate-45 group-hover:border-gold-200 group-hover:bg-gold-200 group-hover:text-obsidian"><ArrowUpRight size={18} /></span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
