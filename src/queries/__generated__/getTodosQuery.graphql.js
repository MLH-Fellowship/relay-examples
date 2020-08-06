/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getTodosQueryVariables = {|
  view?: ?string
|};
export type getTodosQueryResponse = {|
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
|};
export type getTodosQuery = {|
  variables: getTodosQueryVariables,
  response: getTodosQueryResponse,
|};
*/


/*
query getTodosQuery(
  $view: String
) {
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
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "view",
    "type": "String"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "status",
      "variableName": "view"
    }
  ],
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
            (v1/*: any*/),
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
    "name": "getTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "getTodosQuery",
    "operationKind": "query",
    "text": "query getTodosQuery(\n  $view: String\n) {\n  viewer {\n    todos(status: $view) {\n      edges {\n        node {\n          id\n          text\n          complete\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '97fcddc9d25e93bc6ac95fa5958c495e';

module.exports = node;
