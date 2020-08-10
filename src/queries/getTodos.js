import graphql from 'babel-plugin-relay/macro';

export const TodoItemsQuery = graphql `
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