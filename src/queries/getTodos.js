import {
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "../RelayEnvironment";
import graphql from 'babel-plugin-relay/macro';

const TodoItemsQuery = graphql `
query getTodosQuery($view: String) {
  viewer {
    todos(status: $view) {
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


function GetTodos(view) {
  const preloadedGetTodosQuery = preloadQuery(RelayEnvironment, TodoItemsQuery, {
    view: view
  });
  return usePreloadedQuery(TodoItemsQuery, preloadedGetTodosQuery);
}

export default GetTodos;