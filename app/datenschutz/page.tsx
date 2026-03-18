export const metadata = {
  title: 'Datenschutz — alpine.boost',
}

export default function Datenschutz() {
  return (
    <div className="px-6 lg:px-20 py-24 lg:py-[120px] max-w-[720px]">
      <h1 className="text-cream text-4xl font-extrabold tracking-tight mb-10">Datenschutzerklärung</h1>

      <section className="mb-8">
        <h2 className="text-cream text-lg font-bold mb-3">1. Verantwortliche Stelle</h2>
        <p className="text-body text-base leading-relaxed">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
          buetikoferdigital<br />
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
        <h2 className="text-cream text-lg font-bold mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p className="text-body text-base leading-relaxed">
          Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese im Rahmen einer Kontaktaufnahme
          oder der Nutzung unseres KI-Readiness-Assessments freiwillig mitteilen. Dabei kann es sich um
          Angaben wie Ihre E-Mail-Adresse oder Ihren Namen handeln. Eine Weitergabe dieser Daten an Dritte
          findet ohne Ihre ausdrückliche Einwilligung nicht statt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-cream text-lg font-bold mb-3">3. Zweck der Datenverarbeitung</h2>
        <p className="text-body text-base leading-relaxed">
          Die von Ihnen übermittelten Daten werden ausschliesslich zur Beantwortung Ihrer Anfragen
          sowie zur Erbringung unserer Beratungsleistungen verwendet.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-cream text-lg font-bold mb-3">4. Speicherdauer</h2>
        <p className="text-body text-base leading-relaxed">
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die Erfüllung des
          jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungspflichten dies vorschreiben.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-cream text-lg font-bold mb-3">5. Ihre Rechte</h2>
        <p className="text-body text-base leading-relaxed">
          Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten sowie
          das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Zur Ausübung Ihrer
          Rechte wenden Sie sich bitte an:{' '}
          <a
            href="mailto:buetikoferdigital@gmail.com"
            className="text-accent hover:opacity-80 transition-opacity"
          >
            buetikoferdigital@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-cream text-lg font-bold mb-3">6. Cookies und Analyse-Tools</h2>
        <p className="text-body text-base leading-relaxed">
          Diese Website verwendet keine Tracking-Cookies und setzt keine externen Analyse-Tools ein,
          die personenbezogene Daten ohne Ihre Einwilligung erheben.
        </p>
      </section>

      <section>
        <h2 className="text-cream text-lg font-bold mb-3">7. Änderungen dieser Datenschutzerklärung</h2>
        <p className="text-body text-base leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle
          Version ist auf dieser Seite abrufbar.
        </p>
      </section>
    </div>
  )
}
