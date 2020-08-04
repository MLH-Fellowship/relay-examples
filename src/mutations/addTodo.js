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