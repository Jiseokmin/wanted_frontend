import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [rotation, setRotation] = useState({ rotationX: 0, rotationY: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
    const rotationX = 4/30 * mouseY - 20;
    const rotationY = -1/5 * mouseX + 20;
    
    setRotation({rotationX, rotationY});
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>악인전</p>
        <div className="appImage" 
             onMouseMove={handleMouseMove}
             style={{
               transform: `perspective(1000px) rotateX(${rotation.rotationX}deg) rotateY(${rotation.rotationY}deg)`
             }}>
          </div>
      </header>
    </div>
  );
}

export default App;
