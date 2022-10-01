import React from "react";
import { BsUpload } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

import {
  Container,
  Content,
  WelcomeBanner,
  UploadSection,
  BoxUpload,
  Upload,
  Line,
  Button,
} from "./Upload.styled";
import { Header } from "../../components/Header";
import BannerEYPreencher from "../../assets/banner-ey-preencher.png";
const UploadPage: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <WelcomeBanner>
          <p>
            Bem vindo a plataforma de recrutamento e selecao da{" "}
            <strong>EY!</strong>
          </p>
          <img src={BannerEYPreencher} alt="banner ey" />
        </WelcomeBanner>
        <UploadSection>
          <p>
            Vamos começar fazendo o seu cadastro para podermos montar um perfil
            de possíveis vagas que possam se encaixar com os seus objetivos!
          </p>
          <p>
            Aqui na <strong>EY Recruiter</strong> você pode preencher as
            informações via formlário ou, se preferir, pode fazer a importação
            do seu <strong>Curriculum</strong> mais{" "}
            <strong>recente e atualizado</strong>
          </p>
          <BoxUpload>
            <Upload>
              <FaWpforms style={{ marginTop: 30 }} size={60}></FaWpforms>
              <Button>Ir para o Formulario</Button>
            </Upload>
            <Line></Line>
            <Upload>
              <BsUpload style={{ marginTop: 30 }} size={60}></BsUpload>
              <Button>Importar CV</Button>
            </Upload>
          </BoxUpload>
        </UploadSection>
      </Content>
    </Container>
  );
};

export default UploadPage;
