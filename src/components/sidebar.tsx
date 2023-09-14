import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarCheck,
  faCalendarPlus,
  faChartPie,
  faCubesStacked,
  faListCheck,
  faPowerOff,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo-alt.png";
import { logout } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";

export type NavProps = {
  link: string;
  icon: IconProp;
  name: string;
};

export const NavList = ({ link, icon, name }: NavProps) => {
  return (
    <Link to={link}>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={icon} />
        <span className="text-[#aab] font-bold text-sm">{name}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const systemLinks = [
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

  const taskLinks = [
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

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className="min-w-[16rem] h-full glass px-5 py-8 flex flex-col justify-between">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Link className="flex flex-col gap-1 items-center mb-10" to="/">
          <img className="h-10 aspect-auto" src={logo} alt="logo" />
          <span className="font-bold text-white text-xl">Brimborium</span>
        </Link>

        <ul className="flex flex-col gap-5 w-full border-2 border-gray-500 bg-[rgba(143,143,143,0.05)] rounded-xl px-8 py-6">
          {taskLinks.map((data) => {
            return (
              <NavList
                key={data.link}
                link={data.link}
                icon={data.icon}
                name={data.name}
              />
            );
          })}
        </ul>

        <div className="w-full rounded-xl border-2 border-gray-500 bg-[rgba(143,143,143,0.05)] px-8 py-6">
          <h2 className="font-bold pb-4">System Controls</h2>
          <ul className="flex flex-col gap-5 w-full ">
            {systemLinks.map((data) => {
              return (
                <NavList
                  key={data.link}
                  link={data.link}
                  icon={data.icon}
                  name={data.name}
                />
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <button onClick={handleLogout}>
            <FontAwesomeIcon className="text-red-500 mr-2" icon={faPowerOff} />
            Logout
          </button>
        </div>

        <p className="text-xs text-center text-slate-400">
          Designed with ❤ by{" "}
          <a target="_blank" href="https://resume.mayordesigns.com/">
            Mayor Biney
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
