import React from 'react';

import SharedLayout from 'Components/SharedLayout/SharedLayout';
import Header from 'Components/Header/Header';
import { GlobalStyles } from 'utilities/GlobalStyles';
import Calculator from 'Components/Calculator/Calculator';

const App:React.FC = () => {
  return (
    <>
      <GlobalStyles/>
      <SharedLayout>
        <Header />
        <Calculator/>
     </SharedLayout>
    </>
  );
}

export default App;
