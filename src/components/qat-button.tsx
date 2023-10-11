import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { QatButtonProps } from "../models/ui";

export const QatButton = ({ color, icon, title }: QatButtonProps) => {
  return (
    <div
      title={title}
      className={`w-[40px] h-[40px] rounded-full bg-${color} cursor-pointer flex justify-center items-center transition-[0.2s]`}
    >
      <FontAwesomeIcon className="text-lg" icon={icon} />
    </div>
  );
};
