import React, { useState, useEffect } from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

import Card from './components/TodoCard';

const todoList = [
  {
    id: 1,
    text: 'Learn Relay',
  },
  {
    id: 2,
    text: 'Implement Relay',
  },
];

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <h1 className="headline">Relay Todo</h1>

        <div className="top-bar">
          <div className="menu">
            <div>
              <input type="checkbox" id="markAllCompleted"></input>
              <label for="markAllCompleted">Mark 13 as done! 🎉</label>
            </div>
            <div className="views">
              <input type="radio" id="all" name="view" value="all"></input>
              <label for="all">all</label>
              <input
                type="radio"
                id="active"
                name="view"
                value="active"
              ></input>
              <label for="active">todo</label>
              <input
                type="radio"
                id="completed"
                name="view"
                value="completed"
              ></input>
              <label for="completed">7 completed 💪</label>
            </div>
          </div>
          <div className="inputField">
            <input
              placeholder="> what will you do today?"
              className="bar"
            ></input>
          </div>
        </div>
        <div className="todos">
          {todoList.map((todo) => {
            return <Card key={todo.id} id={todo.id} text={todo.text} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
