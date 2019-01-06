import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { todos, visibilityFilter } from './reducers';
import { configureStore } from '@redux-ts-starter-kit/core';
import 'todomvc-app-css/index.css';

export interface IStore {
  todos: ReturnType<typeof todos>;
  visibilityFilter: ReturnType<typeof visibilityFilter>;
}

const [store,] = configureStore<IStore>({
  reducer: {
    todos,
    visibilityFilter,
  },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
