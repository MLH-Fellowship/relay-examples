import React from "react";
import {
    preloadQuery,
    usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "../RelayEnvironment";
import graphql from 'babel-plugin-relay/macro';

const TodoItemsQuery = graphql `
query getTodosQuery {
  viewer {
    todos {
      edges {
        node {
          id
          text
          complete
        }
      }
    }
  }
}
`;


function GetTodos() {
    const preloadedGetTodosQuery = preloadQuery(RelayEnvironment, TodoItemsQuery, {});
    const data = usePreloadedQuery(TodoItemsQuery, preloadedGetTodosQuery);
    return (
      <div>
          {data.viewer.todos.edges.map(edge => (
            <p key={edge.node.id}>{edge.node.text}</p>
          ))}
      </div>
    );
  }

export default GetTodos;