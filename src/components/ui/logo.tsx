import * as React from "react"

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg" {...props}>
      <style>
        {`
          /* ===== THEME ADAPTATION ===== */
          .badge-bg { fill: transparent; }
          .word, .dot, .tagline-text { fill: hsl(var(--foreground)); }

          /* ===== ANIMATIONS ===== */
          .badge-bg {
            opacity: 0;
            animation: fadeIn 0.6s ease-out forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }

          .word {
            opacity: 0;
            transform: translateY(15px);
            animation: riseIn 0.8s ease-out 0.3s forwards;
          }
          @keyframes riseIn {
            to { opacity: 1; transform: translateY(0); }
          }

          .dot {
            opacity: 0;
            animation: popIn 0.5s ease-out 0.9s forwards;
          }
          @keyframes popIn {
            from { opacity: 0; transform: scale(0); }
            to   { opacity: 1; transform: scale(1); }
          }

          .tagline {
            opacity: 0;
            animation: fadeIn 0.6s ease-out 1.2s forwards;
          }
        `}
      </style>

      <rect className="badge-bg" x="0" y="0" width="440" height="380" rx="4" />

      <text className="word" x="35" y="185" fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700" fontSize="85" letterSpacing="-2">PRAUHA</text>

      <circle className="dot" cx="405" cy="60" r="11"
              style={{ transformOrigin: '405px 60px' }} />

      <g className="tagline">
        <text className="tagline-text" x="35" y="280" fontFamily="Arial, sans-serif" fontSize="14"
              fontWeight="700" letterSpacing="3">WEB DESIGN STUDIO</text>
        <text className="tagline-text" x="35" y="305" fontFamily="Arial, sans-serif" fontSize="14"
              fontWeight="700" letterSpacing="3">EST. 2026</text>
      </g>
    </svg>
  )
}
