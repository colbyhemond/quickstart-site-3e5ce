'use client'
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = window.scrollY;
        const percentage = (scrolled / scrollHeight) * 100;
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calculate initial value on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-secondary h-1 sticky top-0 left-0 z-50 transition-all delay-0 duration-300" style={{width: `${scrollPercentage}%`}}
    />
  );
};

export default ScrollProgress;