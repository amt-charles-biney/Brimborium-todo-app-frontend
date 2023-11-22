import {
  faBolt,
  faCalculator,
  faCalendarPlus
} from "@fortawesome/free-solid-svg-icons";
import AddTask from "../components/addTask";
import type { QatButtonProps } from "../models/ui";

export const qatButtons: QatButtonProps[] = [
  {
    title: "Amali AI",
    color: "orange",
    icon: faBolt,
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
