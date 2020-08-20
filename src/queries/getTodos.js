import graphql from 'babel-plugin-relay/macro';

export const TodoItemsQuery = graphql `
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

