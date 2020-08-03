import React from "react";
import RemoveButton from './RemoveButton'
import './card.css'

const Card = ({text, id}) => {
  const handleChange = () => {

  }
  
  return (
    <div className="card">
      <input className="done" type="checkbox"></input>
      <input className="text" placeholder="Example todo" value={text} onChange={handleChange} type="text"></input>
      <RemoveButton id={id}/>
    </div>
  )
}

export default Card;