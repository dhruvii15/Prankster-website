import React, { useState, useEffect, useRef } from 'react';

const AudioVisualizer = ({ currentTime, totalDuration, className }) => {
  const [totalBars, setTotalBars] = useState(36);
  const containerRef = useRef(null);

  // Calculate progress percentage
  const progress = totalDuration ? (currentTime / totalDuration) * 100 : 0;
  
  // Dynamically calculate bars based on container width
  useEffect(() => {
    const calculateBars = () => {
      if (containerRef.current) {
        // Each bar is 2px wide with 6px total width (2px bar + 4px margin)
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedBars = Math.floor(containerWidth / 6);
        
        // Ensure we have a minimum and maximum number of bars
        const newTotalBars = Math.max(16, Math.min(calculatedBars, 64));
        setTotalBars(newTotalBars);
      }
    };

    // Calculate bars on mount and add resize listener
    calculateBars();
    window.addEventListener('resize', calculateBars);

    // Cleanup listener
    return () => window.removeEventListener('resize', calculateBars);
  }, []);

  // Generate bars with random heights
  const generateBars = () => {
    const bars = [];
    for (let i = 0; i < totalBars; i++) {
      const isActive = (i / totalBars) * 100 <= progress;
      // Random height between 15px and 25px for more dynamic appearance
      const height = Math.floor(Math.random() * (25 - 2 + 1)) + 9;
      bars.push(
        <div
          key={i}
          className="d-inline-block rounded transition"         
          style={{
            width: '2px',
            height: `${height}px`,
            transition: 'all 0.01s',
            backgroundColor: isActive ? '#F9E238' : 'white',
            margin: '0px 3px'
          }}
        />
      );
    }
    return bars;
  };

  return (
    <div 
      ref={containerRef}
      className={`py-3 d-flex align-items-center justify-content-start ${className}`}
      style={{
        height: '50px',
        overflow: 'hidden'
      }}
    >
      <div className="d-flex align-items-center">
        {generateBars()}
      </div>
    </div>
  );
};

export default AudioVisualizer;