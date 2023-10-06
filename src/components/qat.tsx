import {
  faCalculator,
  faCalendarPlus,
  faInbox,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Qat = () => {
  const toggleQat = () => {
    const element = document.getElementById("qat_btn");

    const angle = element!.style.transform;
    if (angle !== "rotate(45deg)") {
      element!.style.transform = "rotate(45deg)";
    } else {
      element!.style.transform = "rotate(0)";
    }
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-2 items-end">
      <div className="flex flex-col gap-2">
        <div className="w-[40px] h-[40px] rounded-full bg-orange-500 cursor-pointer flex justify-center items-center transition-[0.2s]">
          <FontAwesomeIcon className="text-lg" icon={faInbox} />
        </div>

        <div
          title="Calculator"
          className="w-[40px] h-[40px] rounded-full bg-red-500 cursor-pointer flex justify-center items-center transition-[0.2s]"
        >
          <FontAwesomeIcon className="text-lg" icon={faCalculator} />
        </div>

        <div
          title="New task"
          className="w-[40px] h-[40px] rounded-full bg-blue-500 cursor-pointer flex justify-center items-center transition-[0.2s]"
        >
          <FontAwesomeIcon className="text-lg" icon={faCalendarPlus} />
        </div>
      </div>

      <div
        id="qat_btn"
        onClick={toggleQat}
        className="w-[40px] h-[40px] rounded-full bg-green-500 cursor-pointer flex justify-center items-center transition-[0.2s]"
      >
        <FontAwesomeIcon className="text-lg" icon={faPlus} />
      </div>
    </div>
  );
};

export const QatButton = () => {
  return (
    <div className="w-[40px] h-[40px] rounded-full bg-blue-500 cursor-pointer flex justify-center items-center transition-[0.2s]">
      <FontAwesomeIcon className="text-lg" icon={faPlus} />
    </div>
  );
};

export default Qat;
