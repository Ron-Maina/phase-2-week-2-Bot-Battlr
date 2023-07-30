import React, {useState, useEffect} from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";
import Card from 'react-bootstrap/Card';

function YourBotArmy({selectedBot, onRelease}) {

  function handleClick(id){
    onRelease(id)
  }

  const army = selectedBot.map(army => (
    <Card key={army.id} className="bots" style={{ width: '18rem' }}>
      <div onClick={() => handleClick(army.id)}>
        <Card.Img variant="top" src={army.avatar_url}/>
        <p>Name: <span>{army.name}</span></p>
        <p>Class: <span>{army.bot_class}</span></p>
        <p>CatchPhrase: {army.catchphrase}</p>
        <hr/>
        <p><BsFillHeartPulseFill/> {army.health}
        <BsFillLightningChargeFill /> {army.damage}
        <BsShieldShaded /> {army.armor}
        </p>
      </div>
    </Card>
  ))

  
  

  return (
    <div>
      <h2>Here is your Army:</h2>
      <div id="bot-army">{army}</div>
    </div>
  )
}

export default YourBotArmy