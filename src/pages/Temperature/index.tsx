import React from 'react';

import {
  Container,
  Title,
  TemperatureCircle,
  TemperatureLabel,
} from './styles';

const Temperature: React.FC = () => (
  <Container>
    <Title>Temperatura</Title>
    <TemperatureCircle fill={(32 / 35) * 100}>
      {(fill) => {
        console.log(fill, (10 / 40) * 100);
        return (
          <TemperatureLabel>
            {Math.round((35 * fill) / 100)} °C
          </TemperatureLabel>
        );
      }}
    </TemperatureCircle>
  </Container>
);

export default Temperature;
