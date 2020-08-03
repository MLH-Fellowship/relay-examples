import React from 'react'
import GetTodos from '../queries/getTodos'
import Card from './TodoCard';


const TodoList = () => {
    return (
        <div className="todos">
          {GetTodos().viewer.todos.edges.map(edge => (
            <Card text={edge.node.text} key={edge.node.id}/>
          ))}
        </div>
    )
}

export default TodoList;
