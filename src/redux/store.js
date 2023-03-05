import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import todolistSlice from '../components/TodoList/todoSlice';

const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
    todolist: todolistSlice.reducer,
  },
});

export default store;
