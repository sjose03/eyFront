import React, { useContext } from "react";
import Logo1 from "../../assets/ey-login_1.png";
import Logo2 from "../../assets/logo-ey-branco2.png";
import BannerImg from "../../assets/login_banner.png";
import { useForm } from "react-hook-form";
import { warningMessage } from "../../utils/toastMensages";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

import {
  Container,
  Line,
  Blocks,
  Input,
  Button,
  ButtonFalse,
  Banner,
} from "./Login.styled";

interface IFormInput {
  email: string;
  password: string;
}

interface Props {
  title: any;
}

const Login: React.FC<Props> = ({ title }: Props) => {
  let navigate = useNavigate();
  const { user, signed, signIn } = useContext(AuthContext);

  console.log(user);
  console.log(signed);

  // const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<IFormInput>();

  const handleSign = async (email: string, password: string) => {
    if (!email || !password) {
      warningMessage("Preencha o seu email e senha!!");
    } else {
      signIn();
      if (user) {
        navigate("/");
      } else {
        navigate("/upload");
      }
    }
  };

  return (
    <Container>
      <Blocks>
        <img src={Logo1} alt="imagem logo 1" />
        <img src={Logo2} alt="imagem logo 2" />
        <form
          onSubmit={handleSubmit((data) => {
            const email = data.email;
            const password = data.password;
            handleSign(email, password);
          })}
        >
          <small>Faça seu login</small>
          <Input
            {...register("email")}
            type="text"
            placeholder="Email"
            name="email"
            id="email"
          />
          <Input
            {...register("password")}
            type="password"
            placeholder="Senha"
            name="password"
            id="password"
          />
          <Button type="submit">Entrar</Button>
          <ButtonFalse to="/first_access">Primeiro Acesso</ButtonFalse>
          <small>Esqueceu sua senha?</small>
        </form>
      </Blocks>
      <Line></Line>
      <Blocks>
        <Banner src={BannerImg} alt="banner" />
      </Blocks>
    </Container>
  );
};

export default Login;
