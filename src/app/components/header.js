import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Panda Puzzle Logo"
              width={180}
              height={50}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-[#1d4c6b] hover:text-[#ff7008] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-[#1d4c6b] hover:text-[#ff7008] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#1d4c6b] hover:text-[#ff7008] transition-colors"
            >
              Contact
            </Link>
            <button className="bg-[#ff7008] text-white px-6 py-2 rounded-full hover:bg-[#e66507] transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
