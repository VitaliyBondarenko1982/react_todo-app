import { FC } from 'react';
import TodosFilter from '../TodosFilter';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <span className="todo-count" data-cy="todosCounter">
        3 items left
      </span>

      <TodosFilter />

      <button type="button" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
