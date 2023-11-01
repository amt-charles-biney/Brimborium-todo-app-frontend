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

export interface TaskState {
  loading: boolean;
  error?: string;
  tasks: Task[];
  count: number;
}
