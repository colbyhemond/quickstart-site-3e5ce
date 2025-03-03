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

  return (<>
    <div className='sticky top-0 z-50'>
        <div className="bg-secondary sticky top-0 h-1 z-50 transition-all delay-0 duration-300" style={{width: `${scrollPercentage}%`}}/>
        <div className="bg-base-100 absolute top-0 h-1 z-40 transition-all delay-0 duration-300" style={{width: `100%`}}/>
    </div>
  </>);
};

export default ScrollProgress;