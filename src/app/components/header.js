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

          <div className="hidden md:flex items-end space-x-8">
            <Link
              href="/contact"
              className="bg-[#ff7008] text-white px-6 py-2 rounded-full hover:bg-[#e66507] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
