import graphql from 'babel-plugin-relay/macro';

export const markAllTodosMutation = graphql`
  mutation markAllTodosMutation($TodoStatus: MarkAllTodosInput!) {
    markAllTodos(input: $TodoStatus) {
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
  }
`;
