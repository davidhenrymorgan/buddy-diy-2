import React from 'react';

interface BuddysDIYLogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'color' | 'white' | 'black';
}

export const BuddysDIYLogo: React.FC<BuddysDIYLogoProps> = ({
  className = '',
  width,
  height,
  variant = 'color'
}) => {
  const colors = {
    color: '#D32F2F',
    white: '#FFFFFF',
    black: '#000000'
  };

  const fillColor = colors[variant];
  const strokeColor = fillColor;
  const knockoutColor = variant === 'white' ? '#000000' : '#FFFFFF';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 360"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-label="Buddy's DIY Logo"
    >
      {/* Border Frame */}
      <rect
        x="10"
        y="10"
        width="580"
        height="340"
        stroke={strokeColor}
        strokeWidth="10"
        fill="none"
      />

      {/* BUDDY'S Text */}
      <text
        x="300"
        y="130"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="75"
        fill={fillColor}
        textAnchor="middle"
        letterSpacing="4"
      >
        BUDDY&apos;S
      </text>

      {/* DIY Group */}
      <g id="diy-logo">
        {/* D Letter */}
        <path
          d="M 120 180 L 220 180 C 270 180 295 210 295 245 C 295 280 270 310 220 310 L 120 310 Z M 155 210 L 155 280 L 215 280 C 250 280 265 265 265 245 C 265 225 250 210 215 210 Z"
          fill={fillColor}
        />

        {/* Wrench Icon (knockout) */}
        <rect
          x="205"
          y="225"
          width="14"
          height="48"
          rx="2"
          fill={knockoutColor}
        />
        <rect
          x="202"
          y="222"
          width="20"
          height="10"
          rx="2"
          fill={knockoutColor}
        />

        {/* I Letter */}
        <rect
          x="320"
          y="180"
          width="35"
          height="130"
          fill={fillColor}
        />

        {/* Y Letter */}
        <path
          d="M 380 180 L 425 180 L 460 235 L 495 180 L 540 180 L 480 265 L 480 310 L 440 310 L 440 265 Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
