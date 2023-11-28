import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { QatButtonProps } from "../models/ui";
import { colorVariants } from "../styles";

export const QatButton = ({
  color,
  icon,
  title,
  openModal,
  component,
}: QatButtonProps) => {

  return (
    <div
      title={title}
      onClick={openModal && (() => openModal(true, component!))}
      className={`${colorVariants[color]} w-[40px] h-[40px] rounded-full cursor-pointer flex justify-center items-center transition-all`}
    >
      <FontAwesomeIcon className="text-lg" icon={icon} />
    </div>
  );
};
