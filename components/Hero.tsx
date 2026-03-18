export default function Hero() {
  const stats = [
    { val: '100+', lbl: 'Unternehmen analysiert' },
    { val: 'Ø 6h',  lbl: 'pro Woche gespart' },
    { val: '3 min', lbl: 'bis zum Ergebnis' },
  ]

  return (
    <section className="bg-page border-b border-divider">
      <div className="px-6 lg:px-20 pt-16 pb-14 lg:pt-[88px] lg:pb-[80px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-accent rounded-[5px] px-3.5 py-1.5 mb-9">
              <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
              <span className="text-dim text-[10px] tracking-[1.5px] uppercase font-medium">
                KI-Beratung für KMUs &amp; Mittelstand
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white font-black leading-[1.05] tracking-[-2.5px] mb-7"
              style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
            >
              Deine Mitarbeiter<br />
              arbeiten hart.<br />
              <em className="not-italic text-accent font-extrabold">Mit AI</em> arbeiten<br />
              sie smart.
            </h1>

            {/* Subtext */}
            <p className="text-body text-base leading-[1.75] mb-10 max-w-[520px]">
              Finde in 3 Minuten heraus, wie viel Potenzial dein Unternehmen durch AI noch ungenutzt lässt.
            </p>

            {/* CTA */}
            <a
              href="/quiz"
              className="inline-block bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-[15px] transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20"
            >
              Jetzt AI-Readiness testen →
            </a>

            {/* Mobile stats */}
            <div className="flex items-center flex-wrap gap-y-4 mt-10 lg:hidden">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && <div className="w-px h-9 bg-divider mx-8" />}
                  <div className="flex flex-col gap-1">
                    <span className="text-accent text-xl font-extrabold tracking-tight leading-none">{s.val}</span>
                    <span className="text-muted text-[10px] uppercase tracking-widest font-medium">{s.lbl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats card (desktop only) */}
          <div className="hidden lg:block">
            <div className="bg-card border border-divider rounded-2xl p-8 flex flex-col gap-0">
              <div className="flex items-center gap-2.5 mb-7">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="text-muted text-[10px] uppercase tracking-[1.5px] font-medium">Live-Ergebnisse</span>
              </div>

              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-5 ${i < stats.length - 1 ? 'border-b border-divider' : ''}`}
                >
                  <span className="text-muted text-sm">{s.lbl}</span>
                  <span className="text-accent text-2xl font-extrabold tracking-tight">{s.val}</span>
                </div>
              ))}

              <a
                href="/quiz"
                className="mt-7 w-full text-center bg-transparent border border-accent/40 text-accent font-bold text-sm rounded-lg px-6 py-3.5 transition-all duration-200 hover:bg-accent hover:text-page hover:border-accent hover:shadow-lg hover:shadow-amber-500/20"
              >
                Assessment starten →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
