import { useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function SideSheet({ open, onClose, title, subtitle, color, children }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <div className={`overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`side-sheet ${open ? 'open' : ''}`}>
        <div className="side-sheet-header">
          <div>
            {subtitle && (
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: color || '#0F7AEB', marginBottom: 6 }}>
                {subtitle}
              </div>
            )}
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.3px', color: 'var(--ink)' }}>
              {title}
            </div>
          </div>
          <button className="side-sheet-close" onClick={onClose}>
            <span className="material-icons-round">close</span>
          </button>
        </div>
        <div className="side-sheet-body">{children}</div>
      </aside>
    </>,
    document.body
  )
}
