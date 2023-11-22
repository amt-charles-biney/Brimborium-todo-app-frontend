import {
  faCog,
  faPause,
  faPlay,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Pomodoro = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handlePomodoro = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="flex items-center justify-center relative mt-2">
      <svg
        width="12.5rem"
        height="12.5rem"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M 50 180 A 90 90 0 1 1 150 180"
          strokeLinecap="round"
          strokeWidth={8}
          stroke="cyan"
          fill="transparent"
        />
      </svg>

      <div className="absolute flex flex-col justify-center items-center top-[3.125rem]">
        <span className="text-[3rem] font-mono font-black leading-[6.875rem]">
          25:00
        </span>
        <div className="flex items-end gap-2">
          <button
            title="Reset timer"
            className="w-[1.5625rem] opacity-30 hover:opacity-100 h-[1.5625rem] bg-rose-500 text-black rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faRedo} width={13}></FontAwesomeIcon>
          </button>
          <button
            onClick={handlePomodoro}
            className={`w-[3.75rem] h-[3.75rem] ${
              isPaused ? "bg-[crimson]" : "bg-[darkcyan]"
            } flex rounded-full items-center justify-center`}
          >
            {isPaused ? (
              <FontAwesomeIcon className="text-3xl" icon={faPause} />
            ) : (
              <FontAwesomeIcon className="text-3xl" icon={faPlay} />
            )}
          </button>
          <button
            title="Timer options"
            className="w-[1.5625rem] opacity-30 hover:opacity-100 h-[1.5625rem] bg-gray-300 text-black rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faCog} width={13}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
