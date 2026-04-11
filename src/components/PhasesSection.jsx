import { useState, useRef, useEffect } from 'react'
import { phases, uxLaws } from '../data/caseStudyData'
import SideSheet from './SideSheet'
import LawSideSheet from './LawSideSheet'

export default function PhasesSection() {
  const [expanded, setExpanded] = useState(null)
  const [phaseSheet, setPhaseSheet] = useState(null)  // opened by "Full phase details"
  const [lawSheet, setLawSheet] = useState(null)      // opened by law chips
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!vis) return
    document.querySelectorAll('#phases .fade-up').forEach(el => el.classList.add('visible'))
  }, [vis])

  const getLaw = (id) => uxLaws.find(l => l.id === id)

  return (
    <section id="phases" className="phases-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-eyebrow">
            <span className="material-icons-round">timeline</span>
            Transformation Journey
          </div>
          <h2 className="section-title">Six phases.<br />One systemic shift.</h2>
          <p className="section-lead">
            A structured, psychology-informed transformation — from zero UX maturity to a research-driven, executive-recognized discipline.
          </p>
        </div>

        <div className="phases-timeline">
          <div className="timeline-line" />
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className="phase-item fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="phase-icon-col">
                <div className="phase-dot" style={{ background: phase.color }}>
                  <span className="material-icons-round">{phase.icon}</span>
                </div>
              </div>

              <div
                className={`phase-body ${expanded === phase.id ? 'expanded' : ''}`}
                onClick={() => setExpanded(expanded === phase.id ? null : phase.id)}
              >
                <div className="phase-header">
                  <div>
                    <div className="phase-label-tag" style={{ color: phase.color }}>{phase.label} · {phase.subtitle}</div>
                    <div className="phase-title">{phase.title}</div>
                    <div className="phase-summary">{phase.summary}</div>
                  </div>
                  <div className="phase-expand-btn">
                    <span className="material-icons-round">expand_more</span>
                  </div>
                </div>

                <div className="phase-detail">
                  <p>{phase.details}</p>
                  <ul className="phase-bullets">
                    {phase.bullets.map((b, i) => (
                      <li key={i} style={{ color: 'var(--ink-80)' }}>
                        <span style={{ color: phase.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Law chips — open LawSideSheet */}
                  <div className="phase-laws-row">
                    {phase.laws.map(lawId => {
                      const law = getLaw(lawId)
                      if (!law) return null
                      return (
                        <span
                          key={lawId}
                          className="phase-law-chip"
                          style={{ background: law.color, cursor: 'pointer' }}
                          onClick={e => { e.stopPropagation(); setLawSheet(law) }}
                        >
                          {law.name}
                        </span>
                      )
                    })}
                  </div>

                  {/* Full phase details — opens phase SideSheet */}
                  <div
                    className="info-cta"
                    onClick={e => { e.stopPropagation(); setPhaseSheet(phase) }}
                  >
                    <span className="material-icons-round">open_in_new</span>
                    Full phase details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LawSideSheet: opened by law chips (image + description + outcome) ── */}
      <LawSideSheet
        law={lawSheet}
        open={!!lawSheet}
        onClose={() => setLawSheet(null)}
      />

      {/* ── Phase SideSheet: opened by "Full phase details" CTA ── */}
      <SideSheet
        open={!!phaseSheet}
        onClose={() => setPhaseSheet(null)}
        title={phaseSheet?.title}
        subtitle={phaseSheet?.subtitle}
        color={phaseSheet?.color}
      >
        {phaseSheet && (
          <div>

            {/* Image Top */}
            {phaseSheet.imageTop && (
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--ink-12)', background: 'var(--surface)', lineHeight: 0, marginBottom: 24 }}>
                <img
                  src={phaseSheet.imageTop}
                  alt={phaseSheet.title}
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Deep Dive */}
            {phaseSheet.details && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>Deep Dive</div>
                <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7 }}>{phaseSheet.details}</p>
              </div>
            )}

            {/* Divider */}
            <hr style={{ border: 'none', borderTop: '1px solid var(--ink-12)', margin: '20px 0' }} />

            {/* Image Bottom */}
            {phaseSheet.imageBottom && (
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--ink-12)', background: 'var(--surface)', lineHeight: 0, marginBottom: 24 }}>
                <img
                  src={phaseSheet.imageBottom}
                  alt={phaseSheet.title}
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Key Deliverables */}
            {phaseSheet.bullets && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>Key Deliverables</div>
                <ul className="phase-bullets">
                  {phaseSheet.bullets.map((b, i) => (
                    <li key={i} style={{ color: 'var(--ink-80)', fontSize: 14, lineHeight: 1.6 }}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}
      </SideSheet>
    </section>
  )
}
