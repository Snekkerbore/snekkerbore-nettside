import ImageBlock from './ImageBlock'

const WHY_CUSTOMERS_CHOOSE_US = [
  'Fast, skriftlig pris før oppstart',
  'Holder avtalte tidsfrister',
  'Rydder opp etter seg hver dag',
  'Svarer raskt på spørsmål underveis',
]

export default function Testimonials() {
  return (
    <section id="omtaler" className="bg-steel-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-ink-700 uppercase">
              Omtaler
            </p>
            <h2 className="mt-4 text-3xl font-black text-ink-950 uppercase sm:text-4xl">
              "Anbefales uten forbehold"
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Vi lever av fornøyde kunder som anbefaler oss videre. Her er
              noe av det kundene våre trekker frem.
            </p>

            <ul className="mt-8 space-y-3">
              {WHY_CUSTOMERS_CHOOSE_US.map((item) => (
                <li key={item} className="flex gap-3 text-ink-700">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-safety-500" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="mt-8 inline-block border-2 border-ink-950 px-7 py-3.5 text-sm font-bold text-ink-950 uppercase transition-colors hover:bg-steel-50"
            >
              Be om referanser
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageBlock variant="flat" className="aspect-[3/4] w-full text-ink-950" />
            <ImageBlock variant="steel" className="mt-8 aspect-[3/4] w-full text-safety-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
