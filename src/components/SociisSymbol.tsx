interface SociisSymbolProps {
  size?: number;
  className?: string;
  faint?: boolean;
  gold?: boolean;
}

const SociisSymbol = ({ size = 40, className = "", faint = false, gold = false }: SociisSymbolProps) => {
  const strokeColor = gold ? "#B8860B" : "currentColor";
  
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main ellipse - organic hand-drawn style */}
      <ellipse
        cx="100"
        cy="70"
        rx="85"
        ry="50"
        stroke={strokeColor}
        strokeWidth={faint ? "1" : "1.5"}
        fill="none"
        opacity={faint ? "0.3" : "1"}
      />
      
      {/* Secondary offset ellipse for organic feel - tilted slightly */}
      <ellipse
        cx="100"
        cy="70"
        rx="90"
        ry="45"
        stroke={strokeColor}
        strokeWidth={faint ? "0.5" : "0.8"}
        fill="none"
        opacity={faint ? "0.15" : "0.4"}
        transform="rotate(-8 100 70)"
      />
      
      {/* Third offset ellipse - tilted other direction */}
      <ellipse
        cx="100"
        cy="70"
        rx="80"
        ry="48"
        stroke={strokeColor}
        strokeWidth={faint ? "0.5" : "0.8"}
        fill="none"
        opacity={faint ? "0.15" : "0.3"}
        transform="rotate(5 100 70)"
      />
      
      {/* Two vertical lines - II - representing 1 | 1 */}
      <line
        x1="90"
        y1="40"
        x2="90"
        y2="100"
        stroke={strokeColor}
        strokeWidth={faint ? "1.5" : "2"}
        opacity={faint ? "0.3" : "1"}
      />
      <line
        x1="110"
        y1="40"
        x2="110"
        y2="100"
        stroke={strokeColor}
        strokeWidth={faint ? "1.5" : "2"}
        opacity={faint ? "0.3" : "1"}
      />
    </svg>
  );
};

export default SociisSymbol;
