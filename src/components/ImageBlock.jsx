export default function ImageBlock({ className = '', variant = 'steel' }) {
  const variants = {
    steel: 'from-coal-950 via-coal-700 to-coal-950',
    safety: 'from-safety-600 via-safety-500 to-safety-400',
    flat: 'from-coal-700 via-coal-800 to-coal-700',
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
