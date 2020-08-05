import React, {useState} from "react";
import { useMutation } from 'react-relay/hooks';
import RemoveButton from './RemoveButton';
import {changeTodoStatusMutation} from '../mutations/changeTodoStatus';
import './card.css'

const Card = ({text, id, status}) => {

  const [curStatus, setCurStatus] = useState(status);
  const [changeTodoStatus, isPending] = useMutation(changeTodoStatusMutation);

  const handleStatusChange = () => {
    changeTodoStatus({
      variables: {
        TodoID: {
          id: id,
          complete: !curStatus
        }
      },
      onCompleted: data => {
        console.log('ChangeTodoStatus', data);
        setCurStatus(() => {
          return !curStatus
        })
      },
      onError: err => {
        console.log(err)
      }
    })
  }

  const handleChange = () => {

  }
  
  return (
    <div className="card">
      <input className="status" type="checkbox" checked={curStatus} onChange={handleStatusChange}></input>
      <input className={curStatus?"text text-done":"text text-not-done"} placeholder="Example todo" value={text} onChange={handleChange} type="text"></input>
      <RemoveButton id={id}/>
    </div>
  )
}

export default Card;