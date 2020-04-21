import React from 'react';

import Theme from './styles';
import { SignIn, SignUp } from './pages';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <Theme />
    </>
  );
};

export default App;
