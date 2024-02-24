import { createContext, FC, ReactNode, useState } from 'react';
import { Todo } from '../../types';

interface Props {
  children: ReactNode;
}

interface ITodosCtx {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

export const TodosContext = createContext<ITodosCtx>({
  todos: [],
  addTodo: () => {},
});

const TodosContextProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
