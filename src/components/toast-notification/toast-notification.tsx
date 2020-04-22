import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Content } from './styles';

export interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription?: boolean;
}

export const ToastNotification: React.FC = () => {
  return (
    <Container>
      <Content hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Content>

      <Content type="success">
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Content>

      <Content type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Content>
    </Container>
  );
};

export default ToastNotification;
