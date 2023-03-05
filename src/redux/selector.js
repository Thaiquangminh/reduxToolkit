import { createSelector } from '@reduxjs/toolkit';

export const searchValueSelector = (state) => state.filter.search;
export const todolistSelector = (state) => state.todolist;
export const statusValueSelector = (state) => state.filter.status;
export const priorityValueSelector = (state) => state.filter.priority;

export const newTodolist = createSelector(
  todolistSelector,
  searchValueSelector,
  statusValueSelector,
  priorityValueSelector,
  (todolist, searchValue, status, priority) => {
    //status: "All", "Completed", "Todo"
    return todolist.filter((todo) => {
      if (status === 'All') {
        return priority.length !== 0
          ? todo.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchValue.toLowerCase());
      } else if (status === 'Completed') {
        return priority.length !== 0
          ? todo.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              todo.completed &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              todo.completed;
      } else {
        return priority.length !== 0
          ? todo.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              todo.completed === false &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              todo.completed === false;
      }
    });
  }
);
