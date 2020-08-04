import React from 'react'
import GetTodos from '../queries/getTodos'
import Card from './TodoCard';


const TodoList = () => {
  console.log(GetTodos())
    return (
        <div className="todos">
          {GetTodos().viewer.todos.edges.map(edge => (
            <Card 
              text={edge.node.text} 
              status={edge.node.complete} 
              id={edge.node.id} 
              key={edge.node.id}/>
          ))}
        </div>
    )
}

export default TodoList;
