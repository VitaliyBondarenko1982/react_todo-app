import { FC } from 'react';
import TodosFilter from '../TodosFilter';
import { getFilteredTodos } from '../../utills';
import { useTodosContext } from '../TodosContext';
import { Filter } from '../../types';

const Footer: FC = () => {
  const { todos, removeTodo } = useTodosContext();

  const activeTodosLength = getFilteredTodos(todos, Filter.ACTIVE).length;
  const completedTodos = getFilteredTodos(todos, Filter.COMPLETED);

  const clearCompletedTodos = () => {
    completedTodos.forEach(todo => removeTodo(todo.id));
  };

  return (
    <footer className="footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${activeTodosLength} item${activeTodosLength === 1 ? '' : 's'} left`}
      </span>

      <TodosFilter />

      {!!completedTodos.length && (
        <button
          type="button"
          className="clear-completed"
          onClick={clearCompletedTodos}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
