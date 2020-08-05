import {
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql';
import {
  nodeDefinitions,
  fromGlobalId,
  globalIdField,
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
  mutationWithClientMutationId,
  cursorForObjectInConnection,
  toGlobalId,
} from 'graphql-relay';
import {
  Todo,
  User,
  addTodo,
  getTodo,
  getTodos,
  getUser,
  removeCompletedTodos,
  removeTodo,
  renameTodo,
  getViewer,
  changeTodoStatus,
  markAllTodos,
} from './database';

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Todo') {
      return getTodo(id);
    }
    if (type === 'User') {
      return getUser(id);
    }
    return null;
  },
  (obj) => {
    if (obj instanceof Todo) {
      return TodoType;
    }
    if (obj instanceof User) {
      return UserType;
    }
    return null;
  }
);

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
    complete: { type: GraphQLBoolean },
  },
  interfaces: [nodeInterface],
});

const {
  connectionType: TodoConnection,
  edgeType: TodoEdge,
} = connectionDefinitions({ nodeType: TodoType });

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField(),
    todos: {
      type: TodoConnection,
      args: {
        status: {
          type: GraphQLString,
          defaultValue: 'any',
        },
        ...connectionArgs,
      },
      resolve: (obj, { status, ...args }) =>
        connectionFromArray(getTodos(status), args),
    },
    numTodos: {
      type: GraphQLInt,
      resolve: () => getTodos().length,
    },
    numTodosCompleted: {
      type: GraphQLInt,
      resolve: () => getTodos('completed').length,
    },
  },
  interfaces: [nodeInterface],
});

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    viewer: {
      type: UserType,
      resolve: getViewer,
    },
    node: nodeField,
  },
});

const AddTodoMutation = new mutationWithClientMutationId({
  name: 'AddTodo',
  inputFields: {
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    viewer: {
      type: UserType,
      resolve: getViewer,
    },
    todoEdge: {
      type: TodoEdge,
      resolve: ({ todoId }) => {
        const todo = getTodo(todoId);
        return {
          cursor: cursorForObjectInConnection(getTodos(), todo),
          node: todo,
        };
      },
    },
  },
  mutateAndGetPayload: ({ text }) => {
    const todoId = addTodo(text);
    return { todoId };
  },
});

const ChangeTodoStatusMutation = new mutationWithClientMutationId({
  name: 'ChangeTodoStatus',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  outputFields: {
    viewer: {
      type: UserType,
      resolve: getViewer,
    },
    todo: {
      type: TodoType,
      resolve: ({ todoId }) => getTodo(todoId),
    },
  },
  mutateAndGetPayload: ({ id, complete }) => {
    const { id: todoId } = fromGlobalId(id);
    changeTodoStatus(id, complete);
    return { todoId };
  },
});

const MarkAllTodosMutation = new mutationWithClientMutationId({
  name: 'MarkAllTodos',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  outputFields: {
    viewer: {
      type: UserType,
      resolve: getViewer,
    },
    changedTodos: {
      type: new GraphQLList(TodoType),
      resolve: ({ changedTodoIds }) => changedTodoIds.map(getTodo),
    },
  },
  mutateAndGetPayload: ({ complete }) => {
    const changedTodoIds = markAllTodos(complete);
    return { changedTodoIds };
  },
});

const RemoveCompletedTodosMutation = new mutationWithClientMutationId({
  name: 'RemoveCompletedTodos',
  outputFields: {
    viewer: {
      type: UserType,
      resolve: getViewer,
    },
    deletedIds: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ deletedIds }) => deletedIds,
    },
  },
  mutateAndGetPayload: () => {
    const deletedTodoIds = removeCompletedTodos();
    const deletedIds = deletedTodoIds.map(toGlobalId.bind(null, 'Todo'));
    return { deletedIds };
  },
});

const RemoveTodoMutation = new mutationWithClientMutationId({
  name: 'RemoveTodo',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    viewer: {
      type: UserType,
      resolve: getViewer,
    },
    deletedId: {
      type: GraphQLID,
      resolve: ({ id }) => id,
    },
  },
  mutateAndGetPayload: ({ id }) => {
    removeTodo(id);
    return { id };
  },
});

const RenameTodoMutation = new mutationWithClientMutationId({
  name: 'RenameTodo',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    todo: {
      type: TodoType,
      resolve: ({ todoId }) => getTodo(todoId),
    },
  },
  mutateAndGetPayload: ({ id, text }) => {
    const { id: todoId } = fromGlobalId(id);
    renameTodo(id, text);
    return { todoId };
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: AddTodoMutation,
    changeTodoStatus: ChangeTodoStatusMutation,
    markAllTodos: MarkAllTodosMutation,
    removeTodosMutation: RemoveCompletedTodosMutation,
    removeTodo: RemoveTodoMutation,
    renameTodo: RenameTodoMutation,
  },
});

export default new GraphQLSchema({
  query: Root,
  mutation: Mutation,
});
