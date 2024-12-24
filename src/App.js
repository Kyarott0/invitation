import React from 'react';
import Fireworks from './components/Fireworks';
import ChristmasEnvironment from './components/ChristmasEnvironment';
import Invitation from './components/Invitation';
import './styles/App.css';

const App = () => {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('/christmas-background.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <ChristmasEnvironment />
      <Fireworks />
      <Invitation />
    </div>
  );
};

export default App;
