import RelayEnvironment from "../RelayEnvironment";
import {commitMutation} from 'react-relay'
// import {graphql} from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

export const AddTodoMutation = graphql`
mutation addTodoMutation($input: AddTodoInput!) {
  addTodo(input: $input){
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

export const commitFunc = (item, callback) => {
    const variables = {
        input: {
            item
        }
    }
    commitMutation(RelayEnvironment, {
        AddTodoMutation,
        variables,
        oneCompleted: () => {
            console.log('Success! Added a todo!')
            callback();
        },
        oneError: err => console.log(err),
    })
}
