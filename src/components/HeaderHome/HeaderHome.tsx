import React from "react";
import LogoEyBranco from "../../assets/ey-logo-branco-header.png";

import { Container } from "./HeaderHome.styled";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderHome: React.FC = () => {
  return (
    <Container>
      <img src={LogoEyBranco} alt="logo branco da ey" />

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFF",
          marginRight: "5%",
        }}
        to="/login"
      >
        <span>Login</span>
        <IoMdPerson
          style={{
            transform: "rotateY(180deg) ",
            animation: "transform 0.3s ease-in-out",
            marginLeft: 10,
          }}
          color={"#FFF"}
          size={20}
        />
      </Link>
    </Container>
  );
};

export default HeaderHome;
