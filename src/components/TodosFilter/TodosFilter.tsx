import { FC } from 'react';
import cn from 'classnames';
import { useTodosContext } from '../TodosContext';
import { Filter } from '../../types';

const TodosFilter: FC = () => {
  const { updateFilter, activeFilter } = useTodosContext();

  return (
    <ul className="filters" data-cy="todosFilter">
      <li>
        <a
          href="#/"
          className={cn({ selected: activeFilter === Filter.ALL })}
          onClick={updateFilter(Filter.ALL)}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={cn({ selected: activeFilter === Filter.ACTIVE })}
          onClick={updateFilter(Filter.ACTIVE)}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={cn({ selected: activeFilter === Filter.COMPLETED })}
          onClick={updateFilter(Filter.COMPLETED)}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

export default TodosFilter;
