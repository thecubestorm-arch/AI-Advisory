import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-page border-b border-divider">
      <div className="flex items-center px-6 lg:px-20 h-16">
        <Link href="/" className="text-cream font-bold text-[16px] tracking-tight">
          alpine<span className="text-accent">.</span>boost
        </Link>
      </div>
    </nav>
  )
}
