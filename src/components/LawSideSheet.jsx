import SideSheet from './SideSheet'

/**
 * LawSideSheet — dedicated side sheet for UX Law detail view
 * used exclusively in PlatformsSection.
 *
 * IMAGE URLS — update them in src/data/caseStudyData.js → uxLaws array.
 * Each law object has one field used here:
 *   platformSheetImage: "https://your-url.com/image.jpg"
 *
 * Layout (top → bottom):
 *   1. Image       — full-width, above all text
 *   2. Description — plain surface card
 *   3. Outcome     — light surface card
 */
export default function LawSideSheet({ law, open, onClose }) {
  if (!law) return null

  return (
    <SideSheet
      open={open}
      onClose={onClose}
      title={law.name}
      subtitle="UX Law"
      color={law.color}
    >
      <div>

        {/* ── IMAGE ─────────────────────────────────────────────────────────────
            File : src/data/caseStudyData.js
            Array: uxLaws
            Field: platformSheetImage
            Find the law by its id (e.g. id: "jakob") and replace the URL value.
            ──────────────────────────────────────────────────────────────────── */}
        {law.platformSheetImage && (
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid var(--ink-12)',
            background: 'var(--surface)',
            lineHeight: 0,
            marginBottom: 16,
          }}>
            <img
              src={law.platformSheetImage}
              alt={`${law.name} example`}
              style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Description — plain surface card, no colour tint */}
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
