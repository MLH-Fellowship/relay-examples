import React, { useState } from "react";

import AddTodoBar from './components/addTodoBar';
import TodoList from './components/TodoList';
import GetTodos from './queries/getTodos';

import "./App.css";

const App = () => {

  const [curView, setCurView] = useState('all')

  const handleViewChange = e => {
    setCurView(e.target.value)
  }

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
            <input onChange={handleViewChange} type="radio" id="all" name="view" value="all"></input>
            <label htmlFor="all">all</label>
            <input onChange={handleViewChange} type="radio" id="active" name="view" value="active"></input>
            <label htmlFor="active">todo</label>
            <input onChange={handleViewChange} type="radio" id="completed" name="view" value="completed"></input>
            <label htmlFor="completed">7 done 💪</label>
          </div>
        </div>
        <div className="inputField">
          <AddTodoBar/>
        </div>
        </div>
        <TodoList view={curView}/>
      </div>
    </div>
  );
}

export default App
