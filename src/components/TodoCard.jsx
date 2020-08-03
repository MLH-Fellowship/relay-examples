import React from "react";
import './card.css'

function Card({text}) {
    return (
        <div className="card">
          <input className="done" type="checkbox"></input>
          <input className="text" placeholder="Example todo" value={text} type="text"></input>
          <button className="delete">x</button>
        </div>
    )
}

export default Card;