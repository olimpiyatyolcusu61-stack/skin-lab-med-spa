export default function Home() {
  const services = [
    { name: "Medical Facials", desc: "Customized clinical treatments for glowing skin." },
    { name: "Microneedling", desc: "Advanced collagen induction therapy." },
    { name: "Botox & Fillers", desc: "Precision injectables by expert providers." }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center uppercase tracking-widest text-[10px]">
        <div>Skin Lab Med Spa</div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="hover:opacity-50">Services</a>
          <a href="#location" className="hover:opacity-50">Location</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center">
        <h1 className="text-6xl md:text-9xl font-light text-[#2C2C2C] mb-6 italic">
          Skin Lab
        </h1>
        <p className="max-w-md text-sm leading-relaxed tracking-wide text-[#666] mb-12 font-light">
          A sanctuary of medical excellence in Midtown Manhattan. 
          Bespoke treatments designed for the discerning individual.
        </p>
        <a 
          href="https://square.site/book/YOUR_SQUARE_LINK" 
          target="_blank"
          className="px-16 py-5 bg-[#1a1a1a] text-white hover:bg-[#333] transition-all duration-700 tracking-[0.3em] uppercase text-[10px]"
        >
          Reserve Appointment
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((s) => (
            <div key={s.name} className="border-t border-gray-100 pt-8">
              <h3 className="text-2xl mb-4 italic">{s.name}</h3>
              <p className="text-xs text-gray-500 leading-loose tracking-wide">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Footer */}
      <footer id="location" className="py-20 text-center border-t border-gray-100">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-4">Visit Us</p>
        <p className="font-light text-lg italic text-[#2C2C2C]">55th St Manhattan, New York City</p>
        <p className="text-[10px] text-gray-400 mt-8">© 2026 Skin Lab Med Spa</p>
      </footer>
    </main>
  );
}