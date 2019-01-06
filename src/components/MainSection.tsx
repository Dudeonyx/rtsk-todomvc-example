import React, { FunctionComponent } from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import { todoActions } from '../reducers';

interface IMainSectionProps {
  todosCount: number;
  completedCount: number;
  actions: typeof todoActions;
}

const MainSection: FunctionComponent<IMainSectionProps> = ({
  todosCount,
  completedCount,
  actions,
}) => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly={true}
        />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </section>
);

export default MainSection;
