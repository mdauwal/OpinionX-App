import React, { useState, useEffect } from 'react';
import Card from './Card'; 



const App = () => {

  const [color, setColor] = useState('orange');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: color, textAlign: "center" }}>Feedback App</h1>
      <Card />
    </div>
  );
};

export default App;
