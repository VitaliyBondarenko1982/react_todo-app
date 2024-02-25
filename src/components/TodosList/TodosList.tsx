import { FC } from 'react';
import { useTodosContext } from '../TodosContext';
import TodosItem from '../TodosItem';
import { getFilteredTodos } from '../../utills';

const TodosList: FC = () => {
  const { todos, activeFilter } = useTodosContext();

  const filteredTodos = getFilteredTodos(todos, activeFilter);

  return (
    <ul className="todo-list" data-cy="todosList">
      {filteredTodos.map(todo => (
        <TodosItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodosList;
