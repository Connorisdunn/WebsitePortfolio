import React from 'react';

interface DecoXProps {
  className?: string;
}

const DecoX: React.FC<DecoXProps> = ({ className = '' }) => {
  return (
    <span className={`inline-block text-black font-bold ${className}`}>
      ×
    </span>
  );
};

export default DecoX;