import { faSearchPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../redux/hooks";
import { useLocation } from "react-router-dom";
import pageTitles from "../data/pageTitles";

const Navigation = () => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="w-full h-[6.25rem] flex items-center justify-between px-12">
      <div className="flex items-center">
        <h2 className="font-bold text-white text-3xl">{pageTitles[path]}</h2>
      </div>
      <div className="flex items-center justify-between rounded-3xl glass max-h-11 w-[30%] min-w-[18.875rem] px-2">
        <input
          type="search"
          placeholder="👀&ensp;looking for a specific task?"
          className="bg-transparent p-2 w-full outline-none border-none text-center"
        />
        <button className="p-2">
          <FontAwesomeIcon className="text-lg" icon={faSearchPlus} fade />
        </button>
      </div>
      <div className="flex items-center">
        <div className="w-[2.8125rem] h-[2.8125rem] flex items-center justify-center rounded-full mr-3 glass">
          <FontAwesomeIcon className="text-xl" icon={faUser} />
        </div>
        <p>{user?.name}</p>
      </div>
    </nav>
  );
};

export default Navigation;
