export default function Hero() {
  const stats = [
    { val: '100+', lbl: 'Unternehmen analysiert' },
    { val: 'Ø 6h',  lbl: 'pro Woche gespart' },
    { val: '3 min', lbl: 'bis zum Ergebnis' },
  ]

  return (
    <section className="bg-page border-b border-divider">
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-20 lg:pt-28 lg:pb-28 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-accent rounded-[5px] px-3.5 py-1.5 mb-10">
          <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
          <span className="text-dim text-[10px] tracking-[1.5px] uppercase font-medium">
            KI-Operator für KMUs &amp; Mittelstand
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-cream font-black leading-[1.05] tracking-[-2.5px] mb-8"
          style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}
        >
          Deine Mitarbeiter<br />
          arbeiten hart.<br />
          <em className="not-italic text-accent font-extrabold">Mit AI</em> arbeiten<br />
          sie smart.
        </h1>

        {/* Subtext */}
        <p className="text-body text-base leading-[1.75] mb-8 max-w-[560px] mx-auto">
          Finde in 3 Minuten heraus, wie viel Potenzial dein Unternehmen durch AI noch ungenutzt lässt.
        </p>

        {/* Manager quote */}
        <div className="border border-divider rounded-xl px-6 py-5 mb-10 max-w-[560px] mx-auto text-left">
          <p className="text-body text-sm leading-[1.8] mb-3">
            <span className="text-cream font-semibold">Sandra, 41, leitet ein 18-köpfiges Team.</span>{' '}
            Früher verbrachte sie jeden Montag zwei Stunden mit Berichten, E-Mails und Koordination.
            Heute macht sie das in 20 Minuten — weil sie mit AI arbeitet. Nicht weil sie smarter wurde.
            Sondern weil sie die richtigen Werkzeuge hat.
          </p>
          <p className="text-muted text-xs uppercase tracking-widest font-medium">
            — Ergebnis nach 4 Wochen AI-Einführung
          </p>
        </div>

        {/* Big CTA */}
        <a
          href="/quiz"
          className="inline-block relative font-extrabold text-base rounded-[9px] px-12 py-5 mb-12 text-accent border-2 border-accent transition-all duration-300 hover:scale-[1.03] hover:text-page hover:bg-accent"
          style={{
            fontSize: '1.05rem',
            boxShadow: '0 0 18px 3px rgba(245, 158, 11, 0.45), 0 0 40px 8px rgba(245, 158, 11, 0.18)',
            animation: 'glow-pulse 2.4s ease-in-out infinite',
          }}
        >
          Jetzt AI-Readiness testen →
        </a>

        <style>{`
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 18px 3px rgba(245,158,11,0.45), 0 0 40px 8px rgba(245,158,11,0.18); }
            50%       { box-shadow: 0 0 28px 6px rgba(245,158,11,0.70), 0 0 60px 14px rgba(245,158,11,0.30); }
          }
        `}</style>

        {/* Stats row */}
        <div className="flex items-center justify-center flex-wrap gap-y-4">
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
    </section>
  )
}
