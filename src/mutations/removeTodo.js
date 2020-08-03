import RelayEnvironment from '../RelayEnvironment';
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

export const removeTodoMutation = graphql`
  mutation removeTodoMutation($TodoID: RemoveTodoInput!) {
    removeTodo(input: $TodoID) {
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
