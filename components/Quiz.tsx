'use client'

import { useState } from 'react'

// ─── Data ───────────────────────────────────────────────
const q1Options = [
  { label: 'Täglich',              score: 25 },
  { label: 'Mehrmals pro Woche',   score: 18 },
  { label: 'Selten',               score: 10 },
  { label: 'Gar nicht',            score: 0  },
]

const q2Options = [
  { label: 'E-Mails',           score: 4 },
  { label: 'Recherche',         score: 4 },
  { label: 'Reports',           score: 4 },
  { label: 'Präsentationen',    score: 4 },
  { label: 'Noch gar nicht',    score: 0 },
]

const q3Options = [
  { label: 'Ja, klare Regeln',    score: 24 },
  { label: 'Informell geregelt',  score: 12 },
  { label: 'Nein',                score: 0  },
]

const q4Options = [
  'Zu viel Admin-Aufwand',
  'Langsame Prozesse',
  'Wissenstransfer im Team',
  'Fehlende Mitarbeiterkapazität',
]

const q5Options = [
  'Zeit sparen',
  'Kosten senken',
  'Qualität steigern',
  'Wettbewerbsvorteil sichern',
]

const q6Options = [
  { label: 'Sofort (< 1 Monat)',         score: 35 },
  { label: 'Kurzfristig (1–3 Monate)',   score: 20 },
  { label: 'Mittelfristig (3–6 Monate)', score: 10 },
]

const tierContent = {
  einsteiger: {
    label: 'AI-Einsteiger',
    message:
      'Euer Potenzial ist riesig – und noch fast ungenutzt. Die gute Nachricht: Ihr könnt sofort starten.',
    cta: 'Kostenloses Erstgespräch buchen',
    insights: [
      'Erste AI-Tools wie ChatGPT lassen sich in wenigen Stunden einführen – ohne IT-Kenntnisse.',
      'Euer größter Quick-Win liegt im Bereich Admin: E-Mails, Protokolle, Recherche.',
      'Unternehmen wie eures sparen durchschnittlich 6h/Woche bereits nach 30 Tagen.',
    ],
  },
  anwender: {
    label: 'AI-Anwender',
    message:
      'Ihr nutzt AI bereits – aber das Meiste bleibt noch auf dem Tisch. Mit der richtigen Systematik verdoppelt ihr euren Impact.',
    cta: 'Zum AI-Workshop anmelden',
    insights: [
      'Ihr habt das Fundament – was fehlt, ist ein systematischer Einsatz über alle Teams hinweg.',
      'Ohne klare interne Richtlinien bleibt AI-Nutzung zufällig und nicht skalierbar.',
      'Ein strukturierter AI-Workshop bringt euer Team in 2 Tagen auf ein einheitliches Level.',
    ],
  },
  operator: {
    label: 'AI-Operator',
    message:
      'Ihr seid auf dem richtigen Weg. Jetzt geht es darum, AI strategisch zu skalieren und zur Kernkompetenz zu machen.',
    cta: 'AI-Strategie-Session buchen',
    insights: [
      'Ihr gehört zu den Top 20% der Unternehmen, die AI bereits aktiv nutzen.',
      'Der nächste Schritt: AI nicht nur nutzen, sondern zur strategischen Kernkompetenz ausbauen.',
      'Mit einer maßgeschneiderten AI-Strategie könnt ihr Effizienzgewinne systematisch skalieren.',
    ],
  },
}

// ─── Sub-components ──────────────────────────────────────
function QuizCard({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full text-left rounded-lg border px-4 py-4 transition-colors duration-150 ${
        selected
          ? 'border-accent text-accent'
          : 'border-divider text-body hover:border-divider-soft'
      } bg-card text-sm font-medium`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${
            selected ? 'border-accent bg-accent' : 'border-divider-soft'
          }`}
        >
          {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
        {label}
      </div>
    </button>
  )
}

function QuizCheckbox({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full text-left rounded-lg border px-4 py-4 transition-colors duration-150 ${
        selected
          ? 'border-accent text-accent'
          : 'border-divider text-body hover:border-divider-soft'
      } bg-card text-sm font-medium`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
            selected ? 'border-accent bg-accent' : 'border-divider-soft'
          }`}
        >
          {selected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        {label}
      </div>
    </button>
  )
}

// ─── Main component ──────────────────────────────────────
export default function Quiz() {
  const [step, setStep]   = useState(1)
  const [vorname, setVorname]                 = useState('')
  const [email, setEmail]                     = useState('')
  const [unternehmensgroesse, setUntg]        = useState('')
  const [branche, setBranche]                 = useState('')
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState<string[]>([])
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')
  const [q5, setQ5] = useState('')
  const [q6, setQ6] = useState('')

  // Scoring
  const q1Score = q1Options.find((o) => o.label === q1)?.score ?? 0
  const q2Score = q2.includes('Noch gar nicht') ? 0 : q2.length * 4
  const q3Score = q3Options.find((o) => o.label === q3)?.score ?? 0
  const q6Score = q6Options.find((o) => o.label === q6)?.score ?? 0
  const score   = Math.min(q1Score + q2Score + q3Score + q6Score, 100)
  const tier    = score <= 35 ? 'einsteiger' : score <= 65 ? 'anwender' : 'operator'
  const content = tierContent[tier]

  // Q2 toggle (multi-select with "Noch gar nicht" mutual exclusion)
  function toggleQ2(label: string) {
    if (label === 'Noch gar nicht') {
      setQ2(['Noch gar nicht'])
      return
    }
    setQ2((prev) => {
      const without = prev.filter((l) => l !== 'Noch gar nicht')
      return without.includes(label)
        ? without.filter((l) => l !== label)
        : [...without, label]
    })
  }

  // Submit (fires on step 3 → step 4)
  function handleSubmit() {
    const data = {
      contact: { vorname, email, unternehmensgroesse, branche },
      answers: { q1, q2, q3, q4, q5, q6 },
      score,
      tier,
    }
    console.log('Quiz completed:', data)
    setStep(4)
  }

  const inputClass =
    'w-full bg-card border border-divider rounded-md px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent transition-colors duration-150'

  const selectClass =
    'w-full bg-card border border-divider rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors duration-150 appearance-none'

  return (
    <section
      id="assessment"
      className="bg-page border-b border-divider px-6 lg:px-20 py-16 lg:py-[72px]"
    >
      {/* Header */}
      <div className="mb-10">
        <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-3">
          KI-Readiness Assessment
        </p>
        <h2 className="text-white text-3xl lg:text-[32px] font-extrabold tracking-tight">
          Wie AI-ready ist dein Unternehmen?
        </h2>
        <p className="text-body text-sm mt-3 max-w-md">
          3 Minuten. Kostenlos. Kein Account nötig.
        </p>
      </div>

      {/* Step indicator */}
      {step < 4 && (
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-accent' : 'bg-divider'
              } ${s === step ? 'w-8' : 'w-4'}`}
            />
          ))}
          <span className="text-muted text-xs ml-2">Schritt {step} von 3</span>
        </div>
      )}

      <div className="max-w-2xl">

        {/* ── STEP 1: Contact ── */}
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="vorname" className="text-muted text-xs uppercase tracking-wide">Vorname</label>
                <input
                  id="vorname"
                  type="text"
                  placeholder="Max"
                  value={vorname}
                  onChange={(e) => setVorname(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-muted text-xs uppercase tracking-wide">E-Mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="max@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="unternehmensgroesse" className="text-muted text-xs uppercase tracking-wide">Unternehmensgröße</label>
              <div className="relative">
                <select
                  id="unternehmensgroesse"
                  value={unternehmensgroesse}
                  onChange={(e) => setUntg(e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Anzahl Mitarbeiter wählen</option>
                  <option>1–10 Mitarbeiter</option>
                  <option>11–50 Mitarbeiter</option>
                  <option>51–200 Mitarbeiter</option>
                  <option>200+ Mitarbeiter</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="branche" className="text-muted text-xs uppercase tracking-wide">Branche</label>
              <div className="relative">
                <select
                  id="branche"
                  value={branche}
                  onChange={(e) => setBranche(e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Branche wählen</option>
                  <option>Handel</option>
                  <option>Dienstleistung</option>
                  <option>Produktion</option>
                  <option>Logistik</option>
                  <option>Sonstiges</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                if (!vorname || !email || !unternehmensgroesse || !branche) return
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
                setStep(2)
              }}
              className="bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90 w-full md:w-auto"
            >
              Weiter zum Assessment →
            </button>
          </div>
        )}

        {/* ── STEP 2: AI Usage ── */}
        {step === 2 && (
          <div className="flex flex-col gap-8">
            {/* Q1 */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">
                Wie oft nutzt du oder dein Team AI-Tools wie ChatGPT?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q1Options.map((o) => (
                  <QuizCard
                    key={o.label}
                    label={o.label}
                    selected={q1 === o.label}
                    onClick={() => setQ1(o.label)}
                  />
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div>
              <p className="text-white font-semibold text-sm mb-1">
                Für welche Aufgaben setzt ihr AI ein?
              </p>
              <p className="text-muted text-xs mb-4">Mehrfachauswahl möglich</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q2Options.map((o) => (
                  <QuizCheckbox
                    key={o.label}
                    label={o.label}
                    selected={q2.includes(o.label)}
                    onClick={() => toggleQ2(o.label)}
                  />
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">
                Habt ihr interne Richtlinien für den AI-Einsatz?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {q3Options.map((o) => (
                  <QuizCard
                    key={o.label}
                    label={o.label}
                    selected={q3 === o.label}
                    onClick={() => setQ3(o.label)}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="text-muted text-sm hover:text-white transition-colors px-4 py-3"
              >
                ← Zurück
              </button>
              <button
                onClick={() => { if (q1 && q3) setStep(3) }}
                className="bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90"
              >
                Weiter →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Goals ── */}
        {step === 3 && (
          <div className="flex flex-col gap-8">
            {/* Q4 */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">
                Was ist aktuell deine größte operative Herausforderung?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q4Options.map((o) => (
                  <QuizCard key={o} label={o} selected={q4 === o} onClick={() => setQ4(o)} />
                ))}
              </div>
            </div>

            {/* Q5 */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">
                Was würde sich für dich am meisten lohnen?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q5Options.map((o) => (
                  <QuizCard key={o} label={o} selected={q5 === o} onClick={() => setQ5(o)} />
                ))}
              </div>
            </div>

            {/* Q6 */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">
                Wie schnell möchtest du Ergebnisse sehen?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {q6Options.map((o) => (
                  <QuizCard
                    key={o.label}
                    label={o.label}
                    selected={q6 === o.label}
                    onClick={() => setQ6(o.label)}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="text-muted text-sm hover:text-white transition-colors px-4 py-3"
              >
                ← Zurück
              </button>
              <button
                onClick={() => { if (q4 && q5 && q6) handleSubmit() }}
                className="bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90"
              >
                Ergebnis anzeigen →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 4: Results ── */}
        {step === 4 && (
          <div className="flex flex-col gap-8">
            {/* Tier label + message */}
            <div>
              <span className="inline-block border border-accent text-accent text-[10px] uppercase tracking-[2px] font-semibold px-3 py-1 rounded-[4px] mb-4">
                {content.label}
              </span>
              <p className="text-body text-sm leading-relaxed max-w-lg">
                {content.message}
              </p>
            </div>

            {/* Score */}
            <div>
              <div className="flex items-baseline justify-between mb-2 max-w-md">
                <span className="text-muted text-[10px] uppercase tracking-[1.5px]">
                  AI-Readiness-Score
                </span>
                <span className="text-accent text-[32px] font-black leading-none tracking-tight">
                  {score}
                </span>
              </div>
              <div className="bg-card rounded h-1.5 max-w-md overflow-hidden">
                <div
                  className="h-full bg-accent rounded transition-all duration-700"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>

            {/* Insights */}
            <div className="flex flex-col gap-3">
              {content.insights.map((insight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card border border-divider rounded-lg px-5 py-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-[6px]" />
                  <p className="text-body text-sm leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-block bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90 w-full md:w-auto text-center"
            >
              {content.cta} →
            </a>

            <button
              onClick={() => {
                setStep(1)
                setQ1(''); setQ2([]); setQ3(''); setQ4(''); setQ5(''); setQ6('')
                setVorname(''); setEmail(''); setUntg(''); setBranche('')
              }}
              className="text-muted text-xs hover:text-white transition-colors text-left"
            >
              Assessment wiederholen
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
