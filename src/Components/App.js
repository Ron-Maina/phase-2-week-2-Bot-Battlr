import './App.css';
import BotCollection from "./BotCollection";
import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import BotSpecs from './BotSpecs';
import YourBotArmy from './YourBotArmy';

function App() {

  const [bots, setBots] = useState([])
  const [botDetails, setBotDetails] = useState([])

  const [army, setArmy] =useState([])
  const[enlistedId, setEnlistedId]= useState([])

  useEffect(() => {
    fetch('http://localhost:3001/bots')
    .then(res => res.json())
    .then(data => setBots(data))
  }, [])

  function deleteBot(id){
    const updatedAfterDelete = bots.filter(bot => bot.id !== id)
    setBots(updatedAfterDelete)
  }

  function renderDetails(id){
    const selected = bots.filter(selected => selected.id === id)
    setBotDetails(selected)
  }
  
  function enlistBot(id){
    const enlisted = bots.filter(bot => bot.id === id)
    enlisted.map(bot => {
          if (enlistedId.includes(bot.id)){
              return null
          } else{
              setEnlistedId([...enlistedId, id])
              setArmy([...army,bot])
          }
      })   
  }

  function releaseBotFromArmy(id){
    const filteredArray = army.filter(bot => bot.id !== id)
    const filteredID = enlistedId.filter(ID => ID !== id)
    setEnlistedId(filteredID)
    setArmy(filteredArray)
  }

  return (
    <>
      <YourBotArmy army={army} onRelease={releaseBotFromArmy}/>
      <Routes>
        <Route path="/" element={<BotCollection bots={bots} onDelete={deleteBot} onRenderDetails={renderDetails} onRelease={releaseBotFromArmy}/>}/>
        <Route path="/specs" element={<BotSpecs botDetails={botDetails} onEnlist={enlistBot}/>} />
      </Routes>
    </>
   
  );
}

export default App;
