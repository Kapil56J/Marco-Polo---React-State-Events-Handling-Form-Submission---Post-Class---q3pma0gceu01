import {React,useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [alternate,setAlternate]=useState(false);
  const ChangeHandler=()=>{
    if(alternate===false){
      setAlternate(true)
  }
    else{
      setAlternate(false)
    }
  }
  
  return (
    <div id="main">
    <h1 id="'marco-polo'">{alternate ? "Polo" : "Marco"}</h1>
    <button id="marco-polo-toggler" onClick="ChangeHandler">{alternate ? "Marco" : "Polo"}</button>
    </div>
  )
}


export default App;
