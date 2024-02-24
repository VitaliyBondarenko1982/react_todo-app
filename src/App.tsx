import { FC } from 'react';
import { TodoApp, TodosContextProvider } from './components';

export const App: FC = () => {
  return (
    <TodosContextProvider>
      <TodoApp />
    </TodosContextProvider>
  );
};
