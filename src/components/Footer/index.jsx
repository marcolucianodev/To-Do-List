import { Container, Copy } from "./styles";
import logo from "../../assets/images/logo-wedigi-white.png"

const Footer = () => {
  return (
    <Container>
      <Copy>
        todos os direitos reservados à: we.digi
      </Copy>
      <img src={logo} alt="Logo We.Digi" />
    </Container>
  )
}

export default Footer;