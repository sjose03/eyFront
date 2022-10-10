import React from "react";
import {
  Container,
  Content,
  FirtsDiv,
  Blocks,
  SecondDiv,
  Button,
  DivTitle,
} from "./HomeWithoutLogin.styled";
import ImagHomeBanner from "../../assets/img_home_banner.webp";
import ImagHomeVagas from "../../assets/img_home_vagas.jpg";
import { HeaderHome } from "../../components/HeaderHome";
const HomeWithoutLogin: React.FC = () => {
  return (
    <Container>
      <HeaderHome></HeaderHome>
      <Content>
        <FirtsDiv>
          <img src={ImagHomeBanner} alt="banner_img" />
        </FirtsDiv>
        <Blocks>
          <h2>Vagas Disponiveis</h2>
        </Blocks>
        <SecondDiv>
          <section>
            <article>
              <DivTitle>
                <p>ID da Vaga</p>
                <p>823722</p>
              </DivTitle>
              <DivTitle>
                <p>Cargo</p>
                <p>Trainees 2022</p>
              </DivTitle>
              <DivTitle>
                <p>Postou</p>
                <p>Nova</p>
              </DivTitle>
              <Button to="/login">Quero me candidatar</Button>
            </article>
            <article>
              <DivTitle>
                <p>ID da Vaga</p>
                <p>918145</p>
              </DivTitle>
              <DivTitle>
                <p>Cargo</p>
                <p>Trainee Consulting</p>
              </DivTitle>
              <DivTitle>
                <p>Postou</p>
                <p>29 de setembro</p>
              </DivTitle>
              <Button to="/login">Quero me candidatar</Button>
            </article>
            <article>
              <DivTitle>
                <p>ID da Vaga</p>
                <p>918145</p>
              </DivTitle>
              <DivTitle>
                <p>Cargo</p>
                <p>Trainee Consulting</p>
              </DivTitle>
              <DivTitle>
                <p>Postou</p>
                <p>29 de setembro</p>
              </DivTitle>
              <Button to="/login">Quero me candidatar</Button>
            </article>
            <article>
              <DivTitle>
                <p>ID da Vaga</p>
                <p>918145</p>
              </DivTitle>
              <DivTitle>
                <p>Cargo</p>
                <p>Trainee Consulting</p>
              </DivTitle>
              <DivTitle>
                <p>Postou</p>
                <p>29 de setembro</p>
              </DivTitle>

              <Button to="/login">Quero me candidatar</Button>
            </article>
          </section>
          <section>
            <img src={ImagHomeVagas} alt="" />
          </section>
        </SecondDiv>
      </Content>
    </Container>
  );
};

export default HomeWithoutLogin;
