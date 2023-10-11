import { faCalculator, faCalendarPlus, faInbox } from "@fortawesome/free-solid-svg-icons";
import type { QatButtonProps } from "../models/ui";
import AddTask from "../components/addTask";

export const qatButtons: QatButtonProps[] = [
  {
    title: "Inbox",
    color: "orange-500",
    icon: faInbox,
  },
  {
    title: "Calculator",
    color: "red-500",
    icon: faCalculator,
  },
  {
    title: "New task",
    color: "blue-500",
    icon: faCalendarPlus,
    component: AddTask,
  },
];
