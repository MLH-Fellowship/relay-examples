import React from 'react'

import Card from './TodoCard';

const TodoList = ({todos}) => {

    return (
        <div className="todos">
          {todos.viewer.todos.edges.map(edge => (
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
