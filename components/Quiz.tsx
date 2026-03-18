'use client'

import Link from 'next/link'
import { useState } from 'react'

// ─── Types ───────────────────────────────────────────────
type Tier = 'einsteiger' | 'entdecker' | 'anwender' | 'leader'
type Answers = Record<string, string | string[]>

// ─── Part 2: AI Best Practices Questions (scored) ────────
const p2Questions = [
  {
    id: 'q1', type: 'single' as const,
    text: 'Wie häufig nutzen Sie oder Ihr Team KI-Tools in der Arbeit?',
    options: [
      { label: 'Täglich',              score: 5 },
      { label: 'Mehrmals pro Woche',   score: 4 },
      { label: 'Etwa einmal pro Woche',score: 3 },
      { label: 'Selten',               score: 1 },
      { label: 'Nie',                  score: 0 },
    ],
  },
  {
    id: 'q2', type: 'multi' as const,
    text: 'Welche Art von KI-Tools setzt Ihr Unternehmen ein?',
    subtitle: 'Mehrfachauswahl möglich',
    options: [
      { label: 'Textassistenten (ChatGPT, Claude, Gemini)',  score: 2 },
      { label: 'KI für Datenanalyse',                       score: 2 },
      { label: 'KI-Automatisierung (Zapier, Make, n8n)',     score: 2 },
      { label: 'Bild- oder Videogenerierung',               score: 1 },
      { label: 'Keines davon',                              score: 0 },
    ],
  },
  {
    id: 'q3', type: 'single' as const,
    text: 'Haben Sie eine schriftliche KI-Strategie oder Richtlinien?',
    options: [
      { label: 'Ja, vollständig dokumentiert', score: 5 },
      { label: 'Informell geregelt',           score: 3 },
      { label: 'Wird gerade erarbeitet',       score: 2 },
      { label: 'Nein',                         score: 0 },
    ],
  },
  {
    id: 'q4', type: 'single' as const,
    text: 'Wie viel Prozent Ihres Teams nutzt KI-Tools aktiv?',
    options: [
      { label: 'Mehr als 75%',        score: 5 },
      { label: '50–75%',              score: 4 },
      { label: '25–50%',              score: 2 },
      { label: 'Weniger als 25%',     score: 1 },
      { label: 'Niemand ausser mir',  score: 0 },
    ],
  },
  {
    id: 'q5', type: 'single' as const,
    text: 'Wie handhaben Sie Datenschutz und Sicherheit beim KI-Einsatz?',
    options: [
      { label: 'Klare Richtlinien und Schulungen vorhanden', score: 5 },
      { label: 'Grundlegende Massnahmen getroffen',          score: 3 },
      { label: 'Wir denken darüber nach',                   score: 1 },
      { label: 'Noch kein Thema',                           score: 0 },
    ],
  },
  {
    id: 'q6', type: 'single' as const,
    text: 'Messen Sie den ROI Ihres KI-Einsatzes (Zeit- oder Kostenersparnis)?',
    options: [
      { label: 'Ja, mit klaren Kennzahlen',              score: 5 },
      { label: 'Grobe Schätzungen vorhanden',            score: 3 },
      { label: 'Gefühlt hilfreich, aber nicht gemessen', score: 2 },
      { label: 'Nein',                                   score: 0 },
    ],
  },
  {
    id: 'q7', type: 'single' as const,
    text: 'Erhalten Ihre Mitarbeitenden regelmässige Schulungen zu KI-Tools?',
    options: [
      { label: 'Ja, strukturierte Schulungsprogramme', score: 5 },
      { label: 'Gelegentliche Workshops',              score: 3 },
      { label: 'Nur Selbstlernen',                     score: 2 },
      { label: 'Keine Schulungen',                     score: 0 },
    ],
  },
  {
    id: 'q8', type: 'single' as const,
    text: 'Wie tief sind KI-Tools in Ihre Kernprozesse integriert?',
    options: [
      { label: 'Tief in mehreren Abteilungen verankert', score: 5 },
      { label: 'In einigen Bereichen genutzt',           score: 3 },
      { label: 'Nur von Einzelpersonen genutzt',         score: 2 },
      { label: 'Nicht integriert',                       score: 0 },
    ],
  },
  {
    id: 'q9', type: 'single' as const,
    text: 'Nutzen Sie KI für kundenbezogene Aktivitäten (Service, Marketing, Sales)?',
    options: [
      { label: 'Ja, umfassend',         score: 5 },
      { label: 'In Ansätzen',           score: 3 },
      { label: 'Wird gerade erforscht', score: 1 },
      { label: 'Nein',                  score: 0 },
    ],
  },
  {
    id: 'q10', type: 'single' as const,
    text: 'Wie schätzen Sie die KI-Kompetenz Ihres Teams ein?',
    options: [
      { label: 'Fortgeschritten – mehrere Experten im Team', score: 5 },
      { label: 'Mittel – solides Grundwissen',               score: 3 },
      { label: 'Einsteiger – Grundkenntnisse vorhanden',     score: 1 },
      { label: 'Keine KI-Kenntnisse vorhanden',              score: 0 },
    ],
  },
]

// ─── Part 3 Options ───────────────────────────────────────
const situationOptions = [
  'Student/in',
  'Berufseinstieg (< 5 Jahre Erfahrung)',
  'Angestellte/r',
  'Teamleiter/in',
  'Führungskraft / Executive',
  'Unternehmer/in / Selbstständige/r',
  'Andere',
]
const outcomeOptions = [
  'Mehr Zeit durch Automatisierung gewinnen',
  'KI in mein Team oder Unternehmen einführen',
  'Meine KI-Kenntnisse systematisch aufbauen',
  'Konkrete KI-Anwendungsfälle identifizieren',
  'Eine KI-Strategie entwickeln',
  'Kosten durch KI-Optimierung senken',
  'Anderes',
]
const obstacleOptions = [
  'Zu wenig Wissen und Erfahrung mit KI',
  'Keine Zeit zum Lernen und Implementieren',
  'Unsicherheit, wo ich anfangen soll',
  'Fehlendes Buy-in im Team oder von der Führung',
  'Bedenken bei Datenschutz und Sicherheit',
  'Anderes',
]
const solutionOptions = [
  'Schulung und Training (Selbstlernen)',
  '1:1 Coaching',
  'Workshop für mein Team',
  'Software-Lösung und Automatisierung',
  'Strategieberatung',
  'Anderes',
]

// ─── Tier Config ──────────────────────────────────────────
const tierConfig: Record<Tier, { label: string; tagline: string; range: string }> = {
  einsteiger: {
    label: 'KI-Einsteiger',
    tagline: 'Der erste Schritt ist getan – jetzt startet die Transformation.',
    range: '0 – 30',
  },
  entdecker: {
    label: 'KI-Entdecker',
    tagline: 'Sie haben das Potenzial erkannt – jetzt gilt es, es systematisch zu entfalten.',
    range: '31 – 55',
  },
  anwender: {
    label: 'KI-Anwender',
    tagline: 'Solide Grundlage vorhanden. Mit der richtigen Systematik verdoppeln Sie Ihren Impact.',
    range: '56 – 75',
  },
  leader: {
    label: 'KI-Leader',
    tagline: 'Sie gehören zur Avantgarde. Jetzt geht es um strategische Skalierung.',
    range: '76 – 100',
  },
}

// ─── Insight Engine ───────────────────────────────────────
type Insight = { area: string; title: string; body: string }

function pickInsights(answers: Answers, d1: number, d2: number, d3: number, d4: number): Insight[] {
  const pool: Array<{ priority: number } & Insight> = []
  const q2Arr = (answers.q2 as string[] | undefined) ?? []

  if (d3 < 40) pool.push({ priority: 10, area: 'Strategie',
    title: 'Ihr grösster Hebel: eine KI-Governance-Strategie',
    body: 'Unternehmen mit klaren KI-Richtlinien erzielen nachweislich 3× höheren ROI als jene ohne. Eine einfache Policy zu Datenschutz, erlaubten Tools und Anwendungsfällen lässt sich in einem halben Tag erarbeiten.',
  })
  if (d2 < 40) pool.push({ priority: 9, area: 'Team-Adoption',
    title: 'KI funktioniert nur, wenn alle mitmachen',
    body: 'Wenn KI nur von Einzelpersonen genutzt wird, verpufft das Potenzial. Der Schlüssel: 2–3 konkrete Use-Cases definieren, die das gesamte Team sofort übernehmen kann – ohne technisches Vorwissen.',
  })
  if (d4 < 40) pool.push({ priority: 8, area: 'Training',
    title: 'KI-Training ist kein Nice-to-have – es ist ein Wettbewerbsvorteil',
    body: 'Teams mit regelmässigen KI-Schulungen sparen bis zu 8 Stunden pro Person und Woche. Ein einziger strukturierter Workshop kann die Adoption in Ihrem Team vervielfachen.',
  })
  if (d1 < 40) pool.push({ priority: 7, area: 'Nutzung',
    title: 'KI ist ein Muskel – er wächst durch täglichen Einsatz',
    body: 'Wer KI nur gelegentlich nutzt, sieht kaum Resultate. Wer täglich damit arbeitet, entwickelt Intuition und findet immer mehr Einsatzmöglichkeiten. Starten Sie mit 15 Minuten täglich.',
  })
  if (answers.q3 === 'Nein') pool.push({ priority: 9, area: 'Governance',
    title: 'Ohne Spielregeln drohen Compliance-Risiken',
    body: 'Ohne KI-Richtlinien nutzen Mitarbeitende Tools unkontrolliert – mit Risiken für Datenschutz und Qualität. Eine schlanke Policy schützt Sie und ermöglicht gleichzeitig Innovation.',
  })
  if (answers.q5 === 'Noch kein Thema' || answers.q5 === 'Wir denken darüber nach') pool.push({ priority: 8, area: 'Datenschutz',
    title: 'Datenschutz und KI sind kein Widerspruch',
    body: 'Mit den richtigen Frameworks schützen Sie Kundendaten und nutzen trotzdem alle KI-Vorteile – DSGVO-konform und ohne Kompromisse.',
  })
  if (!q2Arr.includes('KI-Automatisierung (Zapier, Make, n8n)')) pool.push({ priority: 7, area: 'Automatisierung',
    title: 'Automatisierung: der schnellste Weg zu messbaren Resultaten',
    body: 'Tools wie n8n, Make oder Zapier eliminieren repetitive Prozesse ohne Programmierkenntnisse. Viele Unternehmen sparen damit 5–10 Stunden pro Woche – bereits ab dem ersten Monat.',
  })
  if (answers.q6 === 'Nein') pool.push({ priority: 6, area: 'ROI-Messung',
    title: 'Was nicht gemessen wird, wird nicht verbessert',
    body: 'Ohne Kennzahlen können Sie den Wert von KI intern nicht kommunizieren. Schon eine einfache Zeiterfassung vor und nach der KI-Implementierung reicht als überzeugender Startpunkt.',
  })

  const seen = new Set<string>()
  return pool
    .sort((a, b) => b.priority - a.priority)
    .filter(i => { if (seen.has(i.area)) return false; seen.add(i.area); return true })
    .slice(0, 3)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ priority, ...rest }) => rest)
}

// ─── Next Steps ───────────────────────────────────────────
type NextStep = { title: string; description: string }

function buildNextSteps(tier: Tier, solution: string, outcomes: string[]): NextStep[] {
  const s1: NextStep = tier === 'einsteiger' ? {
    title: 'KI-Grundlagen in 30 Tagen aufbauen',
    description: 'Starten Sie mit ChatGPT für E-Mails, Protokolle und Recherche. Setzen Sie ein klares Ziel: 15 Minuten täglich KI-Einsatz.',
  } : tier === 'entdecker' ? {
    title: 'Erste systematische Anwendungsfälle definieren',
    description: 'Identifizieren Sie 2–3 repetitive Prozesse und ersetzen Sie diese konsequent durch KI-gestützte Workflows.',
  } : tier === 'anwender' ? {
    title: 'KI-Adoption auf das gesamte Team ausweiten',
    description: 'Bestimmen Sie einen internen KI-Champion, der Best Practices verteilt und eine einfache Tool-Bibliothek kuratiert.',
  } : {
    title: 'KI zur strategischen Kernkompetenz machen',
    description: 'Verankern Sie KI-Ziele in Ihrer Unternehmenstrategie und messen Sie KI-ROI quartalsweise mit klaren KPIs.',
  }

  const s2: NextStep = solution === '1:1 Coaching' ? {
    title: 'Persönliches KI-Coaching buchen',
    description: 'In einem 1:1 analysieren wir Ihre Situation und entwickeln einen massgeschneiderten Aktionsplan für die nächsten 90 Tage.',
  } : solution === 'Workshop für mein Team' ? {
    title: 'Team-Workshop planen',
    description: 'Ein halbtägiger Workshop bringt Ihr Team auf ein einheitliches KI-Level und definiert gemeinsame Use-Cases und Spielregeln.',
  } : solution === 'Software-Lösung und Automatisierung' ? {
    title: 'Automatisierungspotenzial analysieren',
    description: 'Wir analysieren Ihre Prozesse und identifizieren, welche durch KI-Automatisierung sofort Stunden einsparen können.',
  } : solution === 'Strategieberatung' ? {
    title: 'KI-Strategie entwickeln',
    description: 'Gemeinsam erarbeiten wir eine KI-Roadmap – von Governance über Tools bis hin zu Schulungsplan und Erfolgsmessung.',
  } : {
    title: 'Strukturierten KI-Lernpfad starten',
    description: 'Mit unserem kuratierten Lernpfad bauen Sie in 4 Wochen ein solides KI-Fundament auf – praxisnah, ohne technischen Hintergrund.',
  }

  const hasStrategyGoal = outcomes.some(o =>
    o === 'Eine KI-Strategie entwickeln' || o === 'KI in mein Team oder Unternehmen einführen'
  )
  const s3: NextStep = hasStrategyGoal ? {
    title: 'KI-Strategie-Session anfragen',
    description: 'Buchen Sie eine 60-minütige Strategie-Session, in der wir gemeinsam einen KI-Implementierungsplan entwickeln.',
  } : {
    title: 'Kostenloses Erstgespräch vereinbaren',
    description: 'In 30 Minuten zeigen wir Ihnen die 3 grössten Quick-Wins für Ihre Situation – ohne Verpflichtung, ohne Verkaufsgespräch.',
  }

  return [s1, s2, s3]
}

// ─── Card Sub-components ──────────────────────────────────
function QuizCard({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button" onClick={onClick} aria-pressed={selected}
      className={`w-full text-left rounded-lg border px-4 py-3.5 transition-colors duration-150 bg-card text-sm font-medium ${
        selected ? 'border-accent text-accent' : 'border-divider text-body hover:border-divider-soft'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${
          selected ? 'border-accent bg-accent' : 'border-divider-soft'
        }`}>
          {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
        {label}
      </div>
    </button>
  )
}

function QuizCheckbox({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button" onClick={onClick} aria-pressed={selected}
      className={`w-full text-left rounded-lg border px-4 py-3.5 transition-colors duration-150 bg-card text-sm font-medium ${
        selected ? 'border-accent text-accent' : 'border-divider text-body hover:border-divider-soft'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
          selected ? 'border-accent bg-accent' : 'border-divider-soft'
        }`}>
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

// ─── Main Component ───────────────────────────────────────
export default function Quiz() {
  const [uiStep, setUiStep] = useState(1)

  // Part 1
  const [name,  setName]  = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Part 2
  const [p2, setP2] = useState<Answers>({})

  // Part 3
  const [situation,    setSituation]    = useState('')
  const [outcomes,     setOutcomes]     = useState<string[]>([])
  const [outcomeOther, setOutcomeOther] = useState('')
  const [obstacle,     setObstacle]     = useState('')
  const [solution,     setSolution]     = useState('')
  const [additional,   setAdditional]   = useState('')

  // ─── Helpers ────────────────────────────────────────────
  function setSingle(qid: string, val: string) { setP2(p => ({ ...p, [qid]: val })) }
  function toggleMulti(qid: string, val: string) {
    setP2(p => {
      const cur = (p[qid] as string[] | undefined) ?? []
      if (val === 'Keines davon') return { ...p, [qid]: ['Keines davon'] }
      const without = cur.filter(v => v !== 'Keines davon')
      return { ...p, [qid]: without.includes(val) ? without.filter(v => v !== val) : [...without, val] }
    })
  }
  function toggleOutcome(val: string) {
    setOutcomes(p => p.includes(val) ? p.filter(v => v !== val) : [...p, val])
  }

  // ─── Scoring ────────────────────────────────────────────
  function pts(qid: string, label: string) {
    return p2Questions.find(q => q.id === qid)?.options.find(o => o.label === label)?.score ?? 0
  }
  const q2Arr = (p2.q2 as string[] | undefined) ?? []
  const d1 = Math.round(((pts('q1', p2.q1 as string) + Math.min(q2Arr.filter(v => v !== 'Keines davon').length * 1.5, 5)) / 10) * 100)
  const d2 = Math.round(((pts('q4', p2.q4 as string) + pts('q8', p2.q8 as string) + pts('q10', p2.q10 as string)) / 15) * 100)
  const d3 = Math.round(((pts('q3', p2.q3 as string) + pts('q5', p2.q5 as string) + pts('q6', p2.q6 as string)) / 15) * 100)
  const d4 = Math.round(((pts('q7', p2.q7 as string) + pts('q9', p2.q9 as string)) / 10) * 100)
  const overallScore = Math.round((d1 + d2 + d3 + d4) / 4)
  const tier: Tier = overallScore <= 30 ? 'einsteiger' : overallScore <= 55 ? 'entdecker' : overallScore <= 75 ? 'anwender' : 'leader'

  const dimensions = [
    { label: 'Nutzungsfrequenz',    score: d1 },
    { label: 'Team & Integration',  score: d2 },
    { label: 'Strategie & Messung', score: d3 },
    { label: 'Training & Fokus',    score: d4 },
  ]
  const insights  = pickInsights(p2, d1, d2, d3, d4)
  const nextSteps = buildNextSteps(tier, solution, outcomes)

  // ─── Validation ─────────────────────────────────────────
  const step2Valid = ['q1','q2','q3','q4','q5'].every(qid => {
    const q = p2Questions.find(q => q.id === qid)!
    return q.type === 'multi' ? ((p2[qid] as string[] | undefined) ?? []).length > 0 : !!p2[qid]
  })
  const step3Valid = ['q6','q7','q8','q9','q10'].every(qid => !!p2[qid])
  const step4Valid = !!situation && outcomes.length > 0 && !!obstacle && !!solution

  // ─── Submit ─────────────────────────────────────────────
  async function handleSubmit() {
    try {
      await fetch('https://n8n.srv1019856.hstgr.cloud/webhook/c00631d6-504a-45db-9962-65738d78887e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          contact: { name, email, phone },
          ai_assessment: p2,
          situation: { situation, outcomes, outcomeOther, obstacle, solution, additional },
          results: { overallScore, tier, dimensions },
        }),
      })
    } catch { /* silent fail */ }
    setUiStep(5)
  }

  function resetAll() {
    setUiStep(1); setName(''); setEmail(''); setPhone(''); setP2({})
    setSituation(''); setOutcomes([]); setOutcomeOther(''); setObstacle(''); setSolution(''); setAdditional('')
  }

  const inputClass = 'w-full bg-card border border-divider rounded-md px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent transition-colors duration-150'
  const tc = tierConfig[tier]

  return (
    <div className="min-h-screen bg-page flex flex-col">

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-10 bg-page border-b border-divider px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white font-bold text-[15px] tracking-tight hover:text-accent transition-colors duration-150">AI Advisory</Link>
            <div className="w-px h-4 bg-divider" />
            <Link href="/" className="text-muted text-xs hover:text-white transition-colors duration-150 flex items-center gap-1">
              ← Startseite
            </Link>
          </div>

          {uiStep < 5 ? (
            <div className="flex items-center gap-2">
              {[1,2,3,4].map(s => (
                <div key={s} className={`rounded-full transition-all duration-300 ${
                  s < uiStep ? 'bg-accent w-2 h-2' :
                  s === uiStep ? 'bg-accent w-3 h-3' :
                  'bg-divider w-2 h-2'
                }`} />
              ))}
              <span className="text-muted text-xs ml-2">{uiStep} / 4</span>
            </div>
          ) : (
            <button onClick={resetAll} className="text-muted text-xs hover:text-white transition-colors">
              Neu starten
            </button>
          )}
        </div>

        {/* Progress bar */}
        {uiStep < 5 && (
          <div className="h-px bg-divider -mx-6 lg:-mx-12 relative">
            <div
              className="absolute top-0 left-0 h-full bg-accent transition-all duration-500"
              style={{ width: `${(uiStep / 4) * 100}%` }}
            />
          </div>
        )}
      </header>

      {/* ── Form Steps ── */}
      {uiStep < 5 && (
        <main className="flex-1 flex items-start justify-center px-6 py-12 lg:py-16">
          <div className="w-full max-w-xl">

            {/* Step label */}
            <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-2">
              {uiStep === 1 ? 'Ihre Kontaktdaten' : uiStep === 4 ? 'Ihre Situation' : 'KI-Readiness Assessment'}
            </p>
            <p className="text-white text-xl lg:text-2xl font-bold tracking-tight mb-8">
              {uiStep === 1 ? 'Kurz vorstellen, dann geht\'s los.' :
               uiStep === 2 ? `Fragen ${1}–5 von 10` :
               uiStep === 3 ? `Fragen ${6}–10 von 10` :
               'Letzte Fragen zu Ihrer Situation.'}
            </p>

            {/* ── STEP 1: Contact ── */}
            {uiStep === 1 && (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-muted text-xs uppercase tracking-wide">Name</label>
                  <input type="text" placeholder="Max Muster" value={name} onChange={e => setName(e.target.value)} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-muted text-xs uppercase tracking-wide">E-Mail</label>
                  <input type="email" placeholder="max@muster.ch" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-muted text-xs uppercase tracking-wide">
                    Telefon <span className="normal-case text-muted text-[11px]">(optional)</span>
                  </label>
                  <input type="tel" placeholder="+41 79 000 00 00" value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} />
                </div>
                <button
                  onClick={() => { if (name && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setUiStep(2) }}
                  className="mt-2 bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90 w-full"
                >
                  Weiter zum Assessment →
                </button>
              </div>
            )}

            {/* ── STEP 2: Q1–5 ── */}
            {uiStep === 2 && (
              <div className="flex flex-col gap-8">
                {p2Questions.slice(0, 5).map(q => (
                  <div key={q.id}>
                    <p className="text-white font-semibold text-sm mb-1">{q.text}</p>
                    {q.subtitle ? <p className="text-muted text-xs mb-3">{q.subtitle}</p> : <div className="mb-4" />}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map(o => q.type === 'multi' ? (
                        <QuizCheckbox key={o.label} label={o.label}
                          selected={((p2[q.id] as string[] | undefined) ?? []).includes(o.label)}
                          onClick={() => toggleMulti(q.id, o.label)} />
                      ) : (
                        <QuizCard key={o.label} label={o.label}
                          selected={p2[q.id] === o.label} onClick={() => setSingle(q.id, o.label)} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setUiStep(1)} className="text-muted text-sm hover:text-white transition-colors px-4 py-3">← Zurück</button>
                  <button onClick={() => { if (step2Valid) setUiStep(3) }}
                    className="flex-1 bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90">
                    Weiter →
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: Q6–10 ── */}
            {uiStep === 3 && (
              <div className="flex flex-col gap-8">
                {p2Questions.slice(5, 10).map(q => (
                  <div key={q.id}>
                    <p className="text-white font-semibold text-sm mb-4">{q.text}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map(o => (
                        <QuizCard key={o.label} label={o.label}
                          selected={p2[q.id] === o.label} onClick={() => setSingle(q.id, o.label)} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setUiStep(2)} className="text-muted text-sm hover:text-white transition-colors px-4 py-3">← Zurück</button>
                  <button onClick={() => { if (step3Valid) setUiStep(4) }}
                    className="flex-1 bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90">
                    Weiter →
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 4: Situational ── */}
            {uiStep === 4 && (
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-white font-semibold text-sm mb-4">Was beschreibt Ihre aktuelle Situation am besten?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {situationOptions.map(o => <QuizCard key={o} label={o} selected={situation === o} onClick={() => setSituation(o)} />)}
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Was möchten Sie in den nächsten 90 Tagen erreichen?</p>
                  <p className="text-muted text-xs mb-4">Mehrfachauswahl möglich</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {outcomeOptions.map(o => o === 'Anderes' ? (
                      <div key={o} className="sm:col-span-2 flex flex-col gap-2">
                        <QuizCheckbox label="Anderes" selected={outcomes.includes('Anderes')} onClick={() => toggleOutcome('Anderes')} />
                        {outcomes.includes('Anderes') && (
                          <input type="text" placeholder="Bitte beschreiben Sie Ihr Ziel..." value={outcomeOther}
                            onChange={e => setOutcomeOther(e.target.value)} className={inputClass} />
                        )}
                      </div>
                    ) : (
                      <QuizCheckbox key={o} label={o} selected={outcomes.includes(o)} onClick={() => toggleOutcome(o)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-4">Was hält Sie aktuell zurück?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {obstacleOptions.map(o => <QuizCard key={o} label={o} selected={obstacle === o} onClick={() => setObstacle(o)} />)}
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-4">Welche Lösung würde am besten zu Ihnen passen?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {solutionOptions.map(o => <QuizCard key={o} label={o} selected={solution === o} onClick={() => setSolution(o)} />)}
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Gibt es noch etwas, das wir wissen sollten?</p>
                  <p className="text-muted text-xs mb-3">Optional</p>
                  <textarea placeholder="Z.B. Branche, Unternehmensgrösse, spezifische Herausforderungen..." value={additional}
                    onChange={e => setAdditional(e.target.value)} rows={3} className={`${inputClass} resize-none`} />
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setUiStep(3)} className="text-muted text-sm hover:text-white transition-colors px-4 py-3">← Zurück</button>
                  <button onClick={() => { if (step4Valid) handleSubmit() }}
                    className="flex-1 bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90">
                    Mein Ergebnis anzeigen →
                  </button>
                </div>
              </div>
            )}

          </div>
        </main>
      )}

      {/* ── STEP 5: Results Dashboard ── */}
      {uiStep === 5 && (
        <main className="flex-1 px-6 lg:px-12 py-10 lg:py-14">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">

            {/* ── BIG REVEAL ── */}
            <div>
              <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-1">Ihr persönliches KI-Profil</p>
              <p className="text-white text-2xl lg:text-3xl font-black tracking-tight mb-6">
                Sie sind <span className="text-accent">{tc.label}</span>.
              </p>

              <div className="bg-card border border-divider rounded-2xl p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                  {/* Score donut */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <div className="relative w-40 h-40">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#1c1c1c" strokeWidth="7" />
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="7"
                          strokeLinecap="round"
                          strokeDasharray={`${Math.round((overallScore / 100) * 264)} 264`}
                          style={{ transition: 'stroke-dasharray 1.2s ease-out' }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-accent font-black leading-none" style={{ fontSize: '2.75rem' }}>{overallScore}</span>
                        <span className="text-muted text-[9px] uppercase tracking-widest mt-1">/ 100</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="border border-accent text-accent text-[10px] uppercase tracking-[1.5px] font-bold px-3 py-1.5 rounded-[4px]">
                        {tc.label}
                      </span>
                      <p className="text-muted text-[10px] mt-2">Bereich: {tc.range}</p>
                    </div>
                  </div>

                  {/* Tagline + dimension bars */}
                  <div className="flex-1">
                    <p className="text-white text-lg font-semibold leading-snug mb-6">{tc.tagline}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {dimensions.map(d => (
                        <div key={d.label}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-muted text-[10px] uppercase tracking-wide">{d.label}</span>
                            <span className={`text-xs font-bold ${d.score >= 70 ? 'text-accent' : d.score >= 40 ? 'text-white' : 'text-body'}`}>
                              {d.score}%
                            </span>
                          </div>
                          <div className="bg-page rounded-full h-1.5 overflow-hidden">
                            <div className={`h-full rounded-full ${d.score >= 70 ? 'bg-accent' : d.score >= 40 ? 'bg-white/40' : 'bg-body/40'}`}
                              style={{ width: `${d.score}%`, transition: 'width 1s ease-out' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── INSIGHTS + NEXT STEPS (2-col on desktop) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Insights */}
              <div>
                <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-1">3 wichtige Erkenntnisse</p>
                <p className="text-body text-xs mb-4">Personalisiert basierend auf Ihren Antworten.</p>
                <div className="flex flex-col gap-3">
                  {insights.map((insight, i) => (
                    <div key={i} className="bg-card border border-divider rounded-xl px-5 py-4 flex gap-4">
                      <span className="text-accent font-black text-sm flex-shrink-0 w-5 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1.5">{insight.title}</p>
                        <p className="text-body text-xs leading-relaxed">{insight.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div>
                <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-1">Ihre nächsten Schritte</p>
                <p className="text-body text-xs mb-4">Abgestimmt auf Ihr Profil und Ihre Ziele.</p>
                <div className="flex flex-col gap-3">
                  {nextSteps.map((ns, i) => (
                    <div key={i} className="bg-card border border-divider rounded-xl px-5 py-4 flex gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full border border-accent flex items-center justify-center mt-0.5">
                        <span className="text-accent text-[10px] font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1.5">{ns.title}</p>
                        <p className="text-body text-xs leading-relaxed">{ns.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CONTACT CTA ── */}
            <div className="bg-card border border-divider rounded-2xl px-6 lg:px-10 py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div className="flex-1">
                <p className="text-muted text-[10px] uppercase tracking-[2px] font-medium mb-2">Bereit für den nächsten Schritt?</p>
                <h3 className="text-white text-xl font-bold mb-2">
                  Lassen Sie uns gemeinsam Ihre KI-Transformation starten.
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  Als <span className="text-white font-semibold">{tc.label}</span> haben Sie klares Potenzial.
                  In einem kostenlosen Erstgespräch zeigen wir Ihnen die 3 grössten Quick-Wins für Ihr Unternehmen.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="#"
                  className="inline-block bg-accent text-page font-extrabold text-sm rounded-[7px] px-8 py-4 transition-opacity hover:opacity-90 whitespace-nowrap">
                  Kostenloses Gespräch buchen →
                </a>
              </div>
            </div>

          </div>
        </main>
      )}
    </div>
  )
}
