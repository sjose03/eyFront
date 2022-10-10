import React from "react";
import {
  Container,
  Content,
  FirtsDiv,
  SecondDiv,
} from "./ApplicationList.styled";
import { HeaderLogin } from "../../components/HeaderLogin";
const ApplicationList: React.FC = () => {
  return (
    <Container>
      <HeaderLogin></HeaderLogin>
      <Content>
        <FirtsDiv>
          <section>Lista com as vagas que o candidato aplicou-se</section>
        </FirtsDiv>
        <SecondDiv>
          <p>AD sobre a EY, Video, anuncio, etc...</p>
        </SecondDiv>
      </Content>
    </Container>
  );
};

export default ApplicationList;
