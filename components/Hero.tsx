export default function Hero() {
  const stats = [
    { val: '100+', lbl: 'Unternehmen analysiert' },
    { val: 'Ø 6h',  lbl: 'pro Woche gespart' },
    { val: '3 min', lbl: 'bis zum Ergebnis' },
  ]

  return (
    <section className="bg-page border-b border-divider">
      <div className="px-6 lg:px-20 pt-16 pb-14 lg:pt-[88px] lg:pb-[72px]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-accent rounded-[5px] px-3.5 py-1.5 mb-9">
          <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
          <span className="text-dim text-[10px] tracking-[1.5px] uppercase font-medium">
            KI-Beratung für KMUs &amp; Mittelstand
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-black leading-[1.05] tracking-[-2.5px] mb-7 max-w-[760px]"
          style={{ fontSize: 'clamp(40px, 7vw, 72px)' }}
        >
          Deine Mitarbeiter<br />
          arbeiten hart.<br />
          <em className="not-italic text-accent font-extrabold">Mit AI</em> arbeiten<br />
          sie smart.
        </h1>

        {/* Subtext */}
        <p className="text-body text-base leading-[1.75] max-w-[500px] mb-11">
          Finde in 3 Minuten heraus, wie viel Potenzial dein Unternehmen durch AI noch ungenutzt lässt.
        </p>

        {/* CTA */}
        <a
          href="/quiz"
          className="inline-block bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-[15px] mb-9 transition-opacity hover:opacity-90"
        >
          Jetzt AI-Readiness testen →
        </a>

        {/* Stats row */}
        <div className="flex items-center flex-wrap gap-y-4">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="w-px h-9 bg-divider mx-8" />}
              <div className="flex flex-col gap-1">
                <span className="text-accent text-xl font-extrabold tracking-tight leading-none">
                  {s.val}
                </span>
                <span className="text-muted text-[10px] uppercase tracking-widest font-medium">
                  {s.lbl}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
