import React, { useState } from 'react';

import SharedLayout from 'Components/SharedLayout/SharedLayout';
import Header from 'Components/Header/Header';
import { GlobalStyles } from 'utilities/GlobalStyles';
import Calculator from 'Components/Calculator/Calculator';

const App: React.FC = () => {
  const [bmi, setBmi] = useState<number>(0);
  const [idealWeightRange, setIdealWeightRange] = useState<string>('');
  

  const calculateBMI = (weight: number, height: number): void => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(Number(bmi));

    const lowerLimit = 18.5 * (heightInMeters * heightInMeters);
    const upperLimit = 24.9 * (heightInMeters * heightInMeters);
    setIdealWeightRange(`${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`);
  };



  return (
    <>
      <GlobalStyles/>
      <SharedLayout>
        <Header />
        <Calculator calculateBMI={calculateBMI} bmi={bmi} idealWeightRange={idealWeightRange} />
     </SharedLayout>
    </>
  );
}

export default App;
