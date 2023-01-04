import React,{useState,useEffect} from "react"
import './App.css';
// import ArttırAzalt from './function'

function App() {
  
 
  
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   document.title=`You clicked ${count} times`
  // },[count])
  const [timer, setTimer] = useState(60)
  useEffect(() => {
    if (timer !== 0) {
      const interval = setInterval(() => {
      setTimer(timer - 1)
      }, 1000);
      return()=>clearInterval(interval)
    }
    
    
  })
  
  return (
    <div className="App">
      <div style={{height:"250px",width:"250px",backgroundColor:"#CBEDD5",borderRadius:"50%",color:"black",fontSize:"60px",margin:"10px auto",lineHeight:"250px",fontWeight:"bold"}}>{timer}
      
      </div>
      
      
      {/* <p> You clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>Click me</button>
      <ArttırAzalt/> */}
    </div>
  );
}

export default App;
