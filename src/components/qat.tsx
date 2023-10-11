import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { qatButtons } from "../data/qat-buttons";
import type { QatButton as QatButtonType } from "../models/ui";
import { QatButton } from "./qat-button";

const Qat = () => {
  const [isQatOpen, setIsQatOpen] = useState(false);

  const toggleQat = () => {
    const element = document.getElementById("qat_btn");

    const angle = element!.style.transform;
    if (angle !== "rotate(45deg)") {
      element!.style.transform = "rotate(45deg)";
    } else {
      element!.style.transform = "rotate(0)";
    }

    setIsQatOpen(!isQatOpen);
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-2 items-end">
      {isQatOpen && (
        <div className="flex flex-col gap-2">
          {qatButtons.map((qat: QatButtonType) => {
            return (
              <QatButton
                key={qat.title}
                color={qat.color}
                icon={qat.icon}
                title={qat.title}
              />
            );
          })}
        </div>
      )}

      <div
        id="qat_btn"
        onClick={toggleQat}
        className="w-[40px] h-[40px] rounded-full bg-green-500 cursor-pointer flex justify-center items-center transition"
      >
        <FontAwesomeIcon className="text-lg" icon={faPlus} />
      </div>
    </div>
  );
};

export default Qat;
