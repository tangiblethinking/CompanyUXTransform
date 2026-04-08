import { useRef, useEffect, useState } from 'react'
import SideSheet from './SideSheet'

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
            <div style={{ padding: '16px', borderRadius: 12, background: `${stage.color}08`, border: `1px solid ${stage.color}22`, marginBottom: 20 }}>
              <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7 }}>{stage.detail}</p>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>State at This Stage</div>
            <ul className="phase-bullets">
              {stage.bullets.map((b, i) => (
                <li key={i} style={{ color: 'var(--ink-80)', fontSize: 14, marginBottom: 6 }}>{b}</li>
              ))}
            </ul>
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

        {/* Impact summary */}
        <div style={{
          marginTop: 56,
          padding: '32px',
          background: 'var(--ink)',
          borderRadius: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24
        }} className="fade-up" style2={{ transitionDelay: '400ms' }}>
          {[
            { icon: 'person', label: 'UX Team Built', val: '3', sub: 'from 0' },
            { icon: 'psychology', label: 'UX Laws Applied', val: '8', sub: 'across 3 platforms' },
            { icon: 'trending_up', label: 'Revenue Recovery', val: '+2%', sub: 'from –17% YoY' },
            { icon: 'support_agent', label: 'Support Reduced', val: '–92%', sub: '1000+ → <75/wk' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <span className="material-icons-round" style={{ fontSize: 24, color: 'rgba(255,255,255,0.3)', marginBottom: 8, display: 'block' }}>{item.icon}</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#00B894', lineHeight: 1 }}>{item.val}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
