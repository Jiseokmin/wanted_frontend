import { useEffect, useState } from 'react';
import './App.css';
//import Login from './Login';

function App() {
  const [rotation, setRotation] = useState({ rotationX: 0, rotationY: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ position: 0});

  const handleMouseMove = (event) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
    const rotationX = 4/30 * mouseY - 20;
    const rotationY = -1/5 * mouseX + 20;

    const backgroundPosition = mouseX / 5 + mouseY / 5 ;
    
    setRotation({rotationX, rotationY});
    setBackgroundPosition({ backgroundPosition});
  };

  const handleMouseOut = () => {
    setRotation({rotationX: 0,rotationY: 0});
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>악인전</p>
        <div className="cardContainer" onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
              style={{
                transform: `perspective(1000px) rotateX(${rotation.rotationX}deg) rotateY(${rotation.rotationY}deg)`
              }}>
          <div className="overlay" onMouseMove={handleMouseMove} 
               style={{
                backgroundPosition: `${backgroundPosition.backgroundPosition}%`
              }}>
          </div>
          <div className="card" ></div>
        </div>
      </header>
    </div>
  );
}

export default App;
