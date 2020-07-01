export class Todo extends Object {}
export class User extends Object {}

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

export function addToDo(text, complete) {
  const todo = new Todo();
  Object.assign(todo, {
    id: `${nextToDoId++}`,
    complete: Boolean(complete),
    text,
  });

  todosById[todo.id] = todo;
  todosIdsByUser[VIEWER_ID].push(todo.id);

  return todo.id;
}

addToDo('Learn Relay', true);
addToDo('Implement Relay', false);

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

export function changeTodoStatus(id, complete) {
  const todo = getTodo(id);
  todo.complete = complete;
}

export function getUser() {
  return usersById[VIEWER_ID];
}

export function getViewer() {
  return getUser(VIEWER_ID);
}

export function markAllTodos(complete) {
  const changeTodos = [];
  getTodos().forEach((todo) => {
    if (todo.complete !== 'completed') {
      todo.complete = complete;
      changeTodos.push(todo);
    }
  });
  return changeTodos.map((todo) => todo.id);
}

export function removeTodo(id) {
  const todoIndex = todosIdsByUser[VIEWER_ID].indexOf(id);
  if (todoIndex !== -1) {
    todosIdsByUser[VIEWER_ID].splice(todoIndex, 1);
  }
  delete todosById[id];
}

export function removeCompletedToDos() {
  const todosToRemove = getTodos().filter((todo) => todo.complete);
  todosToRemove.forEach((todo) => removeTodo(todo.id));
  return todosToRemove.map((todo) => todo.id);
}

export function renameTodo(id, text) {
  const todo = getTodo(id);
  todo.text = text;
}
