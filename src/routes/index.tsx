import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: AgriRentHome,
})

const equipment = [
  {
    id: 1,
    name: 'Tractor',
    emoji: '🚜',
    pricePerDay: 1800,
    available: true,
    description: 'Heavy-duty tractor suitable for all soil types. 75 HP engine.',
  },
  {
    id: 2,
    name: 'Harvester',
    emoji: '🌾',
    pricePerDay: 3500,
    available: true,
    description: 'Combined harvester for wheat, rice, and maize. High efficiency.',
  },
  {
    id: 3,
    name: 'Plough',
    emoji: '⚙️',
    pricePerDay: 600,
    available: true,
    description: 'Multi-furrow plough for deep soil tillage. Fits most tractors.',
  },
  {
    id: 4,
    name: 'Seed Drill',
    emoji: '🌱',
    pricePerDay: 600,
    available: false,
    description: 'Precision seed drill for uniform sowing across large fields.',
  },
  {
    id: 5,
    name: 'Irrigation Pump',
    emoji: '💧',
    pricePerDay: 350,
    available: true,
    description: 'High-flow diesel pump for efficient field irrigation.',
  },
  {
    id: 6,
    name: 'Rotavator',
    emoji: '🔄',
    pricePerDay: 700,
    available: true,
    description: 'Powered rotavator for fine seedbed preparation and weed control.',
  },
]

const slogans = [
  { text: 'Grow More, Waste Less', icon: '🌿', color: 'bg-green-50 border-green-200' },
  { text: 'Empowering Farmers, Enriching Lives', icon: '👨‍🌾', color: 'bg-yellow-50 border-yellow-200' },
  { text: 'Modern Tools for Modern Farmers', icon: '⚡', color: 'bg-emerald-50 border-emerald-200' },
  { text: 'From Soil to Soul', icon: '🌍', color: 'bg-amber-50 border-amber-200' },
]

const founders = [
  { name: 'Avinash Pawar', title: 'Co-Founder & CEO', initials: 'AP' },
  { name: 'Alok Pawar', title: 'Co-Founder & CTO', initials: 'AP' },
  { name: 'Shubham Jawale', title: 'Co-Founder & COO', initials: 'SJ' },
  { name: 'Abhishek Raut', title: 'Co-Founder & CMO', initials: 'AR' },
]

function AgriRentHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [rentedItem, setRentedItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* ── Navbar ── */}
      <nav className="bg-green-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            <span className="text-2xl font-extrabold tracking-tight text-yellow-400">AgriRent</span>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Home', 'Equipment', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-5 py-2 rounded-full text-sm transition-colors">
              Sign In
            </button>
            {/* Hamburger */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-green-800 px-4 pb-4">
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {['Home', 'Equipment', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-1 hover:text-yellow-400 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-5 py-2 rounded-full text-sm w-full mt-2">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        id="home"
        className="hero-bg text-white py-24 px-4 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 text-[200px] flex items-center justify-center select-none pointer-events-none">
          🌾
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-3">
            India's #1 Farm Equipment Rental Platform
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Rent Smart. Farm <span className="text-yellow-400">Better.</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl mb-10 leading-relaxed">
            Access modern tractors, harvesters, and precision tools — delivered to your farm. No ownership hassle, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#equipment"
              className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-3 rounded-full text-lg transition-colors shadow-lg"
            >
              🚜 Browse Equipment
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold px-8 py-3 rounded-full text-lg transition-colors"
            >
              How It Works
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-200 text-sm">
            <span>✅ 120+ Equipment Units</span>
            <span>✅ 1000+ Happy Farmers</span>
            <span>✅ 15+ Districts Served</span>
          </div>
        </div>
      </section>

      {/* ── Slogans ── */}
      <section className="py-12 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slogans.map((s) => (
            <div
              key={s.text}
              className={`${s.color} border rounded-xl p-5 text-center card-hover`}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <p className="font-semibold text-gray-800 text-sm leading-snug">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Equipment Listings ── */}
      <section id="equipment" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-3">
              🚜 Equipment for Rent
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose from our wide range of well-maintained farming machinery. Affordable daily rates, easy booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm card-hover"
              >
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-green-100 to-yellow-50 h-48 flex items-center justify-center border-b border-gray-100">
                  <img
                    src="/placeholder.png"
                    alt={item.name}
                    className="h-32 w-auto object-contain opacity-60"
                  />
                  <span className="absolute text-6xl opacity-20 select-none">{item.emoji}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <span>{item.emoji}</span> {item.name}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.available
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {item.available ? '✔ Available' : '✗ Booked'}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-extrabold text-green-700">
                        ₹{item.pricePerDay.toLocaleString('en-IN')}
                      </span>
                      <span className="text-gray-400 text-sm"> / day</span>
                    </div>
                    <button
                      disabled={!item.available}
                      onClick={() => setRentedItem(item.name)}
                      className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                        item.available
                          ? 'bg-green-700 hover:bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {item.available ? 'Rent Now' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent confirmation toast */}
      {rentedItem && (
        <div className="fixed bottom-6 right-6 bg-green-700 text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 z-50">
          <span className="text-xl">✅</span>
          <div>
            <p className="font-bold">Booking Initiated!</p>
            <p className="text-sm text-green-200">{rentedItem} rental request sent.</p>
          </div>
          <button
            onClick={() => setRentedItem(null)}
            className="ml-4 text-green-200 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-4 bg-green-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">How It Works</h2>
          <p className="text-green-300 mb-14">Renting farm equipment has never been easier</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: '🔍',
                title: 'Browse Equipment',
                desc: 'Explore our full catalog of tractors, harvesters, and more. Filter by type, availability, and price.',
              },
              {
                step: '02',
                icon: '📅',
                title: 'Book Online',
                desc: 'Select your rental dates, confirm your location, and pay securely. Booking takes under 2 minutes.',
              },
              {
                step: '03',
                icon: '🚚',
                title: 'Get Delivered',
                desc: 'Our team delivers the equipment to your farm on time, fully serviced and ready to use.',
              },
            ].map((s) => (
              <div key={s.step} className="relative bg-green-800 rounded-2xl p-8 card-hover">
                <div className="text-6xl mb-4">{s.icon}</div>
                <div className="absolute top-4 right-4 text-green-700 font-black text-4xl opacity-50">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{s.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Stats ── */}
      <section id="about" className="py-16 px-4 bg-amber-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-green-900 mb-4">Why Choose AgriRent?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We believe every farmer deserves access to the best tools. AgriRent bridges the gap between modern technology and traditional farming.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '500+', label: 'Equipment Units', icon: '🚜' },
              { stat: '1K+', label: 'Farmers Served', icon: '👨‍🌾' },
              { stat: '200+', label: 'Districts', icon: '📍' },
              { stat: '4.9★', label: 'Average Rating', icon: '⭐' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 card-hover"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl font-extrabold text-green-700">{item.stat}</div>
                <div className="text-gray-500 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-3">
            Meet Our Founders
          </h2>
          <p className="text-gray-500 mb-12">
            Driven by a shared vision to transform Indian agriculture through technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-6 card-hover text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-green-200 bg-green-100 flex items-center justify-center">
                  <img
                    src="/placeholder.png"
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{founder.name}</h3>
                <p className="text-green-700 text-sm font-medium mt-1">{founder.title}</p>
                <div className="flex justify-center gap-3 mt-4 text-gray-400">
                  <span className="hover:text-blue-600 cursor-pointer text-lg" title="LinkedIn">🔗</span>
                  <span className="hover:text-sky-500 cursor-pointer text-lg" title="Twitter">🐦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-green-800 to-green-900 text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your Farm? 🌱
          </h2>
          <p className="text-green-200 mb-8">
            Get in touch with us or start browsing equipment right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#equipment"
              className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-3 rounded-full text-lg transition-colors"
            >
              Browse Equipment
            </a>
            <a
              href="tel:+911800123456"
              className="border-2 border-white hover:bg-white hover:text-green-900 font-bold px-8 py-3 rounded-full text-lg transition-colors"
            >
              📞 Call Us Free
            </a>
          </div>
          <p className="text-green-300 text-sm">📧 avinashp****@gmail.com &nbsp;|&nbsp; 📞 ******4145 &nbsp;|&nbsp; 📍 Chhatrapati Sambhajinagar, Maharashtra, India</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-green-950 text-green-300 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-extrabold text-yellow-400">AgriRent</span>
            </div>
            <p className="text-sm leading-relaxed">
              Making modern farming equipment accessible to every farmer across India.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Equipment', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Connect With Us</h4>
            <div className="flex gap-4 text-2xl mb-4">
              <span className="cursor-pointer hover:text-yellow-400 transition-colors" title="Facebook">📘</span>
              <span className="cursor-pointer hover:text-yellow-400 transition-colors" title="Twitter">🐦</span>
              <span className="cursor-pointer hover:text-yellow-400 transition-colors" title="Instagram">📸</span>
              <span className="cursor-pointer hover:text-yellow-400 transition-colors" title="YouTube">▶️</span>
            </div>
            <p className="text-sm">📧 avinashpawar7478@gmail.com</p>
            <p className="text-sm mt-1">📞 1800-123-**** (Toll Free)</p>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 text-center text-xs text-green-500">
          © {new Date().getFullYear()} AgriRent. All rights reserved. &nbsp;|&nbsp; Made with Avinash Labs
        </div>
      </footer>
    </div>
  )
}
