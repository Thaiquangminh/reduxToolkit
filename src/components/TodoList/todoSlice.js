import { createSlice } from '@reduxjs/toolkit';
import { toggleStatus } from '../../redux/actions';

export default createSlice({
  name: 'todolist',
  initialState: [
    {
      id: 1,
      name: 'Yoga',
      completed: false,
      priority: 'Medium',
    },
    {
      id: 2,
      name: 'Learn redux',
      completed: true,
      priority: 'High',
    },
    {
      id: 3,
      name: 'Learn redux toolkit',
      completed: false,
      priority: 'High',
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: () => {},
  },
});
