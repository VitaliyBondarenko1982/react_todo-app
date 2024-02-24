import { FC, useContext } from 'react';
import { TodosContext } from '../TodosContext/TodosContext';
import TodosItem from '../TodosItem';

const TodosList: FC = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul className="todo-list" data-cy="todosList">
      {todos.map(todo => (
        <TodosItem todo={todo} key={todo.id} />
      ))}
      <li>
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-view" />
          <label htmlFor="toggle-view">asdfghj</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li className="completed">
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-completed" />
          <label htmlFor="toggle-completed">qwertyuio</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li className="editing">
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-editing" />
          <label htmlFor="toggle-editing">zxcvbnm</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li>
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-view2" />
          <label htmlFor="toggle-view2">1234567890</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>
    </ul>
  );
};

export default TodosList;
