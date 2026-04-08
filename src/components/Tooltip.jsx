import { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Tooltip({ children, content, title, outcome }) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMouseEnter = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 8
    })
    setVisible(true)
  }

  return (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setVisible(false)}
      style={{ position: 'relative', display: 'inline-flex' }}
    >
      {children}
      {visible && ReactDOM.createPortal(
        <div
          className="tooltip-portal"
          style={{
            left: pos.x,
            top: pos.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="tooltip-box">
            {title && <strong>{title}</strong>}
            {content}
            {outcome && <div className="tt-outcome">↗ {outcome}</div>}
          </div>
        </div>,
        document.body
      )}
    </span>
  )
}
