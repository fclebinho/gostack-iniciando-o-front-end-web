import React from 'react';

import { HooksProvider } from './hooks';
import Theme from './styles';
import { SignIn, SignUp } from './pages';

const App: React.FC = () => {
  return (
    <>
      <HooksProvider>
        <SignIn />
      </HooksProvider>
      <Theme />
    </>
  );
};

export default App;
