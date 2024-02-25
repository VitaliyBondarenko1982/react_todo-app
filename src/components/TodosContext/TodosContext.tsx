import { createContext, FC, ReactNode, useContext } from 'react';
import { Filter, Todo } from '../../types';
import { useLocalStorage } from '../../hooks';

interface Props {
  children: ReactNode;
}

export interface ITodosCtx {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (todoId: number) => void;
  activeFilter: Filter;
  updateFilter: (filterValue: Filter) => VoidFunction;
}

const TodosContext = createContext<ITodosCtx>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  removeTodo: () => {},
  activeFilter: Filter.ALL,
  updateFilter: () => () => {},
});

export const useTodosContext = () => useContext<ITodosCtx>(TodosContext);

const TodosContextProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [activeFilter, setActiveFilter] = useLocalStorage<Filter>(
    'activeFilter',
    Filter.ALL,
  );

  const addTodo = (todo: Todo) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const updateTodo = (todo: Todo) => {
    setTodos(prevTodos => prevTodos.map(t => (t.id === todo.id ? todo : t)));
  };

  const updateFilter = (filterValue: Filter) => () => {
    setActiveFilter(filterValue);
  };

  const removeTodo = (todoId: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        activeFilter,
        updateFilter,
        removeTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
