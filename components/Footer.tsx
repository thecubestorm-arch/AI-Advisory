import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-page border-t border-divider px-6 lg:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-cream font-bold text-[16px] mb-2">
            alpine<span className="text-accent">.</span>boost
          </p>
          <p className="text-muted text-xs uppercase tracking-widest font-medium mb-2">
            KI-Operator für den Mittelstand
          </p>
          <p className="text-body text-sm max-w-xs leading-relaxed">
            AI ist kein Nice-to-have. Es ist dein grösster Hebel.
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="/impressum" className="text-muted text-sm hover:text-body transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-muted text-sm hover:text-body transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-divider">
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} alpine.boost · alpineboost.ch · Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
