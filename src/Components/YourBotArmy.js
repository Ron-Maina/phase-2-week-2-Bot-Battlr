import React, {useState, useEffect} from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";


function YourBotArmy({selectedBot, onRelease}) {

  function handleClick(id){
    onRelease(id)
  }


  const army = selectedBot.map(army => (
    <button key={army.id} className="bots" onClick={() => handleClick(army.id)}>
      <img src={army.avatar_url}/>
      <p>Name: <span>{army.name}</span></p>
      <p>Class: <span>{army.bot_class}</span></p>
      <p>CatchPhrase: {army.catchphrase}</p>
      <hr/>
      <p><BsFillHeartPulseFill/> {army.health}
      <BsFillLightningChargeFill />{army.damage}
      <BsShieldShaded />{army.armor}
      </p>
    </button>
  ))

  
  

  return (
    <div>
      <h2>Here is your Army:</h2>
      {army}
    </div>
  )
}

export default YourBotArmy