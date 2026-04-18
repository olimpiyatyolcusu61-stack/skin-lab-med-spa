export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] px-8 pt-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-20 pb-20 md:grid-cols-2">
        <div>
          <h1 className="mb-8 text-5xl italic">Contact Us</h1>
          <p className="mb-12 text-sm leading-relaxed text-gray-600">
            Located within a premier medical facility on 55th Street, we offer a private and sophisticated environment
            for your aesthetic journey.
          </p>

          <div className="space-y-8 text-[10px] uppercase tracking-[0.2em]">
            <div>
              <p className="font-bold">Address</p>
              <p className="text-gray-500">55th St, Manhattan, NY 10022</p>
            </div>
            <div>
              <p className="font-bold">Inquiries</p>
              <p className="text-gray-500">concierge@skinlabnyc.com</p>
              <p className="text-gray-500">212.555.0198</p>
            </div>
            <div>
              <p className="font-bold">Hours</p>
              <p className="text-gray-500">Monday — Friday: 10am - 7pm</p>
              <p className="text-gray-500">Saturday: 11am - 5pm</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 bg-white p-12 shadow-sm">
          <h2 className="mb-6 text-xl italic">Request Information</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="NAME"
              className="w-full border-b border-gray-200 bg-transparent py-3 text-[10px] tracking-widest transition focus:border-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full border-b border-gray-200 bg-transparent py-3 text-[10px] tracking-widest transition focus:border-black focus:outline-none"
            />
            <textarea
              placeholder="MESSAGE"
              rows={4}
              className="w-full border-b border-gray-200 bg-transparent py-3 text-[10px] tracking-widest transition focus:border-black focus:outline-none"
            ></textarea>
            <button className="w-full bg-black py-4 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-gray-800">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}