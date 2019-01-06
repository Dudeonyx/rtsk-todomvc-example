import React, { FunctionComponent } from 'react';
import TodoTextInput from './TodoTextInput';

interface IHeaderProps {
  addTodo: (text: string) => any;
}

const Header: FunctionComponent<IHeaderProps> = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo={true}
      onSave={(text: string) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header;
