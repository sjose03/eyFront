import React from "react";
import { BsUpload } from "react-icons/bs";

import {
  Container,
  Content,
  WelcomeBanner,
  UploadSection,
  BoxUpload,
  Button,
  ButtonUpload,
} from "./UploadPicture.styled";
import { Header } from "../../components/Header";
const UploadPicture: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <WelcomeBanner>
          <p>
            Agora falta pouco! <br></br> <br></br>Basta escolher uma foto de
            perfil e seu cadastro estará finalizado !
          </p>
        </WelcomeBanner>
        <UploadSection>
          <BoxUpload>
            <div>
              <p>
                Faça o upload da sua <br></br>foto de perfil
              </p>
              <ButtonUpload>
                <BsUpload style={{ marginTop: 15 }} size={30}></BsUpload>
              </ButtonUpload>
            </div>
          </BoxUpload>
          <Button to="/myProfile">Proximo</Button>
        </UploadSection>
      </Content>
    </Container>
  );
};

export default UploadPicture;
