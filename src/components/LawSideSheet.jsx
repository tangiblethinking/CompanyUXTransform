import SideSheet from './SideSheet'

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE URLS FOR THE PLATFORMS SECTION UX LAW SIDE SHEET
//
// File : src/components/LawSideSheet.jsx  (this file)
// How  : Replace the URL string next to each law id with your hosted image URL.
//
//   "hicks"       → line 16   Hick's Law
//   "jakob"       → line 17   Jakob's Law
//   "fitts"       → line 18   Fitts's Law
//   "miller"      → line 19   Miller's Law
//   "tesler"      → line 20   Tesler's Law
//   "pareto"      → line 21   Pareto Principle
//   "vonrestorff" → line 22   Von Restorff Effect
//   "serial"      → line 23   Serial Position Effect
// ─────────────────────────────────────────────────────────────────────────────
const lawImages = {
  hicks:       "",
  jakob:       "",
  fitts:       "",
  miller:      "",
  tesler:      "",
  pareto:      "",
  vonrestorff: "",
  serial:      "",
}

// Checkerboard placeholder — renders when lawImages[id] is empty
// Remove this once you have real URLs
const PLACEHOLDER = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="220"
    style={{ display: 'block' }}
  >
    <defs>
      <pattern id="checker" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="#e2e5ec" />
        <rect x="20" width="20" height="20" fill="#eceef2" />
        <rect y="20" width="20" height="20" fill="#eceef2" />
        <rect x="20" y="20" width="20" height="20" fill="#e2e5ec" />
      </pattern>
    </defs>
    <rect width="100%" height="220" fill="url(#checker)" />
  </svg>
)

export default function LawSideSheet({ law, open, onClose }) {
  if (!law) return null

  const imageUrl = lawImages[law.id]

  return (
    <SideSheet
      open={open}
      onClose={onClose}
      title={law.name}
      subtitle="UX Law"
      color={law.color}
    >
      <div>

        {/* ── IMAGE SLOT — full width at top ───────────────────────────────────
            Replace the empty string for this law in lawImages (lines 16–23)
            with your hosted image URL e.g. "https://cdn.example.com/img.jpg" */}
        <div style={{
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid var(--ink-12)',
          background: 'var(--surface)',
          lineHeight: 0,
          marginBottom: 16,
        }}>
          {imageUrl
            ? <img
                src={imageUrl}
                alt={law.name}
                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            : PLACEHOLDER
          }
        </div>

        {/* Description — plain surface card */}
        <div style={{
          padding: '16px',
          borderRadius: 12,
          background: 'var(--surface)',
          border: '1px solid var(--ink-12)',
          marginBottom: 16,
        }}>
          <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7, margin: 0 }}>
            {law.description}
          </p>
        </div>

        {/* Outcome — light surface card */}
        <div style={{
          padding: '16px 20px',
          borderRadius: 12,
          background: 'var(--surface)',
          border: '1px solid var(--ink-12)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <span className="material-icons-round" style={{ color: '#00B894', fontSize: 20 }}>
            trending_up
          </span>
          <div>
            <div style={{
              fontSize: 11,
              color: 'var(--ink-40)',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: 2,
            }}>
              Outcome
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#00B894' }}>
              {law.outcome}
            </div>
          </div>
        </div>

      </div>
    </SideSheet>
  )
}
