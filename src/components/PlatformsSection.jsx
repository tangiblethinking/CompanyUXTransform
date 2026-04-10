import { useState, useRef, useEffect } from 'react'
import { platforms, uxLaws } from '../data/caseStudyData'
import SideSheet from './SideSheet'
import LawSideSheet from './LawSideSheet'

export default function PlatformsSection() {
  const [activeTab, setActiveTab] = useState('website')
  const [platformSheet, setPlatformSheet] = useState(null)
  const [lawSheet, setLawSheet] = useState(null)
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!vis) return
    document.querySelectorAll('#platforms .fade-up').forEach(el => el.classList.add('visible'))
  }, [vis])

  const getLaw = (id) => uxLaws.find(l => l.id === id)

  return (
    <section id="platforms" className="platforms-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-eyebrow">
            <span className="material-icons-round">devices</span>
            Platform Transformations
          </div>
          <h2 className="section-title">Before vs. After.<br />The evidence.</h2>
          <p className="section-lead">
            Three distinct digital ecosystems, each with unique user jobs-to-be-done, each transformed with targeted psychological principles.
          </p>
        </div>

        <div className="platform-tabs fade-up">
          {platforms.map(p => (
            <button
              key={p.id}
              className={`platform-tab ${activeTab === p.id ? 'active' : ''}`}
              style={activeTab === p.id ? { background: p.color } : {}}
              onClick={() => setActiveTab(p.id)}
            >
              <span className="material-icons-round">{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>

        {platforms.map(platform => (
          <div key={platform.id} className={`platform-panel ${activeTab === platform.id ? 'active' : ''}`}>
            <div className="platform-role-badge">
              <span className="material-icons-round" style={{ fontSize: 14 }}>info</span>
              {platform.role}
            </div>

            <div className="ba-container">
              {/* Before */}
              <div className="ba-card before-card">
                <div className="ba-label before">
                  <span className="material-icons-round" style={{ fontSize: 16 }}>cancel</span>
                  Before
                </div>
                <div className="ba-metric before">{platform.before.metric}</div>
                <ul className="ba-list">
                  {platform.before.problems.map((p, i) => (
                    <li key={i}>
                      <span className="material-icons-round" style={{ color: '#E17055' }}>remove_circle</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="ba-card after-card">
                <div className="ba-label after">
                  <span className="material-icons-round" style={{ fontSize: 16 }}>check_circle</span>
                  After
                </div>
                <div className="ba-metric after">{platform.after.metric}</div>
                <ul className="ba-list">
                  {platform.after.improvements.map((p, i) => (
                    <li key={i}>
                      <span className="material-icons-round" style={{ color: '#00B894' }}>check_circle</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Laws applied — opens dedicated LawSideSheet */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>
                UX Laws Applied
              </div>
              <div className="platform-laws">
                {platform.laws.map(lawId => {
                  const law = getLaw(lawId)
                  if (!law) return null
                  return (
                    <span
                      key={lawId}
                      className="platform-law-chip"
                      style={{ color: law.color, borderColor: `${law.color}40`, cursor: 'pointer' }}
                      onClick={() => setLawSheet(law)}
                    >
                      {law.name}
                    </span>
                  )
                })}
              </div>
            </div>

            <div
              className="platform-impact-badge"
              style={{ background: `${platform.color}10`, color: platform.color }}
            >
              <span className="material-icons-round">trending_up</span>
              {platform.impact}
              <span
                className="info-cta"
                style={{ marginTop: 0 }}
                onClick={() => setPlatformSheet(platform)}
              >
                <span className="material-icons-round">open_in_new</span>
                Full breakdown
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Dedicated law side sheet (image + description + outcome) ── */}
      <LawSideSheet
        law={lawSheet}
        open={!!lawSheet}
        onClose={() => setLawSheet(null)}
      />

      {/* ── Platform detail side sheet (before/after breakdown) ── */}
      <SideSheet
        open={!!platformSheet}
        onClose={() => setPlatformSheet(null)}
        title={platformSheet?.label}
        subtitle="Platform Details"
        color={platformSheet?.color}
      >
        {platformSheet && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#E17055', marginBottom: 10 }}>Before State</div>
              <ul className="ba-list">
                {platformSheet.before.problems.map((p, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>
                    <span className="material-icons-round" style={{ color: '#E17055', fontSize: 14 }}>remove_circle</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-80)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#00B894', marginBottom: 10 }}>After State</div>
              <ul className="ba-list">
                {platformSheet.after.improvements.map((p, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>
                    <span className="material-icons-round" style={{ color: '#00B894', fontSize: 14 }}>check_circle</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-80)' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '16px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--ink-12)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="material-icons-round" style={{ color: '#00B894', fontSize: 20 }}>trending_up</span>
              <div>
                <div style={{ fontSize: 11, color: 'var(--ink-40)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 2 }}>Net Impact</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#00B894' }}>{platformSheet.impact}</div>
              </div>
            </div>
          </div>
        )}
      </SideSheet>
    </section>
  )
}
