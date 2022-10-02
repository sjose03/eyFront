import React from "react";
import LogoEyBranco from "../../assets/ey-logo-branco-header.png";

import { Container, DivIcons } from "./HeaderLogin.styled";
import { IoMdExit } from "react-icons/io";

const HeaderLogin: React.FC = () => {
  return (
    <Container>
      <img src={LogoEyBranco} alt="logo branco da ey" />
      <DivIcons>
        <button type="button">
          <span>Minhas Candidaturas</span>
          <IoMdExit
            style={{
              marginLeft: 5,
            }}
            color={"#FFF"}
            size={20}
          />
        </button>
        <div></div>
        <button type="button">
          <span>Meu Perfil</span>
          <IoMdExit
            style={{
              marginLeft: 5,
            }}
            color={"#FFF"}
            size={20}
          />
        </button>
        <div></div>
        <button type="button">
          <span>Sair</span>
          <IoMdExit
            style={{
              marginLeft: 5,
            }}
            color={"#FFF"}
            size={20}
          />
        </button>
      </DivIcons>
    </Container>
  );
};

export default HeaderLogin;
