import React, { useState } from 'react';

import AddTodoBar from './components/addTodoBar';
import TodoList from './components/TodoList';
import GetTodos from './queries/getTodos';

import './App.css';

const App = () => {
  const [curView, setCurView] = useState('any');
  const completedCount = GetTodos('completed').viewer.todos.edges.length;
  const todoCount = GetTodos('active').viewer.todos.edges.length;

  const handleViewChange = (e) => {
    setCurView(e.target.value);
  };

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="headline">Relay Todo</h1>
        <div className="top-bar">
          <div className="menu">
            <div>
              <input type="checkbox" id="markAllCompleted" />
              <label htmlFor="markAllCompleted">
                Mark {todoCount} as done! 🎉
              </label>
            </div>
            <div className="views">
              <input
                onChange={handleViewChange}
                type="radio"
                id="all"
                name="view"
                value="any"
                checked={curView === 'any' ? true : false}
              />
              <label htmlFor="all">all</label>
              <input
                onChange={handleViewChange}
                type="radio"
                id="active"
                name="view"
                value="active"
              />
              <label htmlFor="active">todo</label>
              <input
                onChange={handleViewChange}
                type="radio"
                id="completed"
                name="view"
                value="completed"
              />
              <label htmlFor="completed">{completedCount} done 💪</label>
            </div>
          </div>
          <div className="inputField">
            <AddTodoBar />
          </div>
        </div>
        <TodoList data={GetTodos(curView).viewer.todos.edges} />
      </div>
    </div>
  );
};

export default App;
