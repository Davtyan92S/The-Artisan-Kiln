import type { PaletteTileSvgProps } from './types'

export const PaletteTileSvg = ({ pattern, size, className }: PaletteTileSvgProps) => {
  const sized = size != null
  return (
    <div
      className={className}
      style={sized ? { width: size, height: size } : undefined}
    >
      <svg
        width={sized ? size : '100%'}
        height={sized ? size : '100%'}
        viewBox="0 0 60 60"
        preserveAspectRatio="xMidYMid meet"
      >
        {pattern === 'wave' && (
          <>
            <rect width="60" height="60" fill="#404868" />
            <path d="M-2 12 Q8 6 18 12 Q28 18 38 12 Q48 6 62 12" fill="none" stroke="#e8f0f8" strokeWidth="4" strokeLinecap="round" />
            <path d="M-2 24 Q8 18 18 24 Q28 30 38 24 Q48 18 62 24" fill="none" stroke="#e8f0f8" strokeWidth="4" strokeLinecap="round" />
            <path d="M-2 36 Q8 30 18 36 Q28 42 38 36 Q48 30 62 36" fill="none" stroke="#e8f0f8" strokeWidth="4" strokeLinecap="round" />
            <path d="M-2 48 Q8 42 18 48 Q28 54 38 48 Q48 42 62 48" fill="none" stroke="#e8f0f8" strokeWidth="4" strokeLinecap="round" />
          </>
        )}

        {pattern === 'fern' && (
          <>
            <rect width="60" height="60" fill="#406058" />
            <path d="M30 55 Q10 40 8 20 Q18 28 30 55" fill="#588078" />
            <path d="M30 55 Q50 40 52 20 Q42 28 30 55" fill="#588078" />
            <line x1="30" y1="58" x2="30" y2="8" stroke="#507870" strokeWidth="2" />
            <path d="M30 40 Q18 36 14 30" fill="none" stroke="#6b8e6f" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 40 Q42 36 46 30" fill="none" stroke="#6b8e6f" strokeWidth="2" strokeLinecap="round" />
          </>
        )}

        {pattern === 'dot' && (
          <>
            <rect width="60" height="60" fill="#f2e8d8" />
            <circle cx="30" cy="30" r="9" fill="#b07050" />
            <circle cx="12" cy="12" r="7" fill="#b07050" />
            <circle cx="48" cy="12" r="7" fill="#b07050" />
            <circle cx="12" cy="48" r="7" fill="#b07050" />
            <circle cx="48" cy="48" r="7" fill="#b07050" />
          </>
        )}

        {pattern === 'star' && (
          <>
            <rect width="60" height="60" fill="#e8d898" />
            <polygon points="30,14 32,22 40,22 34,27 36,35 30,30 24,35 26,27 20,22 28,22" fill="#d0a040" />
            <polygon points="12,6 13,11 18,11 14,14 15,20 12,16 9,20 10,14 6,11 11,11" fill="#c09040" />
            <polygon points="48,6 49,11 54,11 50,14 51,20 48,16 45,20 46,14 42,11 47,11" fill="#c09040" />
            <polygon points="12,44 13,49 18,49 14,52 15,58 12,54 9,58 10,52 6,49 11,49" fill="#c09040" />
            <polygon points="48,44 49,49 54,49 50,52 51,58 48,54 45,58 46,52 42,49 47,49" fill="#c09040" />
          </>
        )}

        {pattern === 'diamond' && (
          <>
            <rect width="60" height="60" fill="#404868" />
            <polygon points="30,8 52,30 30,52 8,30" fill="#faf7e8" opacity="0.15" />
            <polygon points="30,14 46,30 30,46 14,30" fill="none" stroke="#e8f0f8" strokeWidth="2" />
            <polygon points="30,22 38,30 30,38 22,30" fill="#e8f0f8" />
          </>
        )}

        {pattern === 'herringbone' && (
          <>
            <rect width="60" height="60" fill="#406058" />
            {[0, 12, 24, 36, 48].map((y) => (
              <g key={y}>
                <path d={`M0 ${y + 6} L12 ${y} L24 ${y + 6}`} fill="none" stroke="#588078" strokeWidth="2.5" />
                <path d={`M24 ${y + 6} L36 ${y} L48 ${y + 6}`} fill="none" stroke="#6b8e6f" strokeWidth="2.5" />
                <path d={`M48 ${y + 6} L60 ${y} L72 ${y + 6}`} fill="none" stroke="#588078" strokeWidth="2.5" />
              </g>
            ))}
          </>
        )}

        {pattern === 'floral' && (
          <>
            <rect width="60" height="60" fill="#f2e8d8" />
            <circle cx="30" cy="30" r="6" fill="#b07050" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse
                key={deg}
                cx="30"
                cy="18"
                rx="5"
                ry="9"
                fill="#b86048"
                transform={`rotate(${deg} 30 30)`}
              />
            ))}
          </>
        )}

        {pattern === 'bird' && (
          <>
            <rect width="60" height="60" fill="#588078" />
            <ellipse cx="28" cy="32" rx="12" ry="9" fill="#406058" />
            <circle cx="36" cy="26" r="5" fill="#f2e8d8" />
            <circle cx="38" cy="25" r="1.5" fill="#1c180d" />
            <path d="M40 28 L52 24 L48 32 Z" fill="#d0a040" />
            <path d="M18 34 Q24 42 30 38" fill="none" stroke="#6b8e6f" strokeWidth="2" />
          </>
        )}

        {pattern === 'corner-navy' && (
          <>
            <rect width="60" height="60" fill="#faf7e8" />
            <path d="M0 0 L28 0 Q0 0 0 28 Z" fill="#404868" />
            <path d="M60 60 L32 60 Q60 60 60 32 Z" fill="#404868" />
            <circle cx="44" cy="16" r="4" fill="#b07050" opacity="0.7" />
          </>
        )}

        {pattern === 'corner-terra' && (
          <>
            <rect width="60" height="60" fill="#f2e8d8" />
            <path d="M60 0 L32 0 Q60 0 60 28 Z" fill="#b07050" />
            <path d="M0 60 L28 60 Q0 60 0 32 Z" fill="#b07050" />
            <path d="M8 8 L20 8 L14 20 Z" fill="#404868" opacity="0.5" />
          </>
        )}

        {pattern === 'starburst' && (
          <>
            <rect width="60" height="60" fill="#e8d898" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <polygon
                key={deg}
                points="30,30 30,6 34,30"
                fill="#d0a040"
                transform={`rotate(${deg} 30 30)`}
              />
            ))}
            <circle cx="30" cy="30" r="7" fill="#c09040" />
          </>
        )}

        {pattern === 'vine' && (
          <>
            <rect width="60" height="60" fill="#406058" />
            <path d="M8 50 Q20 30 30 35 Q40 40 52 15" fill="none" stroke="#6b8e6f" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="22" cy="28" rx="7" ry="4" fill="#588078" transform="rotate(-30 22 28)" />
            <ellipse cx="38" cy="22" rx="6" ry="3.5" fill="#6b8e6f" transform="rotate(25 38 22)" />
            <ellipse cx="46" cy="38" rx="5" ry="3" fill="#588078" transform="rotate(-15 46 38)" />
          </>
        )}
      </svg>
    </div>
  )
}
