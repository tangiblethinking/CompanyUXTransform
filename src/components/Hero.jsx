import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        setParallaxY(window.scrollY * 0.35)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div
        className="hero-bg"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        {/* Dot grid pattern */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0D1117" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="material-icons-round">workspace_premium</span>
          UX Case Study · Entrepreneur E-commerce Platform
        </div>

        <h1 className="hero-headline">
          UX with <em>human psychology</em><br />
          improved user interactions<br />
          which reversed a steady decline.
        </h1>

        <p className="hero-sub">
          Applied behavioral psychology from UX standards across 3 company platforms, and transformed measurable business outcomes — all rooted in established behavorial science.
        </p>

        <div className="hero-tags">
          {[
            { icon: 'person', label: 'First UX Hire' },
            { icon: 'groups', label: 'Team of 3 Built' },
            { icon: 'devices', label: '3 Platforms Redesigned' },
            { icon: 'psychology', label: '8 UX Laws Applied' },
            { icon: 'attach_money', label: '$200–500M Revenue Scale' },
          ].map(t => (
            <span className="tag" key={t.label}>
              <span className="material-icons-round">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>

        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="hero-stat-val">33pts</div>
            <div className="hero-stat-label">Conversion lift</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">–92%</div>
            <div className="hero-stat-label">Support tickets</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">+$$$</div>
            <div className="hero-stat-label">Revenue recovery</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-dot" />
        <div className="scroll-dot" />
        <div className="scroll-dot" />
      </div>
    </section>
  )
}
