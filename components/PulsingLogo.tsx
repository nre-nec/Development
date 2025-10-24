
import React from 'react';

export const PulsingLogo: React.FC<{ className?: string; color?: string }> = ({ className, color = "white" }) => {
  // An ECG path with a clear heartbeat spike
  const ecgPath = "M-5 50 H35 L45 60 L55 30 L65 70 L75 40 L85 50 H125";
  const pathLength = 250; // A safe, oversized value for the path length

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 120 100" // Adjusted viewBox to fit the path
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={ecgPath}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          className="animate-draw-line"
        />
      </svg>
    </div>
  );
};
