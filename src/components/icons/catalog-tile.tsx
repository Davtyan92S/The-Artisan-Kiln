import type { TileSvgProps } from './types'

export const TileSvg = ({ pattern, size = 60, className }: TileSvgProps) => {
  const s = size
  return (
    <div className={className} style={{ width: s, height: s }}>
      <svg width={s} height={s} viewBox="0 0 60 60">
        {pattern === 'wave' && (
          <>
            <rect width="60" height="60" fill="#404868" />
            <path d="M-2 8 Q8 2 18 8 Q28 14 38 8 Q48 2 62 8" fill="none" stroke="#e8f0f8" strokeWidth="5" strokeLinecap="round" />
            <path d="M-2 18 Q8 12 18 18 Q28 24 38 18 Q48 12 62 18" fill="none" stroke="#e8f0f8" strokeWidth="5" strokeLinecap="round" />
            <path d="M-2 28 Q8 22 18 28 Q28 34 38 28 Q48 22 62 28" fill="none" stroke="#e8f0f8" strokeWidth="5" strokeLinecap="round" />
            <path d="M-2 38 Q8 32 18 38 Q28 44 38 38 Q48 32 62 38" fill="none" stroke="#e8f0f8" strokeWidth="5" strokeLinecap="round" />
            <path d="M-2 48 Q8 42 18 48 Q28 54 38 48 Q48 42 62 48" fill="none" stroke="#e8f0f8" strokeWidth="5" strokeLinecap="round" />
            <path d="M-2 58 Q8 52 18 58 Q28 64 38 58 Q48 52 62 58" fill="none" stroke="#e8f0f8" strokeWidth="5" strokeLinecap="round" />
          </>
        )}

        {pattern === 'fern' && (
          <>
            <rect width="60" height="60" fill="#406058" />
            <path d="M30 55 Q10 40 8 20 Q18 28 30 55" fill="#588078" />
            <path d="M30 55 Q10 40 8 20 Q18 28 30 55" fill="none" stroke="#507870" strokeWidth="1" />
            <path d="M30 55 Q50 40 52 20 Q42 28 30 55" fill="#588078" />
            <path d="M30 55 Q50 40 52 20 Q42 28 30 55" fill="none" stroke="#507870" strokeWidth="1" />
            <line x1="30" y1="58" x2="30" y2="8" stroke="#507870" strokeWidth="2.5" />
            <path d="M30 46 Q18 42 14 36" fill="none" stroke="#6b8e6f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 38 Q20 34 16 28" fill="none" stroke="#6b8e6f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 30 Q22 26 19 20" fill="none" stroke="#6b8e6f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 22 Q24 18 22 13" fill="none" stroke="#6b8e6f" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 46 Q42 42 46 36" fill="none" stroke="#6b8e6f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 38 Q40 34 44 28" fill="none" stroke="#6b8e6f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 30 Q38 26 41 20" fill="none" stroke="#6b8e6f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 22 Q36 18 38 13" fill="none" stroke="#6b8e6f" strokeWidth="2" strokeLinecap="round" />
          </>
        )}

        {pattern === 'dot' && (
          <>
            <rect width="60" height="60" fill="#f2e8d8" />
            <circle cx="30" cy="30" r="9" fill="#b07050" />
            <circle cx="12" cy="12" r="8" fill="#b07050" />
            <circle cx="48" cy="12" r="8" fill="#b07050" />
            <circle cx="12" cy="48" r="8" fill="#b07050" />
            <circle cx="48" cy="48" r="8" fill="#b07050" />
            <circle cx="30" cy="10" r="6" fill="#b86048" />
            <circle cx="10" cy="30" r="6" fill="#b86048" />
            <circle cx="50" cy="30" r="6" fill="#b86048" />
            <circle cx="30" cy="50" r="6" fill="#b86048" />
          </>
        )}

        {pattern === 'star' && (
          <>
            <rect width="60" height="60" fill="#e8d898" />
            <polygon points="30,16 32,24 40,24 34,29 36,38 30,32 24,38 26,29 20,24 28,24" fill="#d0a040" />
            <polygon points="30,14 31,22 39,22 34,27 36,35 30,30 24,35 26,27 21,22 29,22" fill="#c09040" />
            <polygon points="12,5 13,10 18,10 14,13 15,19 12,15 9,19 10,13 6,10 11,10" fill="#d0a040" />
            <polygon points="48,5 49,10 54,10 50,13 51,19 48,15 45,19 46,13 42,10 47,10" fill="#d0a040" />
            <polygon points="12,42 13,47 18,47 14,50 15,56 12,52 9,56 10,50 6,47 11,47" fill="#d0a040" />
            <polygon points="48,42 49,47 54,47 50,50 51,56 48,52 45,56 46,50 42,47 47,47" fill="#d0a040" />
          </>
        )}
      </svg>
    </div>
  )
}
