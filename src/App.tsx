import React from 'react';

import Theme from './styles';
import { SignIn } from './pages';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <Theme />
    </>
  );
};

export default App;
