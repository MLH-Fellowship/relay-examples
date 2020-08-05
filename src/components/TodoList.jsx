import React, {useState} from 'react'
import GetTodos from '../queries/getTodos'
import Card from './TodoCard';


const TodoList = ({view}) => {

  return (
        <div className="todos">
          {GetTodos(view).viewer.todos.edges.map(edge => (
            <Card text={edge.node.text} id={edge.node.id} key={edge.node.id}/>
          ))}
        </div>
    )
}

export default TodoList;
