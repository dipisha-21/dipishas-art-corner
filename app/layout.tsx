import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipisha’s Art Corner",
  description: "Minimal art portfolio and Pinterest gallery by Dipisha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
<body>
  <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-rose-50">
    <header className="border-b border-purple-100 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="container-narrow flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-orange-300 shadow-md" />
          <span className="text-sm font-semibold tracking-wide text-slate-900">
            Dipisha&apos;s Art Corner
          </span>
        </div>
        <nav className="flex gap-6 text-xs font-medium text-slate-600">
          <a href="#work" className="hover:text-purple-700 transition">
            Work
          </a>
          <a href="#pinterest" className="hover:text-purple-700 transition">
            Pinterest
          </a>
          <a href="#about" className="hover:text-purple-700 transition">
            About
          </a>
          <a href="#contact" className="hover:text-purple-700 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>

    <main className="container-narrow py-10 space-y-20">
      {children}
    </main>

    <footer className="border-t border-purple-100 bg-white/80 mt-10">
      <div className="container-narrow py-6 text-xs text-slate-500 flex justify-between">
        <span>© {new Date().getFullYear()} Dipisha</span>
        <span>Original art & pastel colours</span>
      </div>
    </footer>
  </div>
</body>

    </html>
  );
}
