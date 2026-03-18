export default function ProofBar() {
  const items = [
    { text: 'Bereits', highlight: '100+ Unternehmen', suffix: 'analysiert' },
    { text: '',         highlight: 'Ø 6h/Woche',       suffix: 'eingespart' },
    { text: 'Für',      highlight: 'KMUs & Mittelstand', suffix: '' },
  ]

  return (
    <div className="bg-proof border-b border-divider px-6 lg:px-20 py-5">
      <div className="flex flex-wrap items-center gap-6 md:gap-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && (
              <div className="hidden md:block w-px h-4 bg-divider mx-10" />
            )}
            <span className="text-muted text-xs">
              {item.text && <>{item.text} </>}
              <strong className="text-body font-semibold">{item.highlight}</strong>
              {item.suffix && <> {item.suffix}</>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
