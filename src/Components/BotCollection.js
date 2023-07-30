import React, {useState, useEffect} from 'react'
import YourBotArmy from './YourBotArmy';
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";

function BotCollection({bots}) {
    
    const[selectedBot, setSelectedBot]= useState([])
    
    function handleClick(id){
        const selected = bots.filter(selected => selected.id === id)
        selected.map(bot => setSelectedBot([...selectedBot, bot]))
        console.log(selectedBot)
          
    }

    const bot = bots.map((bot) => (
        <button key={bot.id} className="bots" onClick={() => handleClick(bot.id)}>
            <img src={bot.avatar_url} alt={bot.name}/>
            <p>Name: {bot.name}</p>
            <p>Class: {bot.bot_class}</p>
            <p>CatchPhrase: {bot.catchphrase}</p>
            <hr/>
            <p><BsFillHeartPulseFill/> {bot.health}
            <BsFillLightningChargeFill />{bot.damage}
            <BsShieldShaded />{bot.armor}
            </p>
        </button>
    ))

    
    return (
        <>
        <YourBotArmy selectedBot={selectedBot}/>
        <hr/>
        {bot}
        </>
       
    )
}

export default BotCollection