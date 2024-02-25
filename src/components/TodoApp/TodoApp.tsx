import { FC } from 'react';
import Footer from '../Footer';
import TodosList from '../TodosList';
import Header from '../Header';
import { useTodosContext } from '../TodosContext';
import { getFilteredTodos } from '../../utills';
import { Filter } from '../../types';

const TodoApp: FC = () => {
  const { todos, updateTodo } = useTodosContext();

  const toggleAll = () => {
    const isAllCompleted = todos.every(todo => todo.completed);

    const todosForUpdate = isAllCompleted
      ? todos
      : getFilteredTodos(todos, Filter.ACTIVE);

    todosForUpdate.forEach(todo =>
      updateTodo({ ...todo, completed: !todo.completed }),
    );
  };

  return (
    <div className="todoapp">
      <Header />

      {!!todos.length && (
        <>
          <section className="main">
            <input
              type="checkbox"
              id="toggle-all"
              className="toggle-all"
              data-cy="toggleAll"
              onClick={toggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <TodosList />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default TodoApp;
