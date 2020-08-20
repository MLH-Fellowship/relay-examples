/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoStatusInput = {|
  id: string,
  complete: boolean,
  clientMutationId?: ?string,
|};
export type changeTodoStatusMutationVariables = {|
  TodoID: ChangeTodoStatusInput
|};
export type changeTodoStatusMutationResponse = {|
  +changeTodoStatus: ?{|
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
export type changeTodoStatusMutation = {|
  variables: changeTodoStatusMutationVariables,
  response: changeTodoStatusMutationResponse,
|};
*/


/*
mutation changeTodoStatusMutation(
  $TodoID: ChangeTodoStatusInput!
) {
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
    "type": "ChangeTodoStatusInput!"
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
    "name": "changeTodoStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeTodoStatusPayload",
        "kind": "LinkedField",
        "name": "changeTodoStatus",
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
    "name": "changeTodoStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeTodoStatusPayload",
        "kind": "LinkedField",
        "name": "changeTodoStatus",
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
    "name": "changeTodoStatusMutation",
    "operationKind": "mutation",
    "text": "mutation changeTodoStatusMutation(\n  $TodoID: ChangeTodoStatusInput!\n) {\n  changeTodoStatus(input: $TodoID) {\n    viewer {\n      todos {\n        edges {\n          node {\n            id\n            text\n            complete\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17a324cdfa76364ee8ae667da5fa7e4b';

module.exports = node;
