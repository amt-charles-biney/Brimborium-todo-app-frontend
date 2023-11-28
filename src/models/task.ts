import type { Moment } from "moment";

export interface TaskData {
  topic: string;
  description: string;
  dueDate: string | Moment;
}

export interface Task extends TaskData {
  createdDate: string;
  id: string;
  status: "TO_DO" | "IN_PROGRESS" | "COMPLETED" | "OVERDUE";
  userId: string;
}

export interface TaskUpdateData {
  topic?: string;
  description?: string;
  dueDate?: string | Moment;
}

export interface TaskState {
  loading: boolean;
  error?: string;
  tasks: Task[];
  count: number;
}

export const taskStatusString = {
  pending: "TO_DO",
  inProgress: "IN_PROGRESS",
  completed: "COMPLETED",
  overdue: "OVERDUE",
};
