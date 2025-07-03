// src/components/VantaBackground.jsx
import { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        // ✅ Visually pleasing and smoother feel
        color: 0x64ffda,
        backgroundColor: 0x0a192f,
        points: 6.0,
        maxDistance: 30.0,
        spacing: 22.0,

        // ✅ Performance & appearance
        showDots: true,
        mouseEase: true,
        minDistance: 10.0
      });
    }

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }} />;
};

export default VantaBackground;
