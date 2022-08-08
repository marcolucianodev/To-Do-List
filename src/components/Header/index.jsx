import { Container } from "./styles";
import menuIcon from "../../assets/images/menu-icon.png";
import cartIcon from "../../assets/images/cart.png";
import logo from "../../assets/images/logo-wedigi.png";

const Header = () => {
  return (
    <Container>
        <img src={menuIcon} alt="Menu Icon" />
        <img src={logo} alt="Logo We.Digi" />
        <img src={cartIcon} alt="Cart Shopping" />
    </Container>
  )
}

export default Header;