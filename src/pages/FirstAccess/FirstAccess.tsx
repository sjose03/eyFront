import React from "react";
import Logo1 from "../../assets/ey-login_1.png";
import Logo2 from "../../assets/logo-ey-branco2.png";
import BannerImg from "../../assets/login_banner.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { warningMessage } from "../../utils/toastMensages";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Line,
  Blocks,
  Input,
  Button,
  Banner,
} from "./FirstAccess.styled";
interface IFormInput {
  email: string;
  password: string;
}

const FirstAccess: React.FC = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();

  const handleSign = async (email: string, password: string) => {
    if (!email || !password) {
      warningMessage("Preencha o seu email e senha!!");
    } else {
      // const response = await api.post("/api/Authentication", data);
      // console.log(response);
      navigate("/");
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const email = data.email;
    const password = data.password;
    handleSign(email, password);
  };
  return (
    <Container>
      <Blocks>
        <img src={Logo1} alt="imagem logo 1" />
        <img src={Logo2} alt="imagem logo 2" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <small>Faça seu Cadastro</small>
          <Input
            type="text"
            placeholder="Email"
            {...register("email")}
            name="email"
            id="email"
          />
          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
            name="password"
            id="password"
          />
          <Button type="submit">Criar conta</Button>
        </form>
      </Blocks>
      <Line></Line>
      <Blocks>
        <Banner src={BannerImg} alt="banner" />
      </Blocks>
    </Container>
  );
};

export default FirstAccess;
