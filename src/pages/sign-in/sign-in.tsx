import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';
import { Container, Content, Background } from './styles';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="signup">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
