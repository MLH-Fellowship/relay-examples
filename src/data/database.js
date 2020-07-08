export const Todo = {};
export const User = {};

const VIEWER_ID = 'user';

const viewer = new User();
viewer.id = VIEWER_ID;
const usersById = {
  [VIEWER_ID]: viewer,
};

const todosById = {};
const todosIdsByUser = {
  [VIEWER_ID]: [],
};
let nextToDoId = 0;

export function addTodo(text, complete) {
  const todo = {
    id: `${nextToDoId}`,
    text,
    complete: Boolean(complete),
  };

  todosById = {
    ...todosById,
    [todo.id]: todo,
  };

  todosIdsByUser = {
    ...todosIdsByUser,
    [VIEWER_ID]: [...todosIdsByUser[VIEWER_ID], todo.id],
  };

  return todo.id;
}

addTodo('Learn Relay', true);
addTodo('Implement Relay', false);

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

// TODO: Evaluate
export function changeTodoStatus(id, complete) {
  const todo = getTodo(id);
  const newTodo = {
    ...todo,
    complete: complete,
  };
}

export function getUser() {
  return usersById[VIEWER_ID];
}

export function getViewer() {
  return getUser(VIEWER_ID);
}

// TODO: Done?
export function markAllTodos(complete) {
  const changeTodos = [];
  getTodos().forEach((todo) => {
    if (todo.complete !== complete) {
      const newTodo = {
        ...todo,
        complete: complete,
      };
      changeTodos.push(newTodo);
    }
  });
  return changeTodos.map((todo) => todo.id);
}

// TODO: Evaluate
export function removeTodo(id) {
  const todoIndex = todosIdsByUser[VIEWER_ID].indexOf(id);
  if (todoIndex !== -1) {
    todosIdsByUser[VIEWER_ID].splice(todoIndex, 1);
  }
  delete todosById[id];
}

// TODO: Done?
export function removeCompletedTodos() {
  const incompleteTodos = getTodos().filter((todo) => !todo.complete);
  return incompleteTodos;
}

// TODO: Evaluate
export function renameTodo(id, text) {
  const oldTodo = getTodo(id);
  const newTodo = {
    ...oldTodo,
    text: text,
  };
}
