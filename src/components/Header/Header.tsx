import React from "react";
import LogoEyBranco from "../../assets/ey-logo-branco-header.png";
import AuthContext from "../../contexts/authContext";
import { Container } from "./Header.styled";
import { IoMdExit } from "react-icons/io";
import { useContext } from "react";

const Header: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <img src={LogoEyBranco} alt="logo branco da ey" />

      <button
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFF",
          marginRight: "5%",
        }}
        onClick={signOut}
      >
        <span>Sair</span>
        <IoMdExit
          style={{
            transform: "rotateY(180deg) ",
            animation: "transform 0.3s ease-in-out",
            marginLeft: 10,
          }}
          color={"#FFF"}
          size={20}
        />
      </button>
    </Container>
  );
};

export default Header;
