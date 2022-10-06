import React from "react";
import {
  Container,
  PictureProfile,
  Content,
  Blocks,
  FirtsDiv,
  SecondDiv,
} from "./MyProfile.styled";
import { HeaderLogin } from "../../components/HeaderLogin";
const MyProfile: React.FC = () => {
  return (
    <Container>
      <HeaderLogin></HeaderLogin>
      <Content>
        <FirtsDiv>
          <Blocks>
            <section>
              <PictureProfile>
                <p>Foto de Perfil</p>
              </PictureProfile>
            </section>

            <div>Informacao de apresentacao do candidato</div>
          </Blocks>
          <Blocks>
            Exibição da descrição que o canditado colocou no formulario
          </Blocks>
          <Blocks>Resumo das experiencias do candidato</Blocks>
          <Blocks>Competencia do candidato</Blocks>
          <Blocks>Competencia do candidato</Blocks>
        </FirtsDiv>
        <SecondDiv>
          <section>
            <p>listagem de vagas de acordo com o perfil do candidato</p>
          </section>
          <section>
            <p>listagem de cursos relacionados as competencias</p>
          </section>
          <section></section>
        </SecondDiv>
      </Content>
    </Container>
  );
};

export default MyProfile;
