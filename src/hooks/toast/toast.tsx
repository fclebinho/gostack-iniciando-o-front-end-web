import React, { createContext, useContext, useCallback } from 'react';

import { ToastNotification } from '../../components/toast-notification';

export interface ToastProps {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastProps>({} as ToastProps);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastNotification />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastProps => {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error('useToast must be used within an ToastProvider');

  return context;
};

export default ToastProvider;
