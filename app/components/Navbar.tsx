import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#e8e5df] bg-[#FAF9F6]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="text-sm font-medium uppercase tracking-[0.35em] text-[#1a1a1a]">
          Skin Lab Med Spa
        </Link>
        <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.22em] md:gap-8">
          <Link href="/" className="text-[#1a1a1a] transition hover:opacity-55">
            Home
          </Link>
          <Link href="/services" className="text-[#1a1a1a] transition hover:opacity-55">
            Services
          </Link>
          <Link href="/contact" className="text-[#1a1a1a] transition hover:opacity-55">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}