import React from "react";
import RemoveButton from './RemoveButton'
import './card.css'

function Card({id, text}) {
    return (
        <div className="card">
          <input className="done" type="checkbox"></input>
          <input className="text" placeholder="Example todo" value={text} type="text"></input>
          <RemoveButton id={id}/>
        </div>
    )
}

export default Card;