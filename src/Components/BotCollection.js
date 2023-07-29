import React, {useEffect} from 'react'
import { BsFillHeartPulseFill, BsFillLightningChargeFill, BsShieldShaded} from "react-icons/bs";

function BotCollection({bots}) {
    console.log(bots)
  return (
    bots.map((bot) => (
        <div key={bot.id} className="bots">
            <img src={bot.avatar_url}/>
            <p>Name: {bot.name}</p>
            <p>Class: {bot.bot_class}</p>
            <p>CatchPhrase: {bot.catchphrase}</p>
            <hr/>
            <p><BsFillHeartPulseFill/> {bot.health}
            <BsFillLightningChargeFill />{bot.damage}
            <BsShieldShaded />{bot.armor}
            </p>
        </div>
    ))
   
  )
}

export default BotCollection