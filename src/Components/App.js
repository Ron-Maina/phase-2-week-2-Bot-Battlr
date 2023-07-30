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

  function deleteBot(id){
    const updatedAfterDelete = bots.filter(bot => bot.id !== id)
    setBots(updatedAfterDelete)
  }
 
  return (
    <>
      <BotCollection bots={bots} onDelete={deleteBot}/>
    </>
   
  );
}

export default App;
