import React from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function BotSpecs({botDetails, onEnlist}) {

  const navigate = useNavigate()

  function handleEnlist(id){
    onEnlist(id)
    navigate('/', {replace: true})
  }

  function goBack(){
    navigate('/', {replace: true})
  }


  const option = botDetails.map(option => (
    <div key={option.id} id="bot-details">
      <div><img id="rounded" src={option.avatar_url} alt={option.name}/></div>
      <div>
        <Card className="bots" style={{ width: '18rem' }}>
          <div>
            <p>Name: <span>{option.name}</span></p>
            <p>Class: <span>{option.bot_class}</span></p>
            <p>CatchPhrase: {option.catchphrase}</p>
            <hr/>
            <p><BsFillHeartPulseFill/>{option.health}
            <BsFillLightningChargeFill />{option.damage}
            <BsShieldShaded />{option.armor}
            </p>
          </div>
        </Card>
        <div className="d-grid gap-2">
          <Button variant="secondary" onClick={() => handleEnlist(option.id)}>Enlist</Button>
          <Button variant="secondary"onClick={goBack}>Go Back</Button>
        </div>
      </div>
    </div> 
  ))


  return (
    <div>
      {option}
    </div>
  )
}

export default BotSpecs