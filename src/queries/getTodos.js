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
  return usePreloadedQuery(TodoItemsQuery, preloadedGetTodosQuery);
}

export default GetTodos;