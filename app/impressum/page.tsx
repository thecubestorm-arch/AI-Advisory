export const metadata = {
  title: 'Impressum — AI Advisory',
}

export default function Impressum() {
  return (
    <div className="px-6 lg:px-20 py-24 lg:py-[120px] max-w-[720px]">
      <h1 className="text-white text-4xl font-extrabold tracking-tight mb-10">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-white text-lg font-bold mb-3">Angaben gemäss Art. 3 Abs. 1 lit. s UWG</h2>
        <p className="text-body text-base leading-relaxed">
          buetikoferdigital<br />
          Schweiz
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-white text-lg font-bold mb-3">Kontakt</h2>
        <p className="text-body text-base leading-relaxed">
          E-Mail:{' '}
          <a
            href="mailto:buetikoferdigital@gmail.com"
            className="text-accent hover:opacity-80 transition-opacity"
          >
            buetikoferdigital@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-white text-lg font-bold mb-3">Haftungsausschluss</h2>
        <p className="text-body text-base leading-relaxed">
          Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als
          Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach allgemeinen Gesetzen
          verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="text-white text-lg font-bold mb-3">Urheberrecht</h2>
        <p className="text-body text-base leading-relaxed">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  )
}
