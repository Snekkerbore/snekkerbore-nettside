import { pressClips, pressLogos } from '../data/presse'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Presse() {
  if (pressClips.length === 0) return null

  return (
    <section id="presse" className="bg-steel-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-ink-700 uppercase">
            I pressen
          </p>
          <h2 className="mt-4 text-3xl font-black text-ink-950 uppercase sm:text-4xl">
            Omtalt av mediene
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pressClips.map((clip) => (
            <a
              key={clip.url}
              href={clip.url}
              target="_blank"
              rel="noreferrer"
              className="block border border-line bg-steel-50 p-6 transition-colors hover:border-ink-950"
            >
              {pressLogos[clip.publication] ? (
                <img src={pressLogos[clip.publication]} alt={clip.publication} className="h-6 w-auto" />
              ) : (
                <p className="text-xs font-bold tracking-[0.2em] text-ink-700 uppercase">
                  {clip.publication}
                </p>
              )}
              <h3 className="mt-3 text-xl font-bold text-ink-950">{clip.title}</h3>
              <p className="mt-4 text-sm text-ink-500">{formatDate(clip.date)} · Les saken →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
