import { FC } from 'react';
import { Todo } from '../../types';

interface Props {
  todo: Todo;
}

const TodosItem: FC<Props> = ({ todo }) => {
  return (
    <li>
      <div className="view">
        <input type="checkbox" className="toggle" id="toggle-view" />
        <label htmlFor="toggle-view">{todo.title}</label>
        <button
          type="button"
          className="destroy"
          data-cy="deleteTodo"
          aria-label="delete todo"
        />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

export default TodosItem;
