import React, {useState, useEffect} from "react";
import { useMutation } from 'react-relay/hooks';
import RemoveButton from './RemoveButton';
import {changeTodoStatusMutation} from '../mutations/changeTodoStatus';
import './card.css'

const Card = ({text, id, status}) => {
  const [curStatus, setCurStatus] = useState(status);
  const [curTodo, setCurTodo] = useState(text);
  const [updateTodo, isPending] = useMutation(updateTodoMutation);
  const [changeTodoStatus, isPending] = useMutation(changeTodoStatusMutation);

  useEffect(() => {
    setCurStatus(status)
  }, [status]);

  const handleStatusChange = () => {
    changeTodoStatus({
      variables: {
        TodoID: {
          id: id,
          complete: !curStatus
        }
      },
      onCompleted: data => {
        setCurStatus(!curStatus)
      },
      onError: err => {
        console.log(err)
      }
    })
  }

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
      <input className="status" type="checkbox" checked={curStatus} onChange={handleStatusChange} />
      <input className={curStatus?"text text-done":"text text-not-done"} 
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