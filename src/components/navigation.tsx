import { faSearchPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../redux/hooks";

const Navigation = () => {
  const user = useAppSelector(state=>state.user)

  return (
    <nav className="w-full h-[100px] flex items-center justify-between px-12">
      <div className="flex items-center">
        <h2 className="font-bold text-white text-3xl">Dashboard</h2>
      </div>
      <div className="flex items-center justify-between rounded-3xl border-2 border-gray-400 max-h-11 min-w-[25%] px-2">
        <input
          type="search"
          placeholder="👀 &ensp; looking for a specific task?"
          className="bg-transparent p-2 w-full outline-none border-none"
        />
        <button className="p-2">
          <FontAwesomeIcon className="text-lg" icon={faSearchPlus} fade />
        </button>
      </div>
      <div className="flex items-center">
        <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full mr-3 glass">
          <FontAwesomeIcon className="text-xl" icon={faUser} bounce />
        </div>
          <p>{user?.name}</p>
      </div>
    </nav>
  );
};

export default Navigation;
