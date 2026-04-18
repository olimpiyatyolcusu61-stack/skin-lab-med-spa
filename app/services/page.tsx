export default function ServicesPage() {
  const categories = [
    {
      title: "Injectables",
      items: ["Botox & Neurotoxins", "Dermal Fillers", "Lip Augmentation"],
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000"
    },
    {
      title: "Skin Rejuvenation",
      items: ["Microneedling", "Chemical Peels", "Custom Facials"],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000"
    },
    {
      title: "Advanced Clinical",
      items: ["PRP Therapy", "Skin Tightening", "Medical Grade Peels"],
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1000"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl italic mb-4">Services</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-16">The Art of Medical Aesthetics</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 h-[400px]">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl italic mb-4">{cat.title}</h2>
              <ul className="space-y-2">
                {cat.items.map(item => (
                  <li key={item} className="text-[11px] uppercase tracking-widest text-gray-600 border-b border-gray-100 pb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}