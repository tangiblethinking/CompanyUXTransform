import { useState, useRef, useEffect } from 'react'
import { phases, uxLaws } from '../data/caseStudyData'
import SideSheet from './SideSheet'

export default function PhasesSection() {
  const [expanded, setExpanded] = useState(null)
  const [sheet, setSheet] = useState(null)
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
                {/* Mobile label */}
                <div className="phase-mobile-label" style={{ display: 'none' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: phase.color }}>{phase.label}</span>
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
                  <div className="phase-laws-row">
                    {phase.laws.map(lawId => {
                      const law = getLaw(lawId)
                      if (!law) return null
                      return (
                        <span
                          key={lawId}
                          className="phase-law-chip"
                          style={{ background: law.color, cursor: 'pointer' }}
                          onClick={e => { e.stopPropagation(); setSheet(law) }}
                        >
                          {law.name}
                        </span>
                      )
                    })}
                  </div>
                  <div
                    className="info-cta"
                    onClick={e => { e.stopPropagation(); setSheet(phases.find(p => p.id === phase.id)) }}
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

      <SideSheet
        open={!!sheet}
        onClose={() => setSheet(null)}
        title={sheet?.name || sheet?.title}
        subtitle={sheet?.subtitle || 'UX Law'}
        color={sheet?.color}
      >
        {sheet && (
          <div>

            {/* ── IMAGE TOP — very first element, above all text ────────────────────
                To update: set imageTop for this phase in src/data/caseStudyData.js */}
            {sheet.imageTop && (
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--ink-12)', background: 'var(--surface)', lineHeight: 0, marginBottom: 24 }}>
                <img
                  src={sheet.imageTop}
                  alt={`${sheet.title} — overview`}
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Deep Dive */}
            {sheet.details && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>Deep Dive</div>
                <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7 }}>{sheet.details}</p>
              </div>
            )}

            {/* UX Law content (when sheet is a law, not a phase) */}
            {sheet.description && (
              <div style={{ padding: '16px', borderRadius: 12, background: `${sheet.color}08`, border: `1px solid ${sheet.color}22`, marginBottom: 20 }}>
                <p style={{ fontSize: 14, color: 'var(--ink-80)', lineHeight: 1.7 }}>{sheet.description}</p>
              </div>
            )}

            {/* Divider between text block and second image */}
            {(sheet.imageTop || sheet.details) && sheet.imageBottom && (
              <hr style={{ border: 'none', borderTop: '1px solid var(--ink-12)', margin: '20px 0' }} />
            )}

            {/* ── IMAGE BOTTOM — below Deep Dive, above Key Deliverables ───────────
                To update: set imageBottom for this phase in src/data/caseStudyData.js */}
            {sheet.imageBottom && (
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--ink-12)', background: 'var(--surface)', lineHeight: 0, marginBottom: 24 }}>
                <img
                  src={sheet.imageBottom}
                  alt={`${sheet.title} — detail`}
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Key Deliverables */}
            {sheet.bullets && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 10 }}>Key Deliverables</div>
                <ul className="phase-bullets">
                  {sheet.bullets.map((b, i) => (
                    <li key={i} style={{ color: 'var(--ink-80)', fontSize: 14, lineHeight: 1.6 }}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* UX Law outcome (when sheet is a law) */}
            {sheet.improvement && (
              <div style={{ padding: '16px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--ink-12)', marginTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="material-icons-round" style={{ color: '#00B894', fontSize: 20 }}>trending_up</span>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--ink-40)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 2 }}>Outcome</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#00B894' }}>{sheet.outcome}</div>
                </div>
              </div>
            )}

          </div>
        )}
      </SideSheet>
    </section>
  )
}
