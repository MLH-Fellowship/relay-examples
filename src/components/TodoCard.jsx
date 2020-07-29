import React from "react";
import './card.css'

function Card() {
    return (
        <div className="card">
          <input className="done" type="checkbox"></input>
          <p className="text">Example todo</p>
          <button className="delete">x</button>
        </div>
    )
}

export default Card;