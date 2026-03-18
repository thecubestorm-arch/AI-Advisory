import { ClipboardList, BarChart2, Zap } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: '3-Minuten Assessment ausfüllen',
    description:
      'Beantworte 6 kurze Fragen zu deinem aktuellen AI-Einsatz und deinen Zielen.',
  },
  {
    icon: BarChart2,
    number: '02',
    title: 'Persönlichen AI-Score erhalten',
    description:
      'Du bekommst sofort deinen AI-Readiness-Score – von 0 bis 100.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Konkreten Aktionsplan umsetzen',
    description:
      'Basierend auf deinen Antworten zeigen wir dir, wo du sofort ansetzen kannst.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="wie-es-funktioniert"
      className="bg-page border-b border-divider px-6 lg:px-20 py-16 lg:py-[72px]"
    >
      <div className="mb-12">
        <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-3">
          Der Prozess
        </p>
        <h2 className="text-white text-3xl lg:text-[32px] font-extrabold tracking-tight">
          So funktioniert es
        </h2>
        <p className="text-body text-sm mt-3 max-w-md">
          In drei Schritten zum konkreten AI-Aktionsplan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.number} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-muted text-[10px] uppercase tracking-[2px] font-medium">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-divider" />
              </div>
              <Icon size={28} className="text-accent" strokeWidth={1.5} />
              <div>
                <h3 className="text-white text-[17px] font-bold mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
