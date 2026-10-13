export default function ImageBlock({ className = '', variant = 'steel' }) {
  const variants = {
    steel: 'from-ink-950/80 via-ink-700 to-ink-950',
    safety: 'from-safety-600 via-safety-500 to-safety-400',
    flat: 'from-steel-200 via-steel-100 to-steel-200',
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${variants[variant]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 10px)',
        }}
      />
    </div>
  )
}
