import React from "react";
import { Container, Content, FirtsDiv, SecondDiv } from "./Candidate.styled";
import { HeaderLogin } from "../../components/HeaderLogin";
const Candidate: React.FC = () => {
  return (
    <Container>
      <HeaderLogin></HeaderLogin>
      <Content>
        <FirtsDiv>
          <section>Informacoes sobre a vaga de forma detalhada</section>
          <section>
            Mensagens de candidatos e do dono da vaga para acompanhar status
            geral da vaga e tirar dúvidas
          </section>
        </FirtsDiv>
        <SecondDiv>
          <p>
            Informacoes sobre a área relacionada a vaga, cursos complementares
            para especialização e preparação para a vaga. Se houver algum teste
            para fazer antes de se candidatar aparecerá em forma de lista, neste
            campo para o candidato possa ver. Informacoes do Gestor da área e
            comentários internos dos colaboradores sobre o gestor, podendo haver
            comentarios feitos sem identificação ou com.
          </p>
        </SecondDiv>
      </Content>
    </Container>
  );
};

export default Candidate;
