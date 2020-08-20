import graphql from 'babel-plugin-relay/macro';

export const updateTodoMutation = graphql`
  mutation updateTodoMutation($TodoID: RenameTodoInput!) {
    renameTodo(input: $TodoID) {
      viewer {
        todos {
          edges {
            node {
              id
              text
            }
          }
        }
      }
    }
  }
`;

// export const updateTodoMutation = graphql`
//   mutation updateTodoMutation($TodoID: RenameTodoInput!) {
//     renameTodo(input: $TodoID) {
//       viewer {
//         todos {
//           edges {
//             node {
//               id
//               text
//             }
//           }
//         }
//       }
//       todo {
//           id
//           text
//       }
//     }
//   }
// `;