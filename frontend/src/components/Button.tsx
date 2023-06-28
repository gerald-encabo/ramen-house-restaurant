import { ButtonProps } from "@/types/listTypes";
import "@/styles/button.scss";

const Button = ({button}: ButtonProps) => {
  return (
    <button>{button}</button>
  )
}
export default Button