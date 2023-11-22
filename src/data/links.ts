import {
  faCalendarPlus,
  faChartPie,
  faCubesStacked,
  faListCheck,
  faProjectDiagram,
  faShield,
  faSliders,
  faUser,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import AddTask from "../components/addTask";

export const taskLinks = [
  {
    link: "/",
    icon: faCubesStacked,
    name: "Dashboard",
    modal: false,
  },
  {
    icon: faCalendarPlus,
    name: "New task",
    modal: true,
    component: AddTask,
  },
  {
    link: "/tasks",
    icon: faListCheck,
    name: "My tasks",
    modal: false,
  },
  {
    link: "/projects",
    icon: faProjectDiagram,
    name: "My projects",
    modal: false,
  },
  {
    link: "/team",
    icon: faUsersRectangle,
    name: "Team members",
    modal: false,
  },
];

export const systemLinks = [
  {
    link: "/reports",
    icon: faChartPie,
    name: "Reports",
    modal: false,
  },
  {
    link: "/profile",
    icon: faUser,
    name: "My profile",
    modal: false,
  },
  {
    link: "/security",
    icon: faShield,
    name: "Security",
    modal: false,
  },
  {
    link: "/settings",
    icon: faSliders,
    name: "Settings",
    modal: false,
  },
];
