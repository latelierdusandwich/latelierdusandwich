import React from 'react';

interface PicnicTableIconProps {
  className?: string;
}

const PicnicTableIcon: React.FC<PicnicTableIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Table top - more rectangular and simple */}
      <rect x="3" y="9" width="18" height="1.5" rx="0.5" />
      
      {/* Bench seats - simplified */}
      <rect x="4" y="13" width="16" height="1" rx="0.5" />
      <rect x="4" y="5" width="16" height="1" rx="0.5" />
      
      {/* Support legs - cleaner lines */}
      <line x1="6" y1="10.5" x2="5" y2="17" />
      <line x1="18" y1="10.5" x2="19" y2="17" />
      
      {/* Bench support legs */}
      <line x1="6" y1="13" x2="5" y2="17" />
      <line x1="18" y1="13" x2="19" y2="17" />
      <line x1="6" y1="6" x2="5" y2="3" />
      <line x1="18" y1="6" x2="19" y2="3" />
      
      {/* Central support beam */}
      <line x1="8" y1="10.5" x2="16" y2="10.5" />
    </svg>
  );
};

export default PicnicTableIcon;