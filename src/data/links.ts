import { faCalendarCheck, faCalendarPlus, faChartPie, faCubesStacked, faListCheck, faSliders } from "@fortawesome/free-solid-svg-icons";

export const systemLinks = [
  {
    link: "/reports",
    icon: faChartPie,
    name: "Reports",
    modal: false
  },
  {
    link: "/settings",
    icon: faSliders,
    name: "Settings",
    modal: false
  },
];

export const taskLinks = [
  {
    link: "/",
    icon: faCubesStacked,
    name: "Task overview",
    modal: false
  },
  {
    link: "/tasks",
    icon: faListCheck,
    name: "View all tasks",
    modal: false
  },
  {
    icon: faCalendarPlus,
    name: "Add new task",
    modal: true,
  },
  {
    link: "/completed",
    icon: faCalendarCheck,
    name: "Completed tasks",
    modal: false,
  },
];
