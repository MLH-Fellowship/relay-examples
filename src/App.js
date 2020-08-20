import React, { useState } from 'react';
import { useMutation } from 'react-relay/hooks';

import AddTodoBar from './components/addTodoBar';
import TodoList from './components/TodoList';

import { TodoItemsQuery } from './queries/getTodos';
import { preloadQuery, usePreloadedQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import { markAllTodosMutation } from './mutations/markAllTodos';

import './App.css';

const App = () => {
  const [allStatus, setAllStatus] = useState(false);
  const [curView, setCurView] = useState('any');
  const [markAllTodos, isPending] = useMutation(markAllTodosMutation);
  // const [count, setCount] = useState(0);

  const handleViewChange = (e) => {
    setCurView(e.target.value);
  };

  const preloadedGetTodosQuery = preloadQuery(
    RelayEnvironment,
    TodoItemsQuery,
    {}
  );
  const todos = usePreloadedQuery(TodoItemsQuery, preloadedGetTodosQuery);

  // todos.viewer.todos.edges.forEach((node) => {
  //   if (node.complete) {
  //     setCount(count + 1);
  //   }
  //   console.log('inside todos');
  //   console.log(node);
  // });

  const handleStatusChange = () => {
    markAllTodos({
      variables: {
        TodoStatus: {
          complete: !allStatus,
        },
      },
      onCompleted: (data) => {
        console.log(data);
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
              <label htmlFor="markAllCompleted">
                Mark {`todoCount`} as done! 🎉
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
              <input type="radio" id="active" name="view" value="active" />
              <label htmlFor="active">todo</label>
              <input
                onChange={handleViewChange}
                type="radio"
                id="completed"
                name="view"
                value="completed"
              />
              <label htmlFor="completed">{`completedCount`} done 💪</label>
            </div>
          </div>
          <div className="inputField">
            <AddTodoBar />
          </div>
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
