import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [rotation, setRotation] = useState({ rotationX: 0, rotationY: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0});


  const handleMouseMove = (event) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
    const rotationX = 4/30 * mouseY - 20;
    const rotationY = -1/5 * mouseX + 20;

    const backgroundPositionX = mouseX / 5;
    const backgroundPositionY = mouseY / 5;
    
    setRotation({rotationX, rotationY});
    setBackgroundPosition({ backgroundPositionX, backgroundPositionY});
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>악인전</p>
        <div className="cardContainer" onMouseMove={handleMouseMove}
              style={{
                transform: `perspective(1000px) rotateX(${rotation.rotationX}deg) rotateY(${rotation.rotationY}deg)`
              }}>
          <div className="overlay" onMouseMove={handleMouseMove} 
               style={{
                backgroundPosition: `${backgroundPosition.backgroundPositionX}px ${backgroundPosition.backgroundPositionY}px`
              }}>
          </div>
          <div className="card" ></div>
        </div>
      </header>
    </div>
  );
}

export default App;
