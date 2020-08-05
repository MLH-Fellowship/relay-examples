import React, {useState} from "react";
import { useMutation } from 'react-relay/hooks';
import {updateTodoMutation} from '../mutations/updateTodo'
import RemoveButton from './RemoveButton'
import './card.css'

const Card = ({text, id}) => {
  const [curTodo, setCurTodo] = useState(text);
  const [updateTodo, isPending] = useMutation(updateTodoMutation);

  const todoUpdater = (newText) => {
    updateTodo({
      variables: {
        TodoID: {
          id: id,
          text: newText
        },
      },
      onCompleted: data => {
        console.log(data)
      },
      onError: err => console.log(err),
    });
  }

  const handleChange = e => {
    setCurTodo(e.target.value)
  }

  const handleBlur = e => {
    e.preventDefault()
    todoUpdater(curTodo)
  }

  const handleEnter = e => {
    if (e.keyCode !== 13) {
      return
    }
    e.preventDefault();
    todoUpdater(curTodo)
  }
  
  return (
    <div className="card">
      <input className="done" type="checkbox"></input>
      <input className="text" 
        placeholder="Example todo" 
        value={curTodo} 
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnter}
        type="text"/>
      <RemoveButton id={id}/>
    </div>
  )
}

export default Card;