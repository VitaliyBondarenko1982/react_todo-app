import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { Todo } from '../../types';
import { useTodosContext } from '../TodosContext';

interface Props {
  todo: Todo;
}

const TodosItem: FC<Props> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const { updateTodo, removeTodo } = useTodosContext();
  const editInputRef = useRef<HTMLInputElement>(null);

  const editTodo = () => setIsEditing(true);

  const toggleTodo = (event: ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, completed: event.target.checked });
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const updateTitle = () => {
    setIsEditing(false);

    if (!newTitle.trim()) {
      removeTodo(todo.id);
    }

    if (todo.title === newTitle.trim()) {
      return;
    }

    updateTodo({ ...todo, title: newTitle.trim() });
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateTitle();
    }

    if (event.key === 'Escape') {
      setNewTitle(todo.title);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (editInputRef.current && isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className={cn({ completed: todo.completed, editing: isEditing })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={toggleTodo}
          checked={todo.completed}
        />
        <label onDoubleClick={editTodo} aria-label="edit">
          {todo.title}
        </label>
        <button
          type="button"
          className="destroy"
          data-cy="deleteTodo"
          aria-label="delete todo"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
      <input
        type="text"
        className="edit"
        ref={editInputRef}
        value={newTitle}
        onChange={onChangeTitle}
        onBlur={updateTitle}
        onKeyDown={handleKeyUp}
      />
    </li>
  );
};

export default TodosItem;
