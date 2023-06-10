import React, { useState } from 'react';

import SharedLayout from 'Components/SharedLayout/SharedLayout';
import Header from 'Components/Header/Header';
import { GlobalStyles } from 'utilities/GlobalStyles';
import Calculator from 'Components/Calculator/Calculator';
import Hero from 'Components/Hero/Hero';

const App: React.FC = () => {
  const [bmi, setBmi] = useState<number>(0);
  const [imperialBmi, setImperialBmi] = useState<number>(0);

  const [idealWeightRange, setIdealWeightRange] = useState<string>('');


  const calculateBMI = (weight: number, height: number): void => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(Number(bmi));

    const lowerLimit = 18.5 * (heightInMeters * heightInMeters);
    const upperLimit = 24.9 * (heightInMeters * heightInMeters);
    setIdealWeightRange(`${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`);
  };

  const calculateImperialBMI = (weightStones: number, weightPounds: number, heightFeet: number, heightInches: number): void => {
    const weightInPounds = (weightStones * 14) + weightPounds;
    const totalHeightInches = (heightFeet * 12) + heightInches;
    const bmi = ((weightInPounds / (totalHeightInches * totalHeightInches)) * 703).toFixed(2);
    setImperialBmi(Number(bmi));

    const lowerLimit = 18.5 * (totalHeightInches * totalHeightInches) / 703;
    const upperLimit = 24.9 * (totalHeightInches * totalHeightInches) / 703;

    setIdealWeightRange(`${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`);
  };


  const resetBmi = (): void => {
    setBmi(0)
    setImperialBmi(0)
  }

  return (
    <>
      <GlobalStyles />
      <SharedLayout>
        <Header />
        <Calculator calculateBMI={calculateBMI} bmi={bmi}
          idealWeightRange={idealWeightRange} imperialBmi={imperialBmi}
          calculateImperialBMI={calculateImperialBMI} resetBmi={resetBmi} />
        <Hero/>
      </SharedLayout>
    </>
  );
}

export default App;
