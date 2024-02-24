import { FC } from 'react';
import Footer from '../Footer';
import TodosList from '../TodosList';
import Header from '../Header';

const TodoApp: FC = () => {
  return (
    <div className="todoapp">
      <Header />
      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          data-cy="toggleAll"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodosList />
      </section>

      <Footer />
    </div>
  );
};

export default TodoApp;
