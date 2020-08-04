import graphql from 'babel-plugin-relay/macro';

export const changeTodoStatusMutation = graphql`
  mutation changeTodoStatusMutation($TodoID: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $TodoID) {
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
