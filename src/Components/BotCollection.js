import React, {useState, useEffect} from 'react'
import YourBotArmy from './YourBotArmy';
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BotCollection({bots, onDelete}) {
    
    const[selectedBot, setSelectedBot]= useState([])
    const[selectedID, setSelectedID] = useState([])


    function releaseBotFromArmy(id){
        const filteredArray = selectedBot.filter(bot => bot.id !== id)
        const filteredID = selectedID.filter(ID => ID !== id)
        setSelectedID(filteredID)
        setSelectedBot(filteredArray)
    }

    function handleAddToArmy(id){
        const selected = bots.filter(selected => selected.id === id)
        selected.map(bot => {
            if (selectedID.includes(bot.id)){
                return null
            } else{
                setSelectedID([...selectedID, id])
                setSelectedBot([...selectedBot,bot])
            }
        })   
    }

    function handleDeleteBot(id){
        fetch(`http://localhost:3001/bots/${id}`, {
            method: "DELETE"
        })
        onDelete(id)
        releaseBotFromArmy(id)
    }

    const bot = bots.map((bot) => (
        <Card key={bot.id} className="bots" style={{ width: '18rem' }}>
            <div onClick={() => handleAddToArmy(bot.id)}>
                <Card.Img variant="top" src={bot.avatar_url} alt={bot.name}/>
                <p>Name: <span>{bot.name}</span></p>
                <p>Class: <span>{bot.bot_class}</span></p>
                <p>CatchPhrase: {bot.catchphrase}</p>
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
        <YourBotArmy selectedBot={selectedBot} onRelease={releaseBotFromArmy}/>
        <hr id="separator"/>
        <div id="bot-collection">{bot}</div>
        </div>
       
    )
}

export default BotCollection