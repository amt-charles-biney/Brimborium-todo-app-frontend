import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../config/axios";
import { systemLinks, taskLinks } from "../data/links";
import { NavProps, OpenModal } from "../models/ui";
import { logout } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import toastIt from "../utilities/toast";
import { resetTask } from "../redux/taskSlice";

export const NavList = ({
  link,
  icon,
  name,
  isMini,
  openModal,
  component,
}: NavProps) => {
  return openModal ? (
    <span
      onClick={() => openModal(true, component!)}
      className="cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon title={name} icon={icon} />
        {!isMini && (
          <span className="text-[#aab] font-bold text-sm">{name}</span>
        )}
      </div>
    </span>
  ) : (
    <Link to={link!}>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon title={name} icon={icon} />{" "}
        {!isMini && (
          <span className="text-[#aab] font-bold text-sm">{name}</span>
        )}
      </div>
    </Link>
  );
};

const Sidebar = ({ openModal, isMini }: OpenModal) => {
  const dispatch = useAppDispatch();

  async function handleLogout() {
    try {
      dispatch(resetTask());
      dispatch(logout());

      await api.post("/auth/logout/");

      toastIt("See you soon.", "😊");
    } catch (error) {
      toastIt(
        "An error occurred but don't worry, you are still logged out.",
        "🙆🏽‍♀️"
      );
    }
  }

  return (
    <div className="w-full h-full glass px-5 py-7 flex flex-col justify-between">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Link className="flex flex-col gap-1 items-center mb-10" to="/">
          <img className="h-10 aspect-auto" src={logo} alt="logo" />

          <span className="font-bold text-white text-xl h-[1.25rem]">
            {!isMini && "Brimborium"}
          </span>
        </Link>

        <ul
          className={`flex flex-col gap-5 w-full glass bg-[rgba(143,143,143,0.05)] rounded-xl ${
            isMini ? "px-4" : "px-8"
          } py-6`}
        >
          {taskLinks.map((data) => {
            return data.modal ? (
              <li
                key={data.name}
                className={`transition-all ${
                  isMini
                    ? "hover:text-green-400"
                    : "hover:pl-2 hover:border-l-8"
                }`}
              >
                <NavList
                  icon={data.icon}
                  name={data.name}
                  openModal={openModal}
                  component={data.component}
                  isMini={!isMini}
                />
              </li>
            ) : (
              <li
                key={data.name}
                className={`transition-all ${
                  isMini
                    ? "hover:text-green-400"
                    : "hover:pl-2 hover:border-l-8"
                }`}
              >
                <NavList
                  link={data.link}
                  icon={data.icon}
                  name={data.name}
                  isMini={!isMini}
                />
              </li>
            );
          })}
        </ul>

        <div
          className={`w-full rounded-xl glass bg-[rgba(143,143,143,0.05)] ${
            isMini ? "px-4" : "px-8"
          } py-6`}
        >
          {!isMini && <h2 className="font-bold pb-4">System Controls</h2>}
          <ul className="flex flex-col gap-5 w-full ">
            {systemLinks.map((data) => {
              return data.modal ? (
                <li
                  key={data.name}
                  className={`transition-all ${
                    isMini
                      ? "hover:text-green-400"
                      : "hover:pl-2 hover:border-l-8"
                  }`}
                >
                  <NavList
                    icon={data.icon}
                    name={data.name}
                    openModal={openModal}
                    isMini={!isMini}
                  />
                </li>
              ) : (
                <li
                  key={data.name}
                  className={`transition-all ${
                    isMini
                      ? "hover:text-green-400"
                      : "hover:pl-2 hover:border-l-8"
                  }`}
                >
                  <NavList
                    link={data.link}
                    icon={data.icon}
                    name={data.name}
                    isMini={!isMini}
                  />
                </li>
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

        {!isMini && (
          <p className="text-xs text-center text-slate-400">
            Designed with ❤ by{" "}
            <a target="_blank" href="https://resume.mayordesigns.com/">
              Mayor Biney
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
