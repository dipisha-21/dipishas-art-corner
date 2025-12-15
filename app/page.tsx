const featuredArt = [
  {
    title: "Soft Pastel Portrait",
    tag: "Traditional",
  },
  {
    title: "Monochrome Mandala",
    tag: "Ink",
  },
  {
    title: "Floral Line Study",
    tag: "Sketchbook",
  },
  {
    title: "Muted Sky Landscape",
    tag: "Acrylic",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-4">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="space-y-6 md:flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-500">
              Art Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Gentle, minimal art with soft colors and quiet details.
            </h1>
            <p className="text-sm text-slate-600 max-w-md">
              A curated corner of sketches, mandalas, and cozy visuals by
              Dipisha. Each piece is created with patience, pastel tones, and a
              love for small details.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="https://in.pinterest.com/dipishashivangi21/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-purple-700 transition"
              >
                View full Pinterest
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 hover:border-purple-500 hover:text-purple-700 transition"
              >
                Ask about commissions
              </a>
            </div>
          </div>

          <div className="md:flex-1 flex justify-end">
            <div className="relative w-48 h-56 md:w-64 md:h-72 rounded-3xl bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section id="work" className="space-y-6">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-500">
              Curated selection
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Featured pieces
            </h2>
          </div>
          <p className="text-[11px] text-slate-500">
            A small selection from my sketchbooks and boards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredArt.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-purple-100 bg-white/90 p-4 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100 group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-amber-200 transition" />
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-900">
                  {item.title}
                </h3>
                <span className="text-[10px] px-2 py-1 rounded-full border border-slate-200 text-slate-500">
                  {item.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pinterest embed */}
      <section id="pinterest" className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-500">
              From Pinterest
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Live from Pinterest
            </h2>
          </div>
          <p className="text-[11px] text-slate-500">
            This section can show your latest pins automatically.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white/95 p-4">
          <p className="text-xs text-slate-500 mb-3">
            Paste your Pinterest profile or board widget here once you generate
            it from the Pinterest widget builder.
          </p>

          <div className="flex justify-center">
            <a
              data-pin-do="embedUser"
              data-pin-board-width="800"
              data-pin-scale-height="320"
              data-pin-scale-width="80"
              href="https://www.pinterest.com/dipishashivangi21/"
              className="w-full"
            >
              {/* Pinterest will render here after script loads */}
            </a>
          </div>
        </div>

        {/* Pinterest script */}
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </section>

      {/* About */}
      <section id="about" className="space-y-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-500">
            Artist story
          </p>
          <h2 className="text-lg font-semibold text-slate-900">
            About the artist
          </h2>
        </div>
        <div className="rounded-2xl border border-purple-100 bg-white/95 p-4 text-sm text-slate-600 leading-relaxed">
          <p>
            Hi, I&apos;m Dipisha — a self‑taught artist who loves calm colors,
            clean lines and tiny details. This space collects my experiments in
            mandalas, line art, portraits and more.
          </p>
          <p className="mt-3">
            You&apos;ll often find soft pastels, monochrome sketches, and small
            stories hidden inside each piece. Pinterest is where I pin works in
            progress, finished pieces and inspirations in one place.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4 mb-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-500">
            Get in touch
          </p>
          <h2 className="text-lg font-semibold text-slate-900">
            Contact & links
          </h2>
        </div>
        <div className="rounded-2xl border border-purple-100 bg-white/95 p-4 flex flex-col gap-3 text-sm">
          <p className="text-slate-600">
            For commission requests, collaborations or questions, reach out
            anytime.
          </p>
          <ul className="text-sm space-y-2">
            <li>
              <span className="text-slate-500">Email: </span>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-purple-700 transition"
              >
                your.email@example.com
              </a>
            </li>
            <li>
              <span className="text-slate-500">Pinterest: </span>
              <a
                href="https://in.pinterest.com/dipishashivangi21/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-700 transition"
              >
                @dipishashivangi21
              </a>
            </li>
            <li>
              <span className="text-slate-500">Instagram: </span>
              <a
                href="https://www.instagram.com/your-handle"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-700 transition"
              >
                your-handle
              </a>
            </li>
            <li>
              <span className="text-slate-500">YouTube: </span>
              <a
                href="https://www.youtube.com/@your-channel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-700 transition"
>
                your-channel
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}