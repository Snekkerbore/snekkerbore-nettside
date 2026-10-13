import { useEffect, useRef, useState } from 'react'
import ImageBlock from './ImageBlock'
import { loadInstagramEmbedScript } from '../lib/instagramEmbed'

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

// Instagrams embed har en fast minimumsbredde (326px) og kan ikke gjøres
// mindre med CSS alene. I en smal rute ville den derfor rendres for stor og
// bli beskåret av overflow-hidden. Løsningen: la embeden rendres i sin
// naturlige størrelse, mål den faktiske bredden når iframen dukker opp, og
// skaler hele elementet ned proporsjonalt slik at hele videoen blir synlig.
function useFitScale(active) {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)
  const [scale, setScale] = useState(null)

  useEffect(() => {
    if (!active) return undefined
    let cancelled = false
    let tries = 0

    const tryFit = () => {
      const iframe = wrapperRef.current?.querySelector('iframe')
      const container = containerRef.current
      if (!iframe || !container) return false
      const embedWidth = iframe.offsetWidth
      const containerWidth = container.offsetWidth
      if (embedWidth > 0 && containerWidth > 0) {
        setScale(containerWidth / embedWidth)
        return true
      }
      return false
    }

    const interval = setInterval(() => {
      tries += 1
      if (cancelled) return
      if (tryFit() || tries > 40) {
        clearInterval(interval)
        if (tries > 40 && !cancelled) setScale((s) => s ?? 1)
      }
    }, 150)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [active])

  return { containerRef, wrapperRef, scale }
}

// Viser et poster-bilde med avspillingsknapp. Først når noen klikker, lastes
// den ekte Instagram-embeden inn — holder rutenettet raskt selv med flere
// ruter på én side.
export default function ReelTile({ reel, variant }) {
  const [active, setActive] = useState(false)
  const { containerRef, wrapperRef, scale } = useFitScale(active)

  const handleClick = () => {
    setActive(true)
    loadInstagramEmbedScript().then((instgrm) => instgrm?.Embeds.process())
  }

  if (active) {
    return (
      <div ref={containerRef} className="relative aspect-[9/16] w-full overflow-hidden bg-coal-900">
        <div
          ref={wrapperRef}
          className="origin-top-left transition-opacity duration-300"
          style={{ transform: scale ? `scale(${scale})` : undefined, opacity: scale ? 1 : 0 }}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={reel.url}
            data-instgrm-version="14"
            style={{ margin: 0 }}
          >
            <a href={reel.url} target="_blank" rel="noreferrer">
              Se på Instagram
            </a>
          </blockquote>
        </div>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Spill av Reel"
      className="group relative block aspect-[9/16] w-full overflow-hidden"
    >
      {reel.poster ? (
        <img src={reel.poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <ImageBlock variant={variant} className="h-full w-full text-safety-500" />
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70">
          <PlayIcon />
        </span>
      </span>
    </button>
  )
}
