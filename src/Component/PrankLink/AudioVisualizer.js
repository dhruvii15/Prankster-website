import React from 'react';

const AudioVisualizer = ({ currentTime, totalDuration, className }) => {
  // Calculate progress percentage
  const progress = totalDuration ? (currentTime / totalDuration) * 100 : 0;
  
  // Number of bars in the visualizer
  const totalBars = 45;
  
  // Generate bars with random heights up to 25px
  const generateBars = () => {
    const bars = [];
    for (let i = 0; i < totalBars; i++) {
      const isActive = (i / totalBars) * 100 <= progress;
      // Random height between 15px and 25px for more dynamic appearance
      const height = Math.floor(Math.random() * (25 - 2 + 1)) + 10;
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
    <div className={`pt-3 d-flex align-items-center justify-content-center ${className}`} style={{ height: '50px' }}>
      <div className="d-flex align-items-center">
        {generateBars()}
      </div>
    </div>
  );
};

export default AudioVisualizer;