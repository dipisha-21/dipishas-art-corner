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
        <div className="min-h-screen bg-background text-white">
          <header className="border-b border-white/5 sticky top-0 backdrop-blur bg-background/80 z-20">
            <div className="container-narrow flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-accent/80" />
                <span className="text-sm font-medium tracking-wide">
                  Dipisha&apos;s Art Corner
                </span>
              </div>
              <nav className="flex gap-5 text-xs text-muted">
                <a href="#work" className="hover:text-white transition">
                  Work
                </a>
                <a href="#pinterest" className="hover:text-white transition">
                  Pinterest
                </a>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="container-narrow py-10 space-y-20">
            {children}
          </main>

          <footer className="border-t border-white/5 mt-10">
            <div className="container-narrow py-6 text-xs text-muted flex justify-between">
              <span>© {new Date().getFullYear()} Dipisha</span>
              <span>Made with love & art</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
