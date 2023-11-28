import toast from "react-hot-toast";
import { toastStyle } from "../styles";

const toastIt = (message: string, icon?: string) =>
  toast(message, {
    icon: icon && icon,
    style: toastStyle,
  });

export default toastIt;
