import React, { useState } from "react";

import AddTodoBar from './components/addTodoBar';
import TodoList from './components/TodoList';
import GetTodos from './queries/getTodos';

import "./App.css";

const App = () => {

const [todos, setTodos] = useState(GetTodos());
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
            <label htmlFor="completed">7 done 💪</label>
          </div>
        </div>
        <div className="inputField">
          <AddTodoBar/>
        </div>
        </div>
        <TodoList/>
      </div>
    </div>
  );
}

export default App
