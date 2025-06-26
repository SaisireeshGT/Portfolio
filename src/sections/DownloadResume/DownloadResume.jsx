import React, { useRef, useState, useEffect } from 'react';
import './DownloadResume.css';

const BottomSheet = () => {
  const sheetRef = useRef(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(window.innerHeight - 100); // Start in closed state
  const [velocity, setVelocity] = useState(0);
  const [dragging, setDragging] = useState(false);
  const snapPoints = [window.innerHeight - 100, window.innerHeight / 2, 100];

  const animateTo = (to) => {
    let position = currentY;
    let velocity = 0;
    const stiffness = 0.1;
    const damping = 0.8;

    const step = () => {
      const displacement = to - position;
      const springForce = stiffness * displacement;
      velocity += springForce;
      velocity *= damping;
      position += velocity;

      setCurrentY(position);

      if (Math.abs(velocity) > 0.1 || Math.abs(to - position) > 0.5) {
        requestAnimationFrame(step);
      } else {
        setCurrentY(to);
      }
    };
    requestAnimationFrame(step);
  };

  const onStart = (e) => {
    setDragging(true);
    setStartY(e.touches ? e.touches[0].clientY : e.clientY);
  };

  const onMove = (e) => {
    if (!dragging) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dy = y - startY;
    const newY = Math.max(0, currentY + dy);
    setCurrentY(newY);
    setStartY(y);
  };

  const onEnd = () => {
    setDragging(false);
    let closest = snapPoints[0];
    let minDist = Math.abs(currentY - snapPoints[0]);
    for (let i = 1; i < snapPoints.length; i++) {
      const dist = Math.abs(currentY - snapPoints[i]);
      if (dist < minDist) {
        minDist = dist;
        closest = snapPoints[i];
      }
    }
    animateTo(closest);
  };

  useEffect(() => {
    const handleTouchMove = (e) => onMove(e);
    const handleTouchEnd = () => onEnd();
    const handleMouseMove = (e) => onMove(e);
    const handleMouseUp = () => onEnd();

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, currentY]);

  return (
    <div
      ref={sheetRef}
      className="bottom-sheet"
      style={{ transform: `translateY(${currentY}px)` }}
      onMouseDown={onStart}
      onTouchStart={onStart}
    >
      <div className="handle"></div>
      <div className="content">
        <h2>Do you like to download resume?</h2>
        <button onClick={() => window.open('/./public/resume.pdf', '_blank')} className="download">Download</button>
        <button className="no">No</button>
      </div>
    </div>
  );
};

export default BottomSheet;
