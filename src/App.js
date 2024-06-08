import { useEffect, useState } from 'react';
import Login from './Login';

function App() {
  // const [message, setMessage] = useState("")   

  // useEffect(()=>{
  //     fetch("/test")      
  //       .then(res => res.text())      
  //       .then(m=>setMessage(m))  
  //     }, [])

  // return (
  //   <div>
  //         {message}
  //   </div>
  // );
  return (
    <div><Login /></div>
  )
}

export default App;
