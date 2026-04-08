import { useEffect, useRef, useState } from 'react'
import { metrics } from '../data/caseStudyData'

function useCounter(target, duration = 1500, start = false, from = 0) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    if (!start) return
    const startTime = Date.now()
    const range = target - from
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(from + range * ease))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [start])
  return val
}

function MetricCard({ metric, delay }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setStarted(true), delay) } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  const toVal = useCounter(metric.to, 1400, started, metric.from)

  const isImproving = metric.to > metric.from
    ? true
    : (metric.label.includes('Cancel') || metric.label.includes('Ticket') || metric.label.includes('Load') || metric.label.includes('Time'))
      ? true : false

  const arrowLabel = metric.to > metric.from ? `+${metric.to - metric.from}${metric.unit}` : `${metric.to - metric.from}${metric.unit}`
  const arrowClass = metric.to < metric.from && (metric.label.includes('Ticket') || metric.label.includes('Load') || metric.label.includes('Time') || metric.label.includes('Cancel'))
    ? 'down-good' : metric.to > metric.from ? 'up' : 'up'

  return (
    <div ref={ref} className="metric-card fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <div className="metric-icon-row">
        <div className="metric-icon" style={{ background: metric.color }}>
          <span className="material-icons-round">{metric.icon}</span>
        </div>
        <span className={`metric-arrow ${arrowClass}`}>
          {metric.label.includes('Cancel') || metric.label.includes('Ticket') || metric.label.includes('Load') || metric.label.includes('Time')
            ? '↓ improved' : '↑ improved'}
        </span>
      </div>
      <div className="metric-val-row">
        <span className="metric-from">
          {metric.prefix || ''}{Math.abs(metric.from)}{metric.unit}
        </span>
        <span className="metric-to" style={{ color: metric.color }}>
          {metric.toPrefix || ''}{started ? toVal : metric.from}{metric.unit}
        </span>
      </div>
      <div className="metric-label">{metric.label}</div>
    </div>
  )
}

export default function MetricsSection() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!vis) return
    document.querySelectorAll('#impact .fade-up').forEach(el => el.classList.add('visible'))
  }, [vis])

  return (
    <section id="impact" className="metrics-section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-eyebrow">
            <span className="material-icons-round">trending_up</span>
            Measurable Outcomes
          </div>
          <h2 className="section-title">Results that moved<br />the business.</h2>
          <p className="section-lead">
            Every metric below maps directly to a psychological principle applied to a specific platform. Numbers don't lie — and neither does behavioral science.
          </p>
        </div>
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
