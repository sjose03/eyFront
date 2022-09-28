import React from 'react';
import Logo1 from '../../assets/ey-login_1.png'
import Logo2 from '../../assets/logo-ey-branco2.png'
import BannerImg from '../../assets/login_banner.png'

import { Container,Line,Blocks,Input,Button,Banner } from './FirstAccess.styled';

const Home: React.FC = () => {
  return <Container>
    <Blocks>
      <img src={Logo1} alt="imagem logo 1" />
      <img src={Logo2} alt="imagem logo 2" />
      <form action="get">
        <small>Faça seu Cadastro</small>
        <Input type="text" placeholder='Email' name="username" id="username" />
        <Input type="password" placeholder='Senha' name="password" id="password" />
        <Button>Criar conta</Button>
      </form>
    </Blocks>
    <Line></Line>
    <Blocks>
      <Banner src={BannerImg} alt="banner"/>
    </Blocks>
  </Container>;
}

export default Home;