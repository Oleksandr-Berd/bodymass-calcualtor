import React, { useState } from 'react';

import SharedLayout from 'Components/SharedLayout/SharedLayout';
import Header from 'Components/Header/Header';
import { GlobalStyles } from 'utilities/GlobalStyles';
import Calculator from 'Components/Calculator/Calculator';

const App: React.FC = () => {
  const [bmi, setBmi] = useState <number>(0)

  const calculateBMI = (weight: number, height: number): void => {
    const heightInMeters = height / 100;
    const bmi = (weight / heightInMeters/10).toFixed(2);
    setBmi(Number(bmi))
  }

  console.log(bmi);


  return (
    <>
      <GlobalStyles/>
      <SharedLayout>
        <Header />
        <Calculator calculateBMI={calculateBMI } />
     </SharedLayout>
    </>
  );
}

export default App;
