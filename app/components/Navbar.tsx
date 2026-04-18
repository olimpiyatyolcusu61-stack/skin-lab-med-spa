import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 p-8 flex justify-between items-center uppercase tracking-widest text-[10px] bg-[#FAF9F6]/80 backdrop-blur-sm">
      <Link href="/" className="font-bold text-[#1a1a1a]">Skin Lab Med Spa</Link>
      <div className="flex gap-8">
        <Link href="/services" className="hover:opacity-50 transition text-[#1a1a1a]">Services</Link>
        <Link href="/about" className="hover:opacity-50 transition text-[#1a1a1a]">About</Link>
        <Link href="/contact" className="hover:opacity-50 transition text-[#1a1a1a]">Contact</Link>
      </div>
    </nav>
  );
}