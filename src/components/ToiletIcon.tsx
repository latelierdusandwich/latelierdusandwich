import React from 'react';

interface ToiletIconProps {
  className?: string;
}

const ToiletIcon: React.FC<ToiletIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Male figure */}
      <g>
        {/* Head */}
        <circle cx="6" cy="3.5" r="1.8" />
        {/* Body */}
        <rect x="4.5" y="6" width="3" height="6" rx="0.5" />
        {/* Arms */}
        <rect x="2" y="7.5" width="1.5" height="3" rx="0.75" />
        <rect x="8.5" y="7.5" width="1.5" height="3" rx="0.75" />
        {/* Legs */}
        <rect x="4.5" y="12" width="1.2" height="6.5" rx="0.6" />
        <rect x="6.3" y="12" width="1.2" height="6.5" rx="0.6" />
      </g>

      {/* Separator line */}
      <rect x="11.5" y="1.5" width="1" height="19" rx="0.5" />

      {/* Female figure */}
      <g>
        {/* Head */}
        <circle cx="18" cy="3.5" r="1.8" />
        {/* Body/Dress */}
        <path d="M18 6c-1.8 0-2.8 0.8-2.8 1.5v3.5c0 0.5 0.3 1 0.8 1.5l-0.5 1v4.5c0 0.3 0.2 0.5 0.6 0.5s0.6-0.2 0.6-0.5v-4.5h2.6v4.5c0 0.3 0.2 0.5 0.6 0.5s0.6-0.2 0.6-0.5v-4.5l-0.5-1c0.5-0.5 0.8-1 0.8-1.5V7.5c0-0.7-1-1.5-2.8-1.5z" />
        {/* Arms */}
        <rect x="14" y="7.5" width="1.5" height="3" rx="0.75" />
        <rect x="20.5" y="7.5" width="1.5" height="3" rx="0.75" />
      </g>
    </svg>
  );
};

export default ToiletIcon;