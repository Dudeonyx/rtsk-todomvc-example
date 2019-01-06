import { createSlice } from '@redux-ts-starter-kit/core';
import { IStore } from '..';

export const {
  actions: { setVisibilityFilter },
  reducer: visibilityFilter,
  selectors: { getSlice: getVisibilityFilter },
} = createSlice({
  slice: 'visibilityFilter',
  cases: {
    setVisibilityFilter: (state, filter: string, _: IStore) => filter,
  },
  initialState: 'show_all',
});

export default visibilityFilter;
