import {
  faCalculator,
  faCalendarPlus,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import type { QatButtonProps } from "../models/ui";
import AddTask from "../components/addTask";

export const qatButtons: QatButtonProps[] = [
  {
    title: "Inbox",
    color: "orange",
    icon: faInbox,
  },
  {
    title: "Calculator",
    color: "red",
    icon: faCalculator,
  },
  {
    title: "New task",
    color: "blue",
    icon: faCalendarPlus,
    component: AddTask,
  },
];
