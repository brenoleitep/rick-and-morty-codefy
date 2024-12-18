import logo from "../../assets/logo.png";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Rick and Morty logo" />
    </HeaderContainer>
  );
};

export default Header;
