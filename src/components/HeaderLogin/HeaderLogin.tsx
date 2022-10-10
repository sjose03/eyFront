import React, { useContext } from "react";
import LogoEyBranco from "../../assets/ey-logo-branco-header.png";

import { Container, DivIcons, Button, Button2 } from "./HeaderLogin.styled";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const HeaderLogin: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <Link
        style={{
          margin: 10,
          width: "100%",
          height: "100%",
        }}
        to="/"
      >
        <img src={LogoEyBranco} alt="logo branco da ey" />
      </Link>
      <DivIcons>
        <Button to="/myCandidacy" type="button">
          <span>Minhas Candidaturas</span>
          <IoMdExit
            style={{
              marginLeft: 5,
            }}
            color={"#FFF"}
            size={20}
          />
        </Button>
        <div></div>
        <Button to="/myProfile" type="button">
          <span>Meu Perfil</span>
          <IoMdExit
            style={{
              marginLeft: 5,
            }}
            color={"#FFF"}
            size={20}
          />
        </Button>
        <div></div>
        <Button2 onClick={signOut} type="button">
          <span>Sair</span>
          <IoMdExit
            style={{
              marginLeft: 5,
            }}
            color={"#FFF"}
            size={20}
          />
        </Button2>
      </DivIcons>
    </Container>
  );
};

export default HeaderLogin;
