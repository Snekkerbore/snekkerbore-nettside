const WHY_CUSTOMERS_CHOOSE_US = [
  'Fast, skriftlig pris før oppstart',
  'Holder avtalte tidsfrister',
  'Rydder opp etter seg hver dag',
  'Svarer raskt på spørsmål underveis',
]

export default function Testimonials() {
  return (
    <section id="omtaler" className="bg-coal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
              Omtaler
            </p>
            <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
              "Anbefales uten forbehold"
            </h2>
            <p className="mt-6 text-lg text-chalk-300">
              Vi lever av fornøyde kunder som anbefaler oss videre. Her er
              noe av det kundene våre trekker frem.
            </p>

            <ul className="mt-8 space-y-3">
              {WHY_CUSTOMERS_CHOOSE_US.map((item) => (
                <li key={item} className="flex gap-3 text-chalk-300">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-safety-500" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="mt-8 inline-block border-2 border-chalk-50 px-7 py-3.5 text-sm font-bold text-chalk-50 uppercase transition-colors hover:bg-coal-900"
            >
              Be om referanser
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/bilder/kledning-smil.webp"
              alt="Montering av kledning"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-[50%_40%]"
            />
            <img
              src="/bilder/tak-montering.webp"
              alt="Arbeid på tak og fasade"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
