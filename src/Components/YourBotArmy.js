import React from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";
import Card from 'react-bootstrap/Card';

function YourBotArmy({army, onRelease}) {

  function handleClick(id){
    onRelease(id)
  }
  
  const armyMembers = army.map(member => (
    <Card key={member.id} className="bots" style={{ width: '18rem' }}>
      <div onClick={() => handleClick(member.id)}>
        <Card.Img variant="top" src={member.avatar_url}/>
        <p>Name: <span>{member.name}</span></p>
        <p>Class: <span>{member.bot_class}</span></p>
        <p>CatchPhrase: {member.catchphrase}</p>
        <hr/>
        <p><BsFillHeartPulseFill/> {member.health}
        <BsFillLightningChargeFill /> {member.damage}
        <BsShieldShaded /> {member.armor}
        </p>
      </div>
    </Card>
  ))

  
  

  return (
    <>
    <h2>Here is your Army:</h2>
    <div id="bot-army">
      {armyMembers}
    </div>
    <hr className="separator"/>
    </>
    
  )
}

export default YourBotArmy