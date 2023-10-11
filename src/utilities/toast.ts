import toast from "react-hot-toast";
import { style } from "../styles";

const toastIt = (message: string, icon?: string) =>
  toast(message, {
    icon: icon && icon,
    style,
  });

export default toastIt;
