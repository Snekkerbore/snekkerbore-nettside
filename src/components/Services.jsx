const SERVICES = [
  'Tilbygg og påbygg',
  'Bad – fra riving til ferdig flislagt',
  'Kjøkken og innredning',
  'Terrasser og utendørs bygg',
  'Dører, vinduer og listverk',
  'Generelt vedlikehold og reparasjoner',
]

const HOW_WE_WORK = [
  'Fast pris eller timepris – avtalt skriftlig før oppstart',
  'Én fast kontaktperson gjennom hele prosjektet',
  'Bilder og statusoppdateringer underveis',
  'Ryddig byggeplass hver eneste dag',
  'Garanti på alt utført arbeid',
  'Forsikret og godkjent for ansvarsrett',
]

const PERSONALITY = ['Punktlige', 'Nøyaktige', 'Ryddige', 'Ærlige på pris', 'Lett å få tak i']

export default function Services() {
  return (
    <section id="tjenester" className="bg-coal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
              Tjenester
            </p>
            <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
              Det vi tar på oss
            </h2>
            <ul className="mt-8 space-y-3">
              {SERVICES.map((item) => (
                <li key={item} className="flex gap-3 text-chalk-300">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-safety-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
              Sånn jobber vi
            </p>
            <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
              Ingen overraskelser
            </h2>
            <ul className="mt-8 space-y-3">
              {HOW_WE_WORK.map((item) => (
                <li key={item} className="flex gap-3 text-chalk-300">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-safety-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <p className="mb-5 text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
            Hvem du møter
          </p>
          <div className="flex flex-wrap gap-3">
            {PERSONALITY.map((trait) => (
              <span
                key={trait}
                className="border border-line bg-coal-900 px-4 py-2 text-sm font-semibold text-chalk-300"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
