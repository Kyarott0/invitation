import React from 'react';
import '../styles/ChristmasEnvironment.css';

const Snowflake = ({ style }) => <div className="snow" style={style}></div>;

const ChristmasEnvironment = () => {
  const snowflakes = Array.from({ length: 50 }).map(() => ({
    left: `${Math.random() * 100}vw`, // Posición horizontal aleatoria
    animationDuration: `${Math.random() * 5 + 5}s`, // Duración aleatoria (5-10s)
    animationDelay: `${Math.random() * 5}s`, // Retardo aleatorio
  }));

  return (
    <div className="christmas-environment">
      {snowflakes.map((style, index) => (
        <Snowflake key={index} style={style} />
      ))}
    </div>
  );
};

export default ChristmasEnvironment;