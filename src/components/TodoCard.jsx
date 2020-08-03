import React from "react";
import './card.css'

const Card = ({text}) => {
  const handleChange = () => {

  }
  
    return (
        <div className="card">
          <input className="done" type="checkbox"></input>
          <input className="text" placeholder="Example todo" value={text} onChange={handleChange} type="text"></input>
          <button className="delete">x</button>
        </div>
    )
}

export default Card;