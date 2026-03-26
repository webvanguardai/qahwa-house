'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Script from 'next/script'

// ─── Navigation ───────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C4622D] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Q</span>
          </div>
          <span className="font-bold text-[#2C2416] text-lg tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Qahwa House</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'Our Story', 'Gallery', 'Visit Us'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-[#4A3F32] hover:text-[#C4622D] transition-colors text-sm font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#C4622D] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#D4784A] transition-all duration-300"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <span className={`block w-6 h-0.5 bg-[#2C2416] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C2416] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C2416] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF7F2] border-t border-[#E8DDD0] px-6 pb-6"
          >
            {['Menu', 'Our Story', 'Gallery', 'Visit Us', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[#2C2416] font-medium border-b border-[#E8DDD0] last:border-none"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF7F2]">
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85"
          alt="Qahwa House specialty coffee Dubai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/70 to-[#FAF7F2]/20" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#C4622D]/10 text-[#C4622D] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#C4622D] rounded-full" />
            Dubai Design District · Est. 2021
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-[#2C2416] leading-none mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Crafted for
            <br />
            <span className="font-serif italic text-[#C4622D]">the curious</span>
            <br />
            cup.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#4A3F32] text-lg leading-relaxed mb-10 max-w-lg"
          >
            Single-origin micro-lots, roasted in-house on a 12kg Probat.
            You can smell the Wednesday roast from the street. Come find out why.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-3 bg-[#C4622D] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#D4784A] transition-all duration-300 hover:scale-105"
            >
              Explore Our Menu
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#our-story"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#2C2416] text-[#2C2416] font-semibold px-8 py-4 rounded-full hover:bg-[#2C2416] hover:text-[#FAF7F2] transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex gap-12 mt-16 pt-12 border-t border-[#D4B896]/50"
          >
            {[
              { val: '12+', label: 'Origins' },
              { val: '4.9★', label: 'Rating' },
              { val: '50K+', label: 'Cups Served' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#C4622D]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.val}</div>
                <div className="text-xs text-[#8A7E72] uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#8A7E72]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C4622D] to-transparent" />
      </motion.div>
    </section>
  )
}

// ─── Menu / Specialties ────────────────────────────────────────────
const menuItems = [
  {
    category: 'Signature Espresso',
    emoji: '☕',
    items: [
      { name: 'Desert Rose Latte', desc: 'Ras el hanout, rose water, oat milk', price: 'AED 32' },
      { name: 'Saffron Cortado', desc: 'Premium saffron, 18g espresso, steamed milk', price: 'AED 35' },
      { name: 'Cardamom Flat White', desc: 'Ground cardamom, double ristretto', price: 'AED 28' },
    ]
  },
  {
    category: 'Pour Over Bar',
    emoji: '⚗️',
    items: [
      { name: 'Ethiopian Yirgacheffe', desc: 'Floral, jasmine, citrus notes', price: 'AED 42' },
      { name: 'Colombian Huila', desc: 'Dark chocolate, caramel, malic acid', price: 'AED 38' },
      { name: 'Yemen Haraaz', desc: 'Wild fruit, tamarind, winey finish', price: 'AED 55' },
    ]
  },
  {
    category: 'Cold & Seasonal',
    emoji: '🧊',
    items: [
      { name: 'Arabic Cold Brew', desc: '20h brew, dates syrup, sea salt', price: 'AED 34' },
      { name: 'Mango Cascara Fizz', desc: 'Coffee cherry tea, sparkling, alphonso mango', price: 'AED 38' },
      { name: 'Matcha × Qahwa', desc: 'Ceremonial matcha, cardamom qahwa shot', price: 'AED 36' },
    ]
  },
  {
    category: 'Kitchen',
    emoji: '🍞',
    items: [
      { name: 'Za\'atar Croissant', desc: 'Laminated dough, za\'atar butter, labneh', price: 'AED 28' },
      { name: 'Pistachio Tahini Toast', desc: 'Sourdough, pistachio cream, honey comb', price: 'AED 32' },
      { name: 'Baked Eggs Shakshuka', desc: 'Roasted tomato, harissa, feta, egg', price: 'AED 48' },
    ]
  },
]

function Menu() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="menu" className="py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#C4622D]">— The Roast</span>
          <h2 className="text-5xl md:text-6xl font-black text-[#2C2416] mt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            What&apos;s on<br />
            <span className="font-serif italic text-[#C4622D]">the bar today.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {menuItems.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? 'bg-[#C4622D] text-white'
                  : 'bg-[#F0EBE1] text-[#4A3F32] hover:bg-[#D4B896]/50'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {menuItems[activeTab].items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E8DDD0] rounded-2xl p-8 hover:border-[#C4622D]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-[#2C2416] text-lg group-hover:text-[#C4622D] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.name}
                  </h3>
                  <span className="text-[#C4622D] font-bold text-sm ml-4 shrink-0">{item.price}</span>
                </div>
                <p className="text-[#8A7E72] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Side image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85"
              alt="Specialty coffee preparation at Qahwa House"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-[#2C2416] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ethiopia. Yemen.<br />
              <span className="font-serif italic text-[#C4622D]">Your cup, this morning.</span>
            </h3>
            <p className="text-[#4A3F32] leading-relaxed mb-6">
              We buy direct from farms in Ethiopia, Yemen, Colombia, and Guatemala — paying above Fair Trade
              because quality starts at the source. Our Probat roaster runs Monday to Friday.
              By Saturday, those beans are in your cup.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[#C4622D] font-semibold hover:gap-4 transition-all">
              Take home a bag
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── About ─────────────────────────────────────────────────────────
function About() {
  return (
    <section id="our-story" className="py-32 bg-[#2C2416]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=85"
                alt="Qahwa House interior Dubai Design District"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#C4622D] text-white p-6 rounded-2xl max-w-xs">
              <div className="text-3xl font-black mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12</div>
              <div className="text-sm opacity-80">Coffee origins from around the world, sourced directly.</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4B896]">— Our Story</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Born from a love of<br />
              <span className="font-serif italic text-[#C4622D]">honest coffee.</span>
            </h2>
            <div className="space-y-5 text-[#D4B896]/80 leading-relaxed">
              <p>
                Qahwa House began in 2021 when Layla and Omar Al-Rashid returned to Dubai after years training under 
                world champion baristas in Melbourne and Copenhagen. They brought back one simple obsession: 
                make the best cup possible, every single time.
              </p>
              <p>
                Qahwa (قهوة) is the Arabic word for coffee — and the tradition runs deep. 
                We honour that heritage while pushing the craft forward. Arabic cardamom spiced espresso 
                sits beside a Kenyan natural processed through a V60, and both belong here.
              </p>
              <p>
                We built our roastery in Dubai Design District because d3 understands that craft takes time. 
                Our 12kg Probat roaster runs Monday to Friday — you can smell it from the street.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { icon: '🌱', title: 'Direct Trade', desc: 'Farms, not brokers' },
                { icon: '🔥', title: 'Small Batch', desc: 'Roasted weekly' },
                { icon: '🏅', title: 'Award Trained', desc: 'WBC certified' },
              ].map((v) => (
                <div key={v.title} className="bg-[#FAF7F2]/5 rounded-xl p-4 border border-[#FAF7F2]/10">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{v.title}</div>
                  <div className="text-[#8A7E72] text-xs mt-1">{v.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ───────────────────────────────────────────────────────
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=85',
    alt: 'Latte art by Qahwa House barista',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85',
    alt: 'Coffee beans being roasted',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=85',
    alt: 'Qahwa House café interior',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=85',
    alt: 'Specialty espresso drinks',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=85',
    alt: 'Coffee origin tasting notes',
    span: '',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4622D]">— In the Cup</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#2C2416] mt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              This is what<br />
              <span className="font-serif italic text-[#C4622D]">obsession looks like.</span>
            </h2>
          </div>
          <p className="text-[#8A7E72] max-w-sm">
            From origin to extraction, every variable is controlled. Follow the craft at @qahwahouse.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Sara Khalid',
    role: 'Interior Designer, DIFC',
    text: 'Qahwa House is my office away from office. The saffron cortado is genuinely something I\'ve never tasted anywhere else in Dubai — and I\'ve tried them all.',
    stars: 5,
    avatar: 'SK',
  },
  {
    name: 'James Harrington',
    role: 'Creative Director, BBH Dubai',
    text: 'I was sceptical about another "specialty" café in d3, but this is the real deal. The Yemen Haraaz is exceptional — winey, complex, and worth every dirham.',
    stars: 5,
    avatar: 'JH',
  },
  {
    name: 'Aisha Al-Mansoori',
    role: 'Food Blogger · @eatwithaisha',
    text: 'The za\'atar croissant + Desert Rose Latte combo might be the best breakfast in Dubai. The space is gorgeous too. Comes every Saturday now.',
    stars: 5,
    avatar: 'AA',
  },
  {
    name: 'Marcus Veltri',
    role: 'Architect, Foster + Partners',
    text: 'Not just coffee — an experience. The team knows their origins, explains the roast profile, and genuinely cares. This is what Dubai\'s food scene needed more of.',
    stars: 5,
    avatar: 'MV',
  },
]

function Testimonials() {
  return (
    <section className="py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#C4622D]">— The Regulars</span>
          <h2 className="text-5xl md:text-6xl font-black text-[#2C2416] mt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            They came once.<br />
            <span className="font-serif italic text-[#C4622D]">They never stopped.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-[#E8DDD0] rounded-2xl p-8 hover:border-[#C4622D]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#C4622D]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#4A3F32] leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C4622D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#2C2416] text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.name}</div>
                  <div className="text-[#8A7E72] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Visit Us / Contact ────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-32 bg-[#2C2416]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4B896]">— Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Find us in<br />
              <span className="font-serif italic text-[#C4622D]">Design District.</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  text: 'Unit G-04, Building 7\nDubai Design District (d3)\nDubai, UAE',
                },
                {
                  icon: '🕐',
                  title: 'Hours',
                  text: 'Mon–Fri: 7:00am – 9:00pm\nSat–Sun: 8:00am – 10:00pm\n\nRoastery tours: Sat 10am (book ahead)',
                },
                {
                  icon: '📞',
                  title: 'Phone & WhatsApp',
                  text: '+971 4 123 4567\n@qahwahouse',
                },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <span className="text-2xl shrink-0">{info.icon}</span>
                  <div>
                    <div className="text-[#D4B896] font-semibold text-sm mb-1">{info.title}</div>
                    <div className="text-[#8A7E72] text-sm whitespace-pre-line leading-relaxed">{info.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=85"
                alt="Qahwa House entrance Dubai Design District"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2C2416]/30" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Book a Table or Enquire</h3>
            <p className="text-[#8A7E72] text-sm mb-8">Reservations, corporate events, and wholesale bean orders.</p>

            {submitted ? (
              <div className="bg-[#C4622D]/10 border border-[#C4622D]/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">☕</div>
                <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>See you soon!</h4>
                <p className="text-[#D4B896]/80 text-sm">We&apos;ll get back to you within a few hours.</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#D4B896] text-xs uppercase tracking-wider mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4622D]/50 transition-colors placeholder-[#8A7E72]"
                      placeholder="Layla"
                    />
                  </div>
                  <div>
                    <label className="block text-[#D4B896] text-xs uppercase tracking-wider mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4622D]/50 transition-colors placeholder-[#8A7E72]"
                      placeholder="Al-Rashid"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#D4B896] text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4622D]/50 transition-colors placeholder-[#8A7E72]"
                    placeholder="layla@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#D4B896] text-xs uppercase tracking-wider mb-2">Enquiry Type</label>
                  <select
                    name="enquiryType"
                    className="w-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4622D]/50 transition-colors"
                  >
                    <option value="reservation" className="bg-[#2C2416]">Table Reservation</option>
                    <option value="event" className="bg-[#2C2416]">Corporate Event</option>
                    <option value="wholesale" className="bg-[#2C2416]">Wholesale Beans</option>
                    <option value="roastery-tour" className="bg-[#2C2416]">Roastery Tour</option>
                    <option value="other" className="bg-[#2C2416]">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#D4B896] text-xs uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C4622D]/50 transition-colors resize-none placeholder-[#8A7E72]"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C4622D] text-white font-bold py-4 rounded-full hover:bg-[#D4784A] transition-all duration-300 hover:scale-[1.02]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Send Message ☕
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.2131!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f696b4c0b7f99%3A0x1!2sJumeirah%2C+Dubai!5e0!3m2!1sen!2sae!4v1711449600000"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Qahwa House location — Jumeirah, Dubai"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1A160E] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C4622D] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Q</span>
            </div>
            <span className="text-white font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Qahwa House</span>
          </div>
          <p className="text-[#8A7E72] text-xs text-center">
            © 2026 Qahwa House. Unit G-04, Building 7, Dubai Design District. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'TikTok', 'Google Maps'].map((s) => (
              <a key={s} href="#" className="text-[#8A7E72] hover:text-[#C4622D] text-xs transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── WhatsApp Button ───────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97141234567?text=Hi%20Qahwa%20House!%20I%27d%20like%20to%20make%20a%20reservation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

// ─── JSON-LD Schema ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Qahwa House',
  description: 'Specialty coffee roastery and café in Dubai Design District. Single-origin beans, expert baristas, and a warm space to connect.',
  url: 'https://qahwa-house.vercel.app',
  telephone: '+97141234567',
  priceRange: 'AED 28–55',
  servesCuisine: 'Coffee, Specialty Coffee, Light Food',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit G-04, Building 7, Dubai Design District',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.1922,
    longitude: 55.2677,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
  ],
  menu: 'https://qahwa-house.vercel.app/#menu',
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
  },
}

// ─── Main Page ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
