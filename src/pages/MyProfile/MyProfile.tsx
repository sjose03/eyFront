import React from "react";
import { Accordion, TextInput, Grid, Textarea } from "@mantine/core";
import {
  Container,
  Content,
  Button,
  Blocks,
  FirtsDiv,
  SecondDiv,
} from "./MyProfile.styled";
import { HeaderLogin } from "../../components/HeaderLogin";
import { AiOutlinePlus } from "react-icons/ai";
const MyProfile: React.FC = () => {
  return (
    <Container>
      <HeaderLogin></HeaderLogin>
      <Content>
        <FirtsDiv>
          <Blocks>Foto da capa</Blocks>
          <Blocks>Informacao de apresentacao do candidato</Blocks>
          <Blocks>
            Exibição da descrição que o canditado colocou no formulario
          </Blocks>
          <Blocks>Resumo das experiencias do candidato</Blocks>
          <Blocks>Competencia do candidato</Blocks>
          <Blocks>Competencia do candidato</Blocks>
        </FirtsDiv>
        <SecondDiv></SecondDiv>
      </Content>
    </Container>
  );
};

export default MyProfile;
