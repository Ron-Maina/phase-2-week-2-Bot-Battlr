import './App.css';
import BotCollection from "./BotCollection";
import React, {useEffect, useState} from 'react'

function App() {

  const [bots, setBots] = useState([])
 


  useEffect(() => {
    fetch('http://localhost:3001/bots')
    .then(res => res.json())
    .then(data => setBots(data))
  }, [])

 
 
  return (
    <>
      <BotCollection bots={bots}/>
    </>
   
  );
}

export default App;
