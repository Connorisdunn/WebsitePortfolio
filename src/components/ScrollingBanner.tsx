import React from 'react';

interface ScrollingBannerProps {
  text: string;
  position: 'top' | 'bottom';
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ text, position }) => {
  return (
    <div className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 bg-black text-white py-2 z-50 overflow-hidden`}>
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium uppercase tracking-wider mx-8">
          {text}
        </span>
        <span className="text-sm font-medium uppercase tracking-wider mx-8">
          {text}
        </span>
        <span className="text-sm font-medium uppercase tracking-wider mx-8">
          {text}
        </span>
        <span className="text-sm font-medium uppercase tracking-wider mx-8">
          {text}
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;