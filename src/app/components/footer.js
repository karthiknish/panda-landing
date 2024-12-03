export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d4c6b] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear} Panda Puzzle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
