import { useRef, useEffect, useState } from 'react'
import SideSheet from './SideSheet'

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE URLS FOR MATURITY STAGE SIDE SHEETS
//
// File : src/components/MaturitySection.jsx  (this file)
//
//   stageImages[0]  → line 14   Level 0: Development-Driven
//   stageImages[1]  → line 15   Level 1: UX Awareness
//   stageImages[2]  → line 16   Level 2: Research-Informed
//   stageImages[3]  → line 17   Level 3: Structured & Proactive
//
// Replace the empty string with your hosted image URL e.g.:
//   "https://cdn.example.com/maturity-0.jpg"
// ─────────────────────────────────────────────────────────────────────────────
const stageImages = {
  0: "",
  1: "",
  2: "",
  3: "",
}

// Checkerboard placeholder — renders when stageImages[num] is empty
const Placeholder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="220" style={{ display: 'block' }}>
    <defs>
      <pattern id="chk" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="#e2e5ec" />
        <rect x="20" width="20" height="20" fill="#eceef2" />
        <rect y="20" width="20" height="20" fill="#eceef2" />
        <rect x="20" y="20" width="20" height="20" fill="#e2e5ec" />
      </pattern>
    </defs>
    <rect width="100%" height="220" fill="url(#chk)" />
  </svg>
)

const stages = [
  {
    num: 0,
    label: "Development-Driven",
    desc: "Engineering and marketing drive product decisions with no UX involvement.",
    fill: 12,
    color: "#E17055",
    detail: "At this stage, the company relied entirely on engineering priorities and marketing requests to drive product changes. There was no formal UX function, no research cadence, and no design system. Product decisions were made based on internal assumptions rather than user behavior.",
    bullets: ["0 UX designers on staff", "No research or usability testing", "No design system or UI standards", "Support volume: >1,000 tickets/week"]
  },
  {
    num: 1,
    label: "UX Awareness",
    desc: "First UX hire made. Discovery begins. Research practices introduced.",
    fill: 35,
    color: "#E17055",
    detail: "The first step was diagnosing the dysfunction. As the first UX hire, I audited all three platforms against established cognitive and behavioral principles — identifying violations of Hick's Law, Jakob's Law, Miller's Law, and more. Research practices were introduced for the first time.",
    bullets: ["First UX audit completed across 3 platforms", "User interviews and journey mapping initiated", "Core UX violations documented and prioritized", "Double Diamond framework introduced to product process"]
  },
  {
    num: 2,
    label: "Research-Informed",
    desc: "Team of 3 UX designers. Design system launched. UX in agile sprints.",
    fill: 62,
    color: "#0F7AEB",
    detail: "With the team built and infrastructure established, UX became embedded in the product development cycle. Funnel analysis, heatmaps, and experimentation frameworks were active. Design system reduced inconsistency across platforms. UX was presenting at sprint planning and leadership reviews.",
    bullets: ["2 additional designers hired; contractor dependency eliminated", "First company design system shipped", "UX embedded in all agile sprint cycles", "Analytics + experimentation framework activated"]
  },
  {
    num: 3,
    label: "Structured & Proactive",
    desc: "Executive recognition. UX moves from CTO → CMO. Business outcomes attributed to UX.",
    fill: 92,
    color: "#00B894",
    detail: "The final stage represents UX as a strategic business discipline. UX moved from IT under the CTO to Digital Experience under the CMO — acknowledging its role as a revenue driver, not a production resource. Executive presentations regularly attributed business performance to UX outcomes.",
    bullets: ["UX function restructured under CMO (Digital Experience)", "Measurable business outcomes attributed to UX investments", "Sustainable product process established over campaign speed", "UX maturity recognized at board level"]
  }
]

function MaturityBar({ stage, animate }) {
  const [sheet, setSheet] = useState(false)
  const imageUrl = stageImages[stage.num]

  return (
    <div className="maturity-stage">
      <div
        className="maturity-stage-num"
        style={{
          background: `${stage.color}15`,
          color: stage.color,
          border: `2px solid ${stage.color}30`
        }}
      >
        {stage.num}
      </div>
      <div className="maturity-stage-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <div>
            <div className="maturity-stage-label" style={{ color: stage.color }}>{stage.label}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-40)', lineHeight: 1.5 }}>{stage.desc}</div>
          </div>
          <button
            onClick={() => setSheet(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-40)', display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, padding: '4px 8px', borderRadius: 6, flexShrink: 0 }}
          >
            <span className="material-icons-round" style={{ fontSize: 14 }}>info</span>
            Details
          </button>
        </div>
        <div className="maturity-track">
          <div
            className="maturity-fill"
            style={{
              background: `linear-gradient(90deg, ${stage.color}80, ${stage.color})`,
              width: animate ? `${stage.fill}%` : '0%'
            }}
          />
        </div>

        <SideSheet
          open={sheet}
          onClose={() => setSheet(false)}
          title={`Level ${stage.num}: ${stage.label}`}
          subtitle="UX Maturity Stage"
          color={stage.color}
        >
          <div>

            {/* State at This Stage — bullets FIRST */}
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>
              State at This Stage
            </div>
            <ul className="phase-bullets" style={{ marginBottom: 20 }}>
              {stage.bullets.map((b, i) => (
                <li key={i} style={{ color: 'var(--ink-80)', fontSize: 14, marginBottom: 6 }}>{b}</li>
              ))}
            </ul>

            {/* ── IMAGE — below bullets ─────────────────────────────────────────
                File : src/components/MaturitySection.jsx
                Find : const stageImages = { ... } at the top of this file
                Edit : replace the "" next to this stage number with your URL
                ──────────────────────────────────────────────────────────────── */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid var(--ink-12)',
              background: 'var(--surface)',
              lineHeight: 0,
              marginBottom: 20,
            }}>
              {imageUrl
                ? <img
                    src={imageUrl}
                    alt={stage.label}
                    style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                : <Placeholder />
              }
            </div>

            {/* Detail text — plain surface card at bottom */}
            <div style={{
              padding: '16px',
              borderRadius: 12,
              background: 'var(--surface)',
              border: '1px solid var(--ink-12)',
            }}>
              <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7, margin: 0 }}>
                {stage.detail}
              </p>
            </div>

          </div>
        </SideSheet>
      </div>
    </div>
  )
}

export default function MaturitySection() {
  const [animate, setAnimate] = useState(false)
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true)
        setTimeout(() => setAnimate(true), 400)
      }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!vis) return
    document.querySelectorAll('#maturity .fade-up').forEach(el => el.classList.add('visible'))
  }, [vis])

  return (
    <section id="maturity" className="maturity-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-eyebrow">
            <span className="material-icons-round">star</span>
            UX Maturity Growth
          </div>
          <h2 className="section-title">From invisible to<br />executive-level strategic asset.</h2>
          <p className="section-lead">
            The organization moved through four measurable stages of UX maturity — from zero design awareness to a structured, proactive discipline with executive sponsorship.
          </p>
        </div>

        <div className="maturity-bar-container fade-up" style={{ transitionDelay: '200ms' }}>
          {stages.map(stage => (
            <MaturityBar key={stage.num} stage={stage} animate={animate} />
          ))}
        </div>

        {/* Impact summary — light surface card matching page 3 target */}
        <div style={{
          marginTop: 56,
          padding: '32px',
          background: 'var(--surface)',
          border: '1px solid var(--ink-12)',
          borderRadius: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24
        }} className="fade-up">
          {[
            { icon: 'person', label: 'UX Team Built', val: '3', sub: 'from 0' },
            { icon: 'psychology', label: 'UX Laws Applied', val: '8', sub: 'across 3 platforms' },
            { icon: 'trending_up', label: 'Revenue Recovery', val: '+2%', sub: 'from –17% YoY' },
            { icon: 'support_agent', label: 'Support Reduced', val: '–92%', sub: '1000+ → <75/wk' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <span className="material-icons-round" style={{ fontSize: 24, color: 'var(--ink-40)', marginBottom: 8, display: 'block' }}>{item.icon}</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#00B894', lineHeight: 1 }}>{item.val}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-80)', marginTop: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-40)', marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
