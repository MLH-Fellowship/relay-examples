export const Todo = {};
export const User = {};

const VIEWER_ID = 'user';
const viewer = {};
viewer.id = VIEWER_ID;

const usersById = {
  [VIEWER_ID]: viewer,
};

let todosById = {};
let todosIdsByUser = {
  [VIEWER_ID]: [],
};
let nextToDoId = 0;

// Getters

export function getTodo(id) {
  return todosById[id];
}

export function getTodos(status = 'any') {
  const todos = todosIdsByUser[VIEWER_ID].map((id) => todosById[id]);
  if (status === 'any') {
    return todos;
  }
  return todos.filter((todo) => todo.complete === (status === 'completed'));
}

export function getUser() {
  return usersById[VIEWER_ID];
}

export function getViewer() {
  return getUser(VIEWER_ID);
}

// Mutations

// Updated
export function addTodo(text, complete) {
  const todo = {
    id: `${nextToDoId}`,
    text,
    complete: Boolean(complete),
  };

  const newTodosById = {
    ...todosById,
    [todo.id]: todo,
  };

  const newTodosIdsByUser = {
    ...todosIdsByUser,
    [VIEWER_ID]: [...todosIdsByUser[VIEWER_ID], todo.id],
  };

  todosById = newTodosById;
  todosIdsByUser = newTodosIdsByUser;

  nextToDoId = parseInt(nextToDoId) + 1;

  return todo.id;
}

// Add example data
addTodo('Learn Relay', true);
addTodo('Implement Relay', false);

// TODO: Update for todosIdsByUser
export function changeTodoStatus(id, complete) {
  const oldTodo = getTodo(id);

  const newTodosById = {
    ...todosById,
    id: {
      ...oldTodo,
      complete: complete,
    },
  };

  todosById = newTodosById;

  return newTodosById;
}

// Updated
export function markAllTodos(complete) {
  const newTodosById = {};
  getTodos().forEach((todo) => {
    newTodosById[todo.id] = {
      ...todo,
      complete: complete,
    };
  });

  todosById = newTodosById;
  return newTodosById;
}

// Updated
export function removeTodo(id) {

  const todoIndex = getTodos().indexOf(id);
  if (todoIndex !== -1) {
    delete todosById[id];
    // todosById = todosById.filter((todo) => todo.id !== id);
    todosIdsByUser[VIEWER_ID] = todosIdsByUser[VIEWER_ID].filter(
      (oldID) => oldID !== id
    );
  }

  return todosIdsByUser;
}

// Updated
export function removeCompletedTodos() {
  const newTodosById = getTodos().filter((todo) => !todo.complete);
  let newTodosIdsByUser = [];
  newTodosById.forEach((todo) => {
    newTodosIdsByUser.push(todo.id);
  });

  todosById = newTodosById;
  todosIdsByUser = newTodosIdsByUser;

  return newTodosById;
}

// Updated
export function renameTodo(id, text) {
  const oldTodo = getTodo(id);
  const newTodosById = {
    ...todosById,
    id: {
      ...oldTodo,
      text: text,
    },
  };

  todosById = newTodosById;
  return newTodosById;
}
