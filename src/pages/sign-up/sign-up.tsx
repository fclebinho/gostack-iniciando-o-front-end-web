import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';
import { Container, Content, Background } from './styles';
import { Input, Button } from '../../components';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input type="text" icon={FiUser} placeholder="Nome" />
          <Input type="text" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="signup">
          <FiArrowLeft />
          Já possuo uma conta
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
