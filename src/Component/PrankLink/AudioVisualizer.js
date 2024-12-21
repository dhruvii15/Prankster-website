import React, { useState, useEffect, useRef } from 'react';

const AudioVisualizer = ({ currentTime, totalDuration, className }) => {
  const [totalBars, setTotalBars] = useState(36);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Dynamically calculate bars based on container width
  useEffect(() => {
    const calculateBars = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedBars = Math.floor(containerWidth / 6);
        const newTotalBars = Math.max(16, Math.min(calculatedBars, 64));
        setTotalBars(newTotalBars);
      }
    };

    calculateBars();
    window.addEventListener('resize', calculateBars);
    return () => window.removeEventListener('resize', calculateBars);
  }, []);

  // Smooth progress update
  useEffect(() => {
    const updateProgress = () => {
      if (totalDuration) {
        const targetProgress = (currentTime / totalDuration) * 100;

        if (targetProgress >= 99.9) {
          // Reset to start
          setProgress(0);
        } else {
          // Smooth interpolation
          setProgress((prevProgress) => {
            const delta = (targetProgress - prevProgress) * 0.1; // Adjust smoothness
            return Math.abs(delta) < 0.01 ? targetProgress : prevProgress + delta;
          });
        }

        // Continue animation
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentTime, totalDuration]);

  // Generate bars based on progress
  const generateBars = () => {
    const bars = [];
    for (let i = 0; i < totalBars; i++) {
      const isActive = (i / totalBars) * 100 <= progress;
      const height = Math.floor(Math.random() * (25 - 2 + 1)) + 9;
      bars.push(
        <div
          key={i}
          className="d-inline-block rounded"
          style={{
            width: '2px',
            height: `${height}px`,
            backgroundColor: isActive ? '#F9E238' : 'white',
            margin: '0px 3px',
            transition: 'all 0.2s ease-out', // Smooth bar transition
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
        overflow: 'hidden',
      }}
    >
      <div className="d-flex align-items-center">{generateBars()}</div>
    </div>
  );
};

export default AudioVisualizer;
