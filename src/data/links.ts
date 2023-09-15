import { faChartPie, faSliders, faCubesStacked, faListCheck, faCalendarPlus, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export const systemLinks = [
  {
    link: "/reports",
    icon: faChartPie,
    name: "Reports",
  },
  {
    link: "/settings",
    icon: faSliders,
    name: "Settings",
  },
];

export const taskLinks = [
  {
    link: "/",
    icon: faCubesStacked,
    name: "Task overview",
  },
  {
    link: "/tasks",
    icon: faListCheck,
    name: "View all tasks",
  },
  {
    link: "/add",
    icon: faCalendarPlus,
    name: "Add new task",
  },
  {
    link: "/completed",
    icon: faCalendarCheck,
    name: "Completed tasks",
  },
];
