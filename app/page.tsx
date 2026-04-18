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
      <section className="relative flex flex-col items-center justify-center pt-32 pb-40 px-4 text-center overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Spa Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-light text-[#2C2C2C] mb-6 italic animate-fade-in">
          Skin Lab
        </h1>
        <p className="max-w-md text-sm leading-relaxed tracking-[0.2em] text-[#666] mb-12 font-light uppercase">
          Midtown Manhattan • 55th St
        </p>
        <a 
          href="https://square.site/book/YOUR_SQUARE_LINK" 
          target="_blank"
          className="px-16 py-5 bg-[#1a1a1a] text-white hover:bg-white hover:text-[#1a1a1a] border border-[#1a1a1a] transition-all duration-700 tracking-[0.3em] uppercase text-[10px]"
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

      {/* Detailed Footer */}
      <footer id="location" className="py-24 bg-[#F4F4F2] text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl italic mb-8">Visit the Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] uppercase tracking-[0.2em] text-[#444]">
            <div>
              <p className="font-bold mb-2">Location</p>
              <p>55th Street, Manhattan</p>
              <p>New York, NY 10022</p>
              <p className="mt-2 text-gray-400 font-light text-[9px] italic">(Inside the Medical Arts Building)</p>
            </div>
            <div>
              <p className="font-bold mb-2">Hours</p>
              <p>Monday — Friday: 10am - 7pm</p>
              <p>Saturday: 11am - 5pm</p>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="text-[10px] text-gray-400">© 2026 Skin Lab Med Spa NYC</p>
          </div>
        </div>
      </footer>
    </main>
  );
}