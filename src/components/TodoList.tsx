import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { todoActions } from '../reducers';

interface IFilteredTodos {
  id: number;
  completed: boolean;
  text: string;
}

interface ITodoListProps {
  filteredTodos: IFilteredTodos[];
  actions: typeof todoActions;
}

const TodoList: FunctionComponent<ITodoListProps> = ({
  filteredTodos,
  actions,
}) => (
  <ul className="todo-list">
    {filteredTodos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ))}
  </ul>
);

export default TodoList;
