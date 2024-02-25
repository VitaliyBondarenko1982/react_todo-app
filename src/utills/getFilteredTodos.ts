import { Filter, Todo } from '../types';

export const getActiveTodos = (todos: Todo[]) =>
  todos.filter(todo => !todo.completed);

export const getCompletedTodos = (todos: Todo[]) =>
  todos.filter(todo => todo.completed);

export const getFilteredTodos = (todos: Todo[], activeFilter: Filter) => {
  switch (activeFilter) {
    case Filter.ACTIVE:
      return getActiveTodos(todos);
    case Filter.COMPLETED:
      return getCompletedTodos(todos);
    default:
      return todos;
  }
};
