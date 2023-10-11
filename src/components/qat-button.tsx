import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { QatButtonProps } from "../models/ui";

export const QatButton = ({ color, icon, title }: QatButtonProps) => {
  return (
    <div
      title={title}
      className={`bg-${color} w-[40px] h-[40px] rounded-full cursor-pointer flex justify-center items-center transition-all`}
    >
      <FontAwesomeIcon className="text-lg" icon={icon} />
    </div>
  );
};
