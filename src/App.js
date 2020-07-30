import React, { useState, useEffect, Suspense } from "react";

import AddTodoBar from './components/addTodoBar';
import "./App.css";


import Card from './components/TodoCard';

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

function App() {

  return (
    <div className="App">
      <div className="app-content">
      <h1 className="headline">Relay Todo</h1>
      <div className="top-bar">
        <div className="menu">
          <div>
            <input type="checkbox"/>
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
        <div className="todos">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App