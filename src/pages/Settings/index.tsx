import React, { useState, useCallback } from 'react';
import Slider from '@ptomasroos/react-native-multi-slider';

import {
  Container,
  Title,
  Category,
  CategoryTitle,
  CategoryValues,
  ButtonSave,
  ButtonText,
} from './styles';
import { orange } from '../../styles/colors';

const Settings: React.FC = () => {
  const [temp, setTemp] = useState([10, 20]);
  const [humidity, setHumidity] = useState([60, 80]);

  const handleTempChangeValues = useCallback((values) => setTemp(values), []);
  const handleHumidityChangeValues = useCallback(
    (values) => setHumidity(values),
    [],
  );

  return (
    <Container>
      <Title>Configurações</Title>
      <Category>
        <CategoryTitle>Temperatura</CategoryTitle>
        <CategoryValues>{`${temp[0]} °C - ${temp[1]} °C`}</CategoryValues>
      </Category>
      <Slider
        values={temp}
        sliderLength={350}
        selectedStyle={{
          backgroundColor: orange,
        }}
        onValuesChange={handleTempChangeValues}
        min={0}
        max={40}
        step={1}
        snapped
      />
      <Category>
        <CategoryTitle>Umidade</CategoryTitle>
        <CategoryValues>{`${humidity[0]}% - ${humidity[1]}%`}</CategoryValues>
      </Category>
      <Slider
        values={temp}
        sliderLength={350}
        selectedStyle={{
          backgroundColor: orange,
        }}
        onValuesChange={handleHumidityChangeValues}
        min={0}
        max={100}
        step={1}
        snapped
      />
      <ButtonSave>
        <ButtonText>Salvar</ButtonText>
      </ButtonSave>
    </Container>
  );
};

export default Settings;
