import React, { useState } from 'react';
import { useMutation } from 'react-relay/hooks';

import AddTodoBar from './components/addTodoBar';
import TodoList from './components/TodoList';
import GetTodos from './queries/getTodos';
import { markAllTodosMutation } from './mutations/markAllTodos';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState(GetTodos());
  const [allStatus, setAllStatus] = useState(false);
  const [markAllTodos, isPending] = useMutation(markAllTodosMutation);

  const handleStatusChange = () => {
    markAllTodos({
      variables: {
        TodoStatus: {
          complete: !allStatus,
        },
      },
      onCompleted: (data) => {
        console.log('MarkTodoStatus', data);
        setAllStatus(!allStatus);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="headline">Relay Todo</h1>
        <div className="top-bar">
          <div className="menu">
            <div>
              <input
                type="checkbox"
                id="markAllCompleted"
                checked={allStatus}
                onChange={handleStatusChange}
              />
              <label htmlFor="markAllCompleted">Mark 13 as done! 🎉</label>
            </div>
            <div className="views">
              <input type="radio" id="all" name="view" value="all"></input>
              <label htmlFor="all">all</label>
              <input
                type="radio"
                id="active"
                name="view"
                value="active"
              ></input>
              <label htmlFor="active">todo</label>
              <input
                type="radio"
                id="completed"
                name="view"
                value="completed"
              ></input>
              <label htmlFor="completed">7 done 💪</label>
            </div>
          </div>
          <div className="inputField">
            <AddTodoBar />
          </div>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
