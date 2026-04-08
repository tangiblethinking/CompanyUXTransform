import { useState, useEffect } from 'react'

const sections = [
  { id: 'impact', label: 'Impact', icon: 'trending_up' },
  { id: 'story', label: 'UX Laws', icon: 'psychology' },
  { id: 'phases', label: 'Phases', icon: 'timeline' },
  { id: 'platforms', label: 'Platforms', icon: 'devices' },
  { id: 'maturity', label: 'Growth', icon: 'star' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0)

      const offsets = sections.map(s => ({
        id: s.id,
        top: document.getElementById(s.id)?.getBoundingClientRect().top ?? 9999
      }))
      const current = offsets.filter(o => o.top <= 120).pop()
      setActive(current?.id || '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <div id="progress-bar" style={{ width: `${scrollPct}%` }} />
      <nav>
        <a className="nav-logo" href="#hero">Christopher Kaye</a>
        <ul className="nav-links">
          {sections.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(s.id) }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span className="material-icons-round">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? 'active' : ''}
            onClick={e => { e.preventDefault(); scrollTo(s.id) }}
          >
            <span className="material-icons-round">{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>
    </>
  )
}
