import React from 'react';

import { AuthProvider } from './context';
import Theme from './styles';
import { SignIn, SignUp } from './pages';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <Theme />
    </>
  );
};

export default App;
