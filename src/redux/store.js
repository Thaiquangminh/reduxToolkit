// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancer = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancer);

// export default store;

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
