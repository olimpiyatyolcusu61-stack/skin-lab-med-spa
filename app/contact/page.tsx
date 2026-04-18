export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl italic mb-8">Contact Us</h1>
          <p className="text-sm leading-relaxed text-gray-600 mb-12">
            Located within a premier medical facility on 55th Street, we offer a private and 
            sophisticated environment for your aesthetic journey.
          </p>
          
          <div className="space-y-8 uppercase tracking-[0.2em] text-[10px]">
            <div>
              <p className="font-bold">Address</p>
              <p className="text-gray-500">55th St, Manhattan, NY 10022</p>
            </div>
            <div>
              <p className="font-bold">Inquiries</p>
              <p className="text-gray-500">concierge@skinlabnyc.com</p>
              <p className="text-gray-500">212.555.0198</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-12 shadow-sm border border-gray-100">
          <h2 className="text-xl italic mb-6">Request Information</h2>
          <form className="space-y-6">
            <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-widest focus:outline-none focus:border-black transition" />
            <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-widest focus:outline-none focus:border-black transition" />
            <textarea placeholder="MESSAGE" rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-widest focus:outline-none focus:border-black transition"></textarea>
            <button className="w-full py-4 bg-black text-white text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition">Send Inquiry</button>
          </form>
        </div>
      </div>
    </main>
  );
}