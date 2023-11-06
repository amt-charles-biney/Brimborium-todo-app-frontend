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
    icon: faCalendarPlus,
    name: "Add new task",
    modal: true
  },
  {
    link: "/completed",
    icon: faCalendarCheck,
    name: "Completed tasks",
  },
];
