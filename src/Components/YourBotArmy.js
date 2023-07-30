import React, {useState, useEffect} from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";


function YourBotArmy({selectedBot}) {
  const army = selectedBot.map(army => (
    <button key={army.id} className="bots">
      <img src={army.avatar_url}/>
      <p>Name: {army.name}</p>
      <p>Class: {army.bot_class}</p>
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