import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Draggable from "react-draggable";
import { qatButtons } from "../data/qat-buttons";
import type { QatButtonProps, OpenModal } from "../models/ui";
import { QatButton } from "./qat-button";

const Qat = ({ openModal }: Partial<OpenModal>) => {
  const [isQatOpen, setIsQatOpen] = useState<boolean>(false);

  const toggleQat = () => {
    const element = document.getElementById("qat_btn");

    if (!element) {
      return;
    }

    const rotationAngle = element.style.transform;
    const isOpen = rotationAngle === "rotate(45deg)";

    element.style.transform = isOpen ? "rotate(0)" : "rotate(45deg)";
    setIsQatOpen(!isOpen);
  };

  const resetQat = () => {
    const element = document.getElementById("qat_btn");

    if (!element) {
      return;
    }

    if (isQatOpen) {
      setTimeout(() => {
        element.style.transform = "rotate(0)";
        setIsQatOpen(false);
      }, 5000);
    }
  };

  return (
    <Draggable>
      <div
        onMouseLeave={resetQat}
        className="fixed bottom-10 right-10 flex flex-col gap-2 items-end"
      >
        {isQatOpen && (
          <div className="flex flex-col gap-2">
            {qatButtons.map((qat: QatButtonProps) => {
              return (
                <QatButton
                  key={qat.title}
                  color={qat.color}
                  icon={qat.icon}
                  title={qat.title}
                  openModal={qat.component && openModal}
                  component={qat.component}
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
    </Draggable>
  );
};

export default Qat;
