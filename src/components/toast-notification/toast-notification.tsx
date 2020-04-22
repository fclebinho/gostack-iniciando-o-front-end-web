import React from 'react';

import { Container } from './styles';
import { Toast } from './toast';

export interface ToastBaseProps {
  type?: 'info' | 'success' | 'error';
}

export interface ToastMessageProps extends ToastBaseProps {
  id: string;
  title: string;
  description?: string;
}

export interface ToastStyleProps extends ToastBaseProps {
  hasDescription: boolean;
}

export interface ToastNotificationProps {
  messages: ToastMessageProps[];
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  messages,
}) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastNotification;
