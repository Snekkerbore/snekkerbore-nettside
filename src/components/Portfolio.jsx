import ImageBlock from './ImageBlock'

const PROJECTS = [
  {
    tag: 'Bad',
    title: 'Totalrenovert bad',
    description: 'Fra 1980-talls våtrom til moderne bad med gulvvarme og nedsenket dusj.',
    variant: 'flat',
  },
  {
    tag: 'Vinduer og dører',
    title: 'Vindu- og dørjobber',
    description: 'Utskifting og montering av vinduer og dører – tett, rett og ferdig listet.',
    image: '/bilder/vindu-ramme.webp',
    variant: 'steel',
  },
  {
    tag: 'Terrasse',
    title: 'Terrasse i Møre Royal',
    description: 'Skjult skrueinnfesting og innebygd belysning langs hele kanten.',
    variant: 'safety',
  },
]

export default function Portfolio() {
  return (
    <section id="prosjekter" className="bg-coal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
              Prosjekter
            </p>
            <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
              Noe av det vi har bygget
            </h2>
            <p className="mt-4 text-lg text-chalk-300">
              Et lite utvalg av prosjekter vi har gjennomført – hvert ett
              dokumentert fra start til slutt.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.title}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <ImageBlock
                  variant={project.variant}
                  className="aspect-[4/5] w-full text-safety-500"
                />
              )}
              <span className="mt-5 inline-block text-xs font-bold tracking-[0.2em] text-chalk-300 uppercase">
                {project.tag}
              </span>
              <h3 className="mt-2 text-xl font-bold text-chalk-50">{project.title}</h3>
              <p className="mt-2 text-chalk-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
