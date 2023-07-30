import React from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function BotCollection({bots, onDelete, onRenderDetails, onRelease}) {

    const navigate = useNavigate()
    
    function viewDetails(id){
        onRenderDetails(id)
        navigate('/specs', {replace: true})
    }

    function handleDeleteBot(id){
        fetch(`http://localhost:3001/bots/${id}`, {
            method: "DELETE"
        })
        onDelete(id)
        onRelease(id)
    }

    const bot = bots.map((bot) => (
        <Card key={bot.id} className="bots" style={{ width: '18rem' }}>
            <div onClick={() => viewDetails(bot.id)}>
                <Card.Img variant="top" src={bot.avatar_url} alt={bot.name}/>
                <p><span>{bot.name}</span></p>
                <p><span>{bot.bot_class}</span></p>
                <p>{bot.catchphrase}</p>
                <hr/>
                <p><BsFillHeartPulseFill/> {bot.health}
                <BsFillLightningChargeFill />{bot.damage}
                <BsShieldShaded />{bot.armor}
                </p>    
            </div>
            <div className='button'>
                <Button variant="danger" onClick={() => handleDeleteBot(bot.id)}>X</Button>
            </div>
        </Card>    
    ))

    
    return (
        <div id="content">
            <div id="bot-collection">{bot}</div>
        </div>
       
    )
}

export default BotCollection