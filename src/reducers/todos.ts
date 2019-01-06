import { createSlice } from '@redux-ts-starter-kit/core';
import { IStore } from '..';

export interface ITodoObject {
  text: string;
  completed: boolean;
  id: number;
}

const initialState: ITodoObject[] = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

export const {
  reducer: todos,
  actions: todoActions,
  selectors: { getSlice: getTodos },
} = createSlice({
  slice: 'todos',
  cases: {
    addTodo: (state, text: string, _: IStore) => {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text,
      });
    },
    deleteTodo: (state, id: number) => state.filter(todo => todo.id !== id),
    editTodo: (state, [id, text,]: [number, string]) => {
      state.forEach(todo => todo.id === id && (todo.text = text));
    },
    completeTodo: (state, id: number) => {
      state.forEach(
        todo => todo.id === id && (todo.completed = !todo.completed),
      );
    },
    completeAllTodos: (state, _: never) => {
      const areAllMarked = state.every(todo => todo.completed);
      state.forEach(todo => {
        todo.completed = !areAllMarked;
      });
    },
    clearCompleted: (state, _: never) =>
      state.filter(todo => todo.completed === false),
  },
  initialState,
});
