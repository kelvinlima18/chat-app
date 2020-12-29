import React from 'react';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Bem-vindo novamente!</h1>
        <span>Loge para continuar</span>
        <form>
          <span>User or E-mail</span>
          <input type="text" />

          <span>Password</span>
          <input type="text" />

          <a href="forgot">Esqueci minha senha :/</a>

          <div className="buttons">
            <button className="signin" type="button">
              Entrar
            </button>
            <button className="signup" type="button">
              Criar conta
            </button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
