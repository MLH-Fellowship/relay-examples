/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveTodoInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type removeTodoMutationVariables = {|
  TodoID: RemoveTodoInput
|};
export type removeTodoMutationResponse = {|
  +removeTodo: ?{|
    +viewer: ?{|
      +todos: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +text: ?string,
            +complete: ?boolean,
          |}
        |}>
      |}
    |}
  |}
|};
export type removeTodoMutation = {|
  variables: removeTodoMutationVariables,
  response: removeTodoMutationResponse,
|};
*/


/*
mutation removeTodoMutation(
  $TodoID: RemoveTodoInput!
) {
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
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "TodoID",
    "type": "RemoveTodoInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "TodoID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "TodoConnection",
  "kind": "LinkedField",
  "name": "todos",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TodoEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Todo",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "complete",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "removeTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "removeTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "removeTodoMutation",
    "operationKind": "mutation",
    "text": "mutation removeTodoMutation(\n  $TodoID: RemoveTodoInput!\n) {\n  removeTodo(input: $TodoID) {\n    viewer {\n      todos {\n        edges {\n          node {\n            id\n            text\n            complete\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '148b4c64f4c27252ca3d794b5dc75bd1';

module.exports = node;
