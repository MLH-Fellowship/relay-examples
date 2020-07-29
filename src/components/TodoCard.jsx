import React from "react";
import './card.css'

function Card() {
    return (
        <div className="card">
          <input className="done" type="checkbox"></input>
          <input className="text" placeholder="Example todo" type="text"></input>
          <button className="delete">x</button>
        </div>
    )
}

export default Card;