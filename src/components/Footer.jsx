import Logo from './Logo'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/snekkerbore' },
  { label: 'YouTube', href: 'https://youtube.com/@snekkerbore' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-coal-900 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-end sm:justify-between">
        <Logo className="h-24 self-start" />

        <nav className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-chalk-300 hover:text-chalk-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-chalk-400">
          &copy; {year} Snekkerbore AS. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  )
}
