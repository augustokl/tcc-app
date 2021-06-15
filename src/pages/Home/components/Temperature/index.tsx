import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'


import { ApplicationState } from '../../../../store';

import {
  Container,
  Title,
  TemperatureCircle,
  TemperatureLabel,
  LastDate,
} from './styles';

const Temperature: React.FC = () => {

  const { data, loading } = useSelector(
    (state: ApplicationState) => state.equipment,
  );

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  const date = data.created_at ? format(new Date(data.created_at), 'dd/MM/yyyy HH:mm') : ''

  return (
    <Container>
        <Title>Temperatura</Title>
        <TemperatureCircle fill={(data.temperature / 35) * 100}>
          {(fill: any) => (
            <TemperatureLabel>
              {Math.round((35 * fill) / 100)} °C
            </TemperatureLabel>
          )}
        </TemperatureCircle>
        <LastDate>
          Última leitura: {date}
        </LastDate>
    </Container>
  );
};

export default Temperature;
