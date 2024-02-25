import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Todo } from '../../types';
import { useTodosContext } from '../TodosContext';

const Header: FC = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodosContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: +new Date(),
      title,
      completed: false,
    };

    addTodo(newTodo);
    setTitle('');
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          data-cy="createTodo"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onChange}
          value={title}
        />
      </form>
    </header>
  );
};

export default Header;
