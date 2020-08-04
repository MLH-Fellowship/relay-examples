import React, {useState} from 'react'
import {useMutation} from 'react-relay/hooks'
import {AddTodoMutation} from '../mutations/addTodo'

const AddTodoBar = () => {
    const [curTodo, setCurTodo] = useState('');

    const [addTodo, isPending] = useMutation(AddTodoMutation);
  
    const handleChange = e => {
      setCurTodo(e.target.value)
    }
  
    const handleEnter = e => {
      if (e.keyCode !== 13) {
        return
      }
      e.preventDefault();
      addTodo({
        variables: {
          input: {
            text: curTodo
          }
        },
        onCompleted(data){
          setCurTodo('')
          console.log(data)
        },
        onError: err => {
          console.log(err)
        }
      })
    }

    return(
        <input 
            value={curTodo}
            id="markAllCompleted" 
            onChange={handleChange}
            onKeyDown={handleEnter} 
            placeholder="> what will you do today?" 
            className="bar"
          />
    )
}

export default AddTodoBar;