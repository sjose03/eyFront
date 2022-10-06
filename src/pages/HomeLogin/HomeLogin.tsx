import React from "react";
import {
  Container,
  Content,
  FirtsDiv,
  Blocks,
  PictureProfile,
  SecondDiv,
  Button,
} from "./HomeLogin.styled";
import { HeaderLogin } from "../../components/HeaderLogin";
const HomeLogin: React.FC = () => {
  return (
    <Container>
      <HeaderLogin></HeaderLogin>
      <Content>
        <FirtsDiv>
          <PictureProfile>
            <p>Imagem de perfil do colaborador</p>
          </PictureProfile>
          <section>Informaçoes do usuario</section>
          <section>Informaçoes das ultimas vagas</section>
        </FirtsDiv>
        <Blocks>
          <h2>Vagas Disponiveis</h2>
        </Blocks>
        <SecondDiv>
          <section>
            <article>
              <p>ID da Vaga</p>
              <p>Breve descrição</p>
              <p>Senioridade</p>
              <Button>Quero me candidatar</Button>
            </article>
            <article>
              <p>ID da Vaga</p>
              <p>Breve descrição</p>
              <p>Senioridade</p>
              <Button>Quero me candidatar</Button>
            </article>
            <article>
              <p>ID da Vaga</p>
              <p>Breve descrição</p>
              <p>Senioridade</p>
              <Button>Quero me candidatar</Button>
            </article>
            <article>
              <p>ID da Vaga</p>
              <p>Breve descrição</p>
              <p>Senioridade</p>
              <Button>Quero me candidatar</Button>
            </article>
          </section>
          <section>Extra Content</section>
        </SecondDiv>
      </Content>
    </Container>
  );
};

export default HomeLogin;
