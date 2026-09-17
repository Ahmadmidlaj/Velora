import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import CategoryGrid from './components/CategoryGrid'
import FeaturedCollection from './components/FeaturedCollection'
import ProductModal from './components/ProductModal'
import TrustBadges from './components/TrustBadges'
import StoreLocator from './components/StoreLocator'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import { site, whatsappUrl } from './data/site'

function MaisonStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#f5eddf] px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute left-[7%] top-0 h-full w-px bg-gold-300/35" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative ml-0 sm:ml-8">
          <div className="image-frame overflow-hidden shadow-luxury"><img src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=1300&q=90" alt="Jewellery artisan handcrafting a gold piece" className="aspect-[4/4.75] w-full object-cover" loading="lazy" /></div>
          <div className="absolute -bottom-6 -left-5 hidden max-w-[210px] bg-[#30221d] p-6 text-white shadow-xl sm:block"><p className="font-display text-4xl leading-none text-gold-100">Quietly<br /><em className="font-normal text-white">extraordinary.</em></p><p className="mt-4 text-[9px] font-semibold uppercase leading-5 tracking-[.17em] text-white/55">A Velora piece is never just something you wear.</p></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-xl lg:pb-6"><p className="eyebrow">The Velora way</p><h2 className="section-title mt-4">Chosen slowly.<br /><em>Kept forever.</em></h2><div className="mt-8 border-l border-gold-500 pl-5"><p className="font-display text-2xl leading-[1.08] text-ink/85">The best piece is not the loudest one. It is the one that feels instantly, unmistakably yours.</p></div><p className="mt-7 text-sm leading-7 text-ink/66">At Velora, we bring together gold and diamonds with a deep regard for craft, proportion, and the stories they will come to hold. No rush. No hard sell. Just a beautiful beginning.</p><a href="#visit-us" className="mt-9 inline-flex items-center gap-3 border-b border-obsidian pb-2.5 text-[10px] font-bold uppercase tracking-luxe text-obsidian transition hover:border-gold-600 hover:text-gold-600">Come meet Velora <ArrowUpRight size={16} /></a></motion.div>
      </div>
    </section>
  )
}

function AppointmentBanner() {
  return (
    <section className="bg-[#fdfaf4] px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative mx-auto overflow-hidden bg-[#30221d] px-7 py-12 text-white shadow-luxury sm:px-12 sm:py-16 lg:max-w-7xl lg:px-16">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-gold-200/20" aria-hidden="true" />
        <div className="absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-9 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-luxe text-gold-200">One-to-one at Velora</p><h2 className="mt-4 max-w-2xl font-display text-5xl leading-[.84] sm:text-6xl">Let the right piece<br /><em className="font-normal text-gold-100">find its way to you.</em></h2></div><div className="lg:pb-1"><p className="max-w-md text-sm leading-7 text-white/67">Plan an unhurried visit to {site.shortName}. We will make space for the questions, the stories, and the one piece you cannot stop thinking about.</p><a href={whatsappUrl(`Hello ${site.shortName}, I would like to plan a visit.`)} target="_blank" rel="noreferrer" className="gold-sheen relative mt-7 inline-flex overflow-hidden rounded-full bg-gold-gradient px-6 py-3.5 text-[10px] font-bold uppercase tracking-luxe text-obsidian transition hover:-translate-y-1"> <span className="relative">Plan your visit</span></a></div></div>
      </div>
    </section>
  )
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const chooseCategory = (category) => {
    setActiveFilter(category)
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <><SEO /><Navbar /><main><HeroBanner /><CategoryGrid onSelect={chooseCategory} /><FeaturedCollection activeFilter={activeFilter} onFilter={setActiveFilter} onQuickView={setSelectedProduct} /><TrustBadges /><MaisonStory /><StoreLocator /><FAQ /><AppointmentBanner /></main><Footer /><ScrollToTop /><WhatsAppFloat /><ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} /></>
}
