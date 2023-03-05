import { createSlice } from '@reduxjs/toolkit';

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
      completed: false,
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
    // toggleStatus: (state, action) => {
    //   state.id === action.payload
    //     ? (state.completed = true)
    //     : (state.completed = false);
    // },
  },
});
