import { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { uxLaws } from '../data/caseStudyData'
import SideSheet from './SideSheet'
import BeforeAfterSlider from './BeforeAfterSlider'

function LawTooltip({ law, anchor }) {
  if (!law || !anchor) return null
  return ReactDOM.createPortal(
    <div
      className="tooltip-portal"
      style={{
        left: anchor.x,
        top: anchor.y - 12,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <div className="tooltip-box">
        <strong>{law.name}</strong>
        <div>{law.short}</div>
        <div className="tt-outcome">↗ {law.outcome}</div>
      </div>
    </div>,
    document.body
  )
}

export default function LawMap() {
  const [hovered, setHovered] = useState(null)
  const [anchor, setAnchor] = useState(null)
  const [selected, setSelected] = useState(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!vis) return
    document.querySelectorAll('#story .fade-up').forEach(el => el.classList.add('visible'))
  }, [vis])

  const platformColors = { website: '#0F7AEB', portal: '#6C63FF', dashboard: '#00B894' }
  const platformLabels = { website: 'Acquisition Website', portal: 'Account Portal', dashboard: 'Ambassador Dashboard' }

  const openSheet = (law) => {
    setSelected(law)
    setSheetOpen(true)
  }

  return (
    <section id="story" className="law-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-eyebrow">
            <span className="material-icons-round">psychology</span>
            Behavioral Science Applied
          </div>
          <h2 className="section-title">8 UX Laws. 3 Platforms.<br />One psychology-driven system.</h2>
          <p className="section-lead">
            Every design decision mapped to an established cognitive principle. Hover any law to preview — tap to explore the full application and outcome.
          </p>
        </div>

        <div className="law-map-container fade-up">
          {/* Connection lines SVG */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            preserveAspectRatio="none"
          >
            {uxLaws.flatMap((law, i) =>
              uxLaws.slice(i + 1).filter(l2 => l2.platform.some(p => law.platform.includes(p))).map(l2 => (
                <line
                  key={`${law.id}-${l2.id}`}
                  x1={`${law.x}%`} y1={`${law.y}%`}
                  x2={`${l2.x}%`} y2={`${l2.y}%`}
                  stroke={law.color}
                  strokeWidth="1"
                  strokeOpacity="0.15"
                  strokeDasharray="4 4"
                />
              ))
            )}
          </svg>

          {uxLaws.map((law) => (
            <div
              key={law.id}
              className="law-node"
              style={{ left: `${law.x}%`, top: `${law.y}%` }}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                setHovered(law)
                setAnchor({ x: rect.left + rect.width / 2, y: rect.top })
              }}
              onMouseLeave={() => { setHovered(null); setAnchor(null) }}
              onClick={() => openSheet(law)}
            >
              <div className="law-node-inner">
                <div
                  className="law-dot"
                  style={{ background: law.color }}
                >
                  {law.name.split(' ').map(w => w[0]).join('')}
                </div>
                <span className="law-name-label">{law.name}</span>
              </div>
            </div>
          ))}

          {/* Platform legend overlay */}
          <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {Object.entries(platformColors).map(([k, c]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 600, color: 'var(--ink-80)', background: 'rgba(255,255,255,0.9)', padding: '3px 8px', borderRadius: 100, border: '1px solid var(--ink-12)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                {platformLabels[k]}
              </div>
            ))}
          </div>
        </div>

        {/* Law grid for mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginTop: 24 }}>
          {uxLaws.map(law => (
            <div
              key={law.id}
              onClick={() => openSheet(law)}
              style={{
                padding: '16px',
                borderRadius: 12,
                border: `1.5px solid ${law.color}22`,
                background: `${law.color}06`,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${law.color}12` }}
              onMouseLeave={e => { e.currentTarget.style.background = `${law.color}06` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: law.color }}>{law.name}</div>
                <span className="material-icons-round" style={{ fontSize: 14, color: 'var(--ink-40)' }}>open_in_new</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-80)', lineHeight: 1.5, marginBottom: 8 }}>{law.short}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: law.color }}>↗ {law.outcome}</div>
            </div>
          ))}
        </div>
      </div>

      <LawTooltip law={hovered} anchor={anchor} />

      <SideSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title={selected?.name}
        subtitle="UX Law Applied"
        color={selected?.color}
      >
        {selected && (
          <div>

            {/* 1 — MEASURED OUTCOME — top of sheet */}
            <div style={{ padding: '14px 18px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--ink-12)', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span className="material-icons-round" style={{ color: '#00B894', fontSize: 18 }}>trending_up</span>
              <div>
                <div style={{ fontSize: 10, color: 'var(--ink-40)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 2 }}>Measured Outcome</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#00B894' }}>{selected.outcome}</div>
              </div>
            </div>

            {/* 2 — BEFORE / AFTER SLIDER
                ┌─────────────────────────────────────────────────────────────┐
                │ To update: open src/data/caseStudyData.js                  │
                │ Find this law by id (e.g. id: "hicks") in the uxLaws array │
                │ Set imageBefore: "https://your-url.com/before.jpg"         │
                │ Set imageAfter:  "https://your-url.com/after.jpg"          │
                └─────────────────────────────────────────────────────────────┘ */}
            <div style={{ marginBottom: 16 }}>
              <BeforeAfterSlider
                beforeSrc={selected.imageBefore || ""}
                afterSrc={selected.imageAfter || ""}
                height={200}
              />
            </div>

            {/* 3 — WHAT WE CHANGED */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 8 }}>What We Changed</div>
              <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7, margin: 0 }}>{selected.improvement}</p>
            </div>

            {/* 4 — PLATFORMS APPLIED */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 8 }}>Platforms Applied</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {selected.platform.map(p => {
                  const colors = { website: '#0F7AEB', portal: '#6C63FF', dashboard: '#00B894' }
                  const labels = { website: 'Acquisition Website', portal: 'Account Portal', dashboard: 'Ambassador Dashboard' }
                  return (
                    <span key={p} style={{ fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: `${colors[p]}10`, color: colors[p], border: `1.5px solid ${colors[p]}30` }}>
                      {labels[p]}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* 5 — THE PRINCIPLE — tinted card at bottom */}
            <div style={{ padding: '16px', borderRadius: 12, background: `${selected.color}08`, border: `1px solid ${selected.color}22` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: selected.color, marginBottom: 6 }}>The Principle</div>
              <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7, margin: 0 }}>{selected.description}</p>
            </div>

          </div>
        )}
      </SideSheet>
    </section>
  )
}
