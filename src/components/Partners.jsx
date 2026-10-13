import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = { firma: '', kontaktperson: '', epost: '', melding: '' }

const POINTS = [
  'Vi tar på oss underentrepriser for byggefirma og eiendomsutviklere',
  'Fast pris eller timepris, avtalt skriftlig',
  'Fleksibel kapasitet ved behov for ekstra mannskap',
  'Vi stiller med egen HMS-dokumentasjon og forsikring',
]

export default function Partners() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'naeringshenvendelse', ...form }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="naering" className="bg-steel-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-ink-700 uppercase">
              Næringskunder
            </p>
            <h2 className="mt-4 text-3xl font-black text-ink-950 uppercase sm:text-4xl">
              Samarbeid med oss
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Er du byggefirma, eiendomsutvikler eller trenger en pålitelig
              underentreprenør? Ta kontakt.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-ink-700">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-safety-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-steel-100 p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <h3 className="text-xl font-bold text-ink-950">Takk for henvendelsen!</h3>
                <p className="mt-3 text-ink-700">Vi tar kontakt så snart vi har sett på forespørselen.</p>
              </div>
            ) : (
              <form
                name="naeringshenvendelse"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="naeringshenvendelse" />
                <p className="hidden">
                  <label>
                    Ikke fyll ut dette feltet: <input name="bot-field" />
                  </label>
                </p>

                <h3 className="text-lg font-bold text-ink-950">Send en forespørsel</h3>

                <div>
                  <label htmlFor="firma" className="block text-sm font-semibold text-ink-950">
                    Firma
                  </label>
                  <input
                    id="firma"
                    name="firma"
                    type="text"
                    required
                    value={form.firma}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-ink-950/15 bg-steel-50 px-4 py-2.5 text-ink-950 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="kontaktperson" className="block text-sm font-semibold text-ink-950">
                    Kontaktperson
                  </label>
                  <input
                    id="kontaktperson"
                    name="kontaktperson"
                    type="text"
                    required
                    value={form.kontaktperson}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-ink-950/15 bg-steel-50 px-4 py-2.5 text-ink-950 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="partner-epost" className="block text-sm font-semibold text-ink-950">
                    E-post
                  </label>
                  <input
                    id="partner-epost"
                    name="epost"
                    type="email"
                    required
                    value={form.epost}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-ink-950/15 bg-steel-50 px-4 py-2.5 text-ink-950 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="partner-melding" className="block text-sm font-semibold text-ink-950">
                    Om prosjektet
                  </label>
                  <textarea
                    id="partner-melding"
                    name="melding"
                    rows={4}
                    required
                    value={form.melding}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-ink-950/15 bg-steel-50 px-4 py-2.5 text-ink-950 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-ink-950 px-6 py-3.5 text-sm font-bold text-safety-500 uppercase transition-colors hover:bg-ink-700 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sender...' : 'Send forespørsel'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-600">Noe gikk galt. Prøv igjen, eller send oss en e-post direkte.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
