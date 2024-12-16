import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 mb-24 lg:mb-0 z-50">
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

          <Link
            href="/contact"
            className="bg-[#ff7008] text-white px-6 py-2 rounded-full hover:bg-[#e66507] transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
