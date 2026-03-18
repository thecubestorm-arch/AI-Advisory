import { Shield, TrendingUp, Building2 } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Kein IT-Studium nötig',
    description:
      'Praxiserprobte Tools, die sofort einsetzbar sind – ohne technisches Vorwissen.',
  },
  {
    icon: TrendingUp,
    title: 'ROI in Wochen, nicht Jahren',
    description:
      'Messbare Zeitersparnis ab dem ersten Monat. Kein langer Implementierungszyklus.',
  },
  {
    icon: Building2,
    title: 'Für echte Unternehmen',
    description:
      'Kein Startup-Hype. Lösungen für Mittelstand und KMU mit echten Prozessen.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-page border-b border-divider px-6 lg:px-20 py-16 lg:py-[72px]">
      <div className="mb-12">
        <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-3">
          Warum AI Advisory
        </p>
        <h2 className="text-white text-3xl lg:text-[32px] font-extrabold tracking-tight">
          Substanz statt Hype
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <div
              key={b.title}
              className="bg-card border border-divider rounded-[10px] p-8 flex flex-col gap-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 cursor-default"
            >
              <Icon size={32} className="text-accent" strokeWidth={1.5} />
              <div>
                <h3 className="text-white text-[18px] font-bold mb-2">{b.title}</h3>
                <p className="text-body text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
