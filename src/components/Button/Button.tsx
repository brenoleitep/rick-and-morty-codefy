import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  text: string;
  redirectTo: string;
}

const Button = ({ text, redirectTo }: ButtonProps) => {
  return (
    <ButtonContainer>
      <Link to={redirectTo}>{text}</Link>
    </ButtonContainer>
  );
};

export default Button;
