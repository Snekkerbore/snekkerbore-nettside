import ImageBlock from './ImageBlock'

export default function OurStory() {
  return (
    <section id="om-oss" className="bg-steel-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <ImageBlock
          variant="flat"
          className="aspect-[4/5] w-full text-ink-950 lg:order-2"
        />

        <div className="lg:order-1">
          <p className="text-sm font-bold tracking-[0.2em] text-ink-700 uppercase">
            Om oss
          </p>
          <h2 className="mt-4 text-3xl font-black text-ink-950 uppercase sm:text-4xl">
            Håndverkere, ikke selgere
          </h2>

          <div className="mt-6 space-y-5 text-lg text-ink-700">
            <p>
              Snekkerbore AS ble startet fordi vi var lei av snarveier og
              dårlig håndverk. Vi tar imot et begrenset antall prosjekter om
              gangen, slik at vi faktisk rekker å gjøre jobben skikkelig —
              fra første befaring til siste strøk maling.
            </p>
            <p>
              Vi dokumenterer prosjektene våre åpent, slik at du vet nøyaktig
              hva du får før du skriver under på noe.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-safety-500 pl-6 text-xl font-semibold text-ink-950">
            "Vi leverer ikke noe vi ikke selv ville godtatt i eget hus."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
