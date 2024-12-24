import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const Fireworks = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const myConfetti = confetti.create(canvasRef.current, { resize: true });

    const interval = setInterval(() => {
      myConfetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 5000,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        ticks: 80,
      });
    }, 500); // Cada 0.5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    ></canvas>
  );
};

export default Fireworks;
