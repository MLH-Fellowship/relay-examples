import React from 'react'
import Card from './TodoCard';


const TodoList = ({data}) => {

  return (
        <div className="todos">
          {data.map(edge => (
            <Card text={edge.node.text} id={edge.node.id} key={edge.node.id}/>
          ))}
        </div>
    )
}

export default TodoList;
