import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = {
  navn: '',
  epost: '',
  telefon: '',
  'jeg-trenger-hjelp-med': 'Tilbygg',
  melding: '',
}

export default function Contact() {
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
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'kontakt', ...form }),
      })
      if (!response.ok) throw new Error(`Skjemaet ble ikke sendt (${response.status})`)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="bg-coal-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
            Kontakt
          </p>
          <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
            Få et uforpliktende tilbud
          </h2>
          <p className="mt-6 max-w-md text-lg text-chalk-300">
            Fyll ut skjemaet, så tar vi kontakt for en befaring. Vi svarer
            som regel innen én virkedag.
          </p>

          <dl className="mt-10 space-y-4 text-chalk-300">
            <div>
              <dt className="text-sm text-chalk-400">E-post</dt>
              <dd>
                <a href="mailto:post@snekkerbore.no" className="hover:text-chalk-50">
                  post@snekkerbore.no
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-chalk-400">Telefon</dt>
              <dd>
                <a href="tel:+4700000000" className="hover:text-chalk-50">
                  00 00 00 00
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-chalk-400">Dekker</dt>
              <dd>Bergen og omegn</dd>
            </div>
          </dl>
        </div>

        <div className="bg-coal-800 p-8">
          {status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <h3 className="text-2xl font-bold text-chalk-50">Takk for din henvendelse!</h3>
              <p className="mt-3 text-chalk-300">
                Vi har mottatt meldingen din og tar kontakt så snart som mulig.
              </p>
            </div>
          ) : (
            <form
              name="kontakt"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="kontakt" />
              <p className="hidden">
                <label>
                  Ikke fyll ut dette feltet: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="navn" className="block text-sm font-semibold text-chalk-50">
                  Navn
                </label>
                <input
                  id="navn"
                  name="navn"
                  type="text"
                  required
                  value={form.navn}
                  onChange={handleChange}
                  className="mt-1.5 w-full border border-white/15 bg-coal-900 px-4 py-2.5 text-chalk-50 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="epost" className="block text-sm font-semibold text-chalk-50">
                    E-post
                  </label>
                  <input
                    id="epost"
                    name="epost"
                    type="email"
                    required
                    value={form.epost}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-white/15 bg-coal-900 px-4 py-2.5 text-chalk-50 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-semibold text-chalk-50">
                    Telefon
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-white/15 bg-coal-900 px-4 py-2.5 text-chalk-50 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="jeg-trenger-hjelp-med" className="block text-sm font-semibold text-chalk-50">
                  Jeg trenger hjelp med
                </label>
                <select
                  id="jeg-trenger-hjelp-med"
                  name="jeg-trenger-hjelp-med"
                  value={form['jeg-trenger-hjelp-med']}
                  onChange={handleChange}
                  className="mt-1.5 w-full border border-white/15 bg-coal-900 px-4 py-2.5 text-chalk-50 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                >
                  <option>Tilbygg</option>
                  <option>Bad</option>
                  <option>Kjøkken</option>
                  <option>Terrasse</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label htmlFor="melding" className="block text-sm font-semibold text-chalk-50">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={4}
                  required
                  value={form.melding}
                  onChange={handleChange}
                  className="mt-1.5 w-full border border-white/15 bg-coal-900 px-4 py-2.5 text-chalk-50 focus:border-safety-500 focus:ring-1 focus:ring-safety-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-safety-500 px-6 py-3.5 text-sm font-bold text-coal-950 uppercase transition-colors hover:bg-safety-400 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sender...' : 'Send henvendelse'}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-400">Noe gikk galt. Prøv igjen, eller ta kontakt på e-post.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
