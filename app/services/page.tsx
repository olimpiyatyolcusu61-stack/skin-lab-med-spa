import Image from "next/image";

export default function ServicesPage() {
  const categories = [
    {
      title: "Injectables",
      items: ["Wrinkle Relaxers", "Dermal Fillers", "Lip Enhancement"],
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000",
    },
    {
      title: "Skin Rejuvenation",
      items: ["Microneedling", "Chemical Peels", "Hydrafacial Protocols"],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000",
    },
    {
      title: "Advanced Clinical",
      items: ["PRP Therapy", "Skin Tightening", "Medical-Grade Treatments"],
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] px-8 pb-20 pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-4 text-5xl italic">Services</h1>
        <p className="mb-16 max-w-3xl text-[10px] uppercase tracking-[0.3em] text-gray-500">
          The Art Of Medical Aesthetics — Curated treatments for graceful, natural, and healthy results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title} className="group cursor-pointer">
              <div className="relative mb-6 h-[400px] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl italic mb-4">{cat.title}</h2>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="border-b border-gray-100 pb-2 text-[11px] uppercase tracking-widest text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}