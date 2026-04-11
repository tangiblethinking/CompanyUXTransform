import { useState, useRef, useCallback } from 'react'

/**
 * BeforeAfterSlider
 * Drag the center handle left/right to reveal Before vs After images.
 */
export default function BeforeAfterSlider({ beforeSrc, afterSrc, height = 220 }) {
  const [pct, setPct] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef(null)

  const calcPct = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return (x / rect.width) * 100
  }, [])

  // Mouse
  const onMouseDown = (e) => {
    e.preventDefault()
    dragging.current = true
    const onMove = (e) => { if (dragging.current) setPct(calcPct(e.clientX)) }
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  // Touch
  const onTouchStart = (e) => {
    dragging.current = true
    const onMove = (e) => { if (dragging.current) setPct(calcPct(e.touches[0].clientX)) }
    const onEnd = () => { dragging.current = false; window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  const Checker = () => (
    <svg width="100%" height={height} style={{ display: 'block' }}>
      <defs>
        <pattern id="ba-chk" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#e2e5ec" />
          <rect x="20" width="20" height="20" fill="#eceef2" />
          <rect y="20" width="20" height="20" fill="#eceef2" />
          <rect x="20" y="20" width="20" height="20" fill="#e2e5ec" />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill="url(#ba-chk)" />
    </svg>
  )

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--ink-12)',
        background: 'var(--surface)',
        cursor: 'col-resize',
        userSelect: 'none',
      }}
    >
      {/* AFTER image — full width base layer */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {afterSrc
          ? <img src={afterSrc} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <Checker />
        }
      </div>

      {/* BEFORE image — clipped to left of handle */}
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        {beforeSrc
          ? <img src={beforeSrc} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <Checker />
        }
      </div>

      {/* Before chip — shows when handle is right of center (after dominates, pct >= 50) */}
      {pct >= 50 && (
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(13,17,23,0.75)', color: '#fff',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.8px',
          padding: '3px 10px', borderRadius: 100,
        }}>
          Before
        </div>
      )}

      {/* After chip — shows when handle is left of center (before dominates, pct <= 50) */}
      {pct <= 50 && (
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(13,17,23,0.75)', color: '#fff',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.8px',
          padding: '3px 10px', borderRadius: 100,
        }}>
          After
        </div>
      )}

      {/* Divider line */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${pct}%`,
        width: 2,
        background: '#fff',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 8px rgba(0,0,0,0.3)',
      }} />

      {/* Drag handle */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          position: 'absolute',
          top: '50%', left: `${pct}%`,
          transform: 'translate(-50%, -50%)',
          width: 40, height: 40,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'col-resize',
          zIndex: 2,
        }}
      >
        {/* Arrows left/right */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6L3 10L7 14" stroke="#0D1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 6L17 10L13 14" stroke="#0D1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
