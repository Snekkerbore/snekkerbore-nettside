import Logo from './Logo'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/snekkerbore' },
  { label: 'YouTube', href: 'https://youtube.com/@snekkerbore' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-steel-50 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-end sm:justify-between">
        <Logo />

        <nav className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-ink-700 hover:text-ink-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-ink-500">
          &copy; {year} Snekkerbore AS. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  )
}
