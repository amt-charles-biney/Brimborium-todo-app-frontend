import { createSelector } from "@reduxjs/toolkit";
import { Task } from "../models/task";
import { RootState } from "./store";

/**
 * Select all tasks from the Redux state.
 * @param {Object} state - The Redux state.
 * @returns {Array} - All tasks from the state.
 */
export const selectAllTasks = (state: RootState): Array<Task> =>
  state.task.tasks;

/**
 * Select upcoming tasks based on due date.
 * @param {Object} state - The Redux state.
 * @returns {Array} - Upcoming tasks filtered by due date.
 */
export const selectUpcomingTasks = createSelector(selectAllTasks, (tasks) => {
  const currentDate = new Date();
  return tasks.filter(
    (task: Task) =>
      new Date(task.dueDate as string) > currentDate &&
      task.status !== "COMPLETED" &&
      task.status !== "OVERDUE"
  );
});

/**
 * Select completed tasks.
 * @param {Object} state - The Redux state.
 * @returns {Array} - Completed tasks.
 */
export const selectCompletedTasks = createSelector(
  selectAllTasks,
  (tasks: Task[]) => tasks.filter((task: Task) => task.status === "COMPLETED")
);

/**
 * Select overdue tasks based on due date.
 * @param {Object} state - The Redux state.
 * @returns {Array} - Overdue tasks filtered by due date.
 */
export const selectOverdueTasks = createSelector(selectAllTasks, (tasks) => {
  const currentDate = new Date();
  return tasks.filter(
    (task: Task) =>
      new Date(task.dueDate as string) < currentDate &&
      task.status !== "COMPLETED"
  );
});

/**
 * Select pending tasks (not completed and not overdue).
 * @param {Object} state - The Redux state.
 * @returns {Array} - Pending tasks filtered by due date and status.
 */
export const selectPendingTasks = createSelector(selectAllTasks, (tasks) => {
  const currentDate = new Date();
  return tasks.filter(
    (task: Task) =>
      new Date(task.dueDate as string) >= currentDate &&
      task.status !== "COMPLETED"
  );
});

/**
 * Select the total count of tasks.
 * @param {Object} state - The Redux state.
 * @returns {number} - The total count of tasks.
 */
export const selectTaskCount = createSelector(
  selectAllTasks,
  (tasks: Task[]) => tasks.length
);
