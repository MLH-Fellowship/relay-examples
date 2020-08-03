import React, { useState } from "react";
import "./App.css";
import Card from './components/TodoCard';
import GetTodos from './queries/getTodos';

const todoList = [
  {
    id: 1,
    text: 'Learn Relay'
  },
  {
    id: 2,
    text: 'Implement Relay'
  }
]

function AppRoot() {

  const [todos, setTodos] = useState(GetTodos());
  console.log(todos.viewer.todos.edges)

  return (
    <div className="App">
      <div className="app-content">
      <h1 className="headline">Relay Todo</h1>
      <div className="top-bar">
        <div className="menu">
          <div>
            <input type="checkbox" id="markAllCompleted"></input>
            <label htmlFor="markAllCompleted">Mark 13 as done! 🎉</label>
          </div>
          <div className="views">
            <input type="radio" id="all" name="view" value="all"></input>
            <label htmlFor="all">all</label>
            <input type="radio" id="active" name="view" value="active"></input>
            <label htmlFor="active">todo</label>
            <input type="radio" id="completed" name="view" value="completed"></input>
            <label htmlFor="completed">7 completed 💪</label>
          </div>
        </div>
        <div className="inputField">
          <input placeholder="> what will you do today?" className="bar"></input>
        </div>
        </div>
        <div className="todos">
          {todos.viewer.todos.edges.map(edge => (
            <Card text={edge.node.text} key={edge.node.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppRoot;
