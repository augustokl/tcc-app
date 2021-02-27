import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { textColor } from '../../styles/colors';

import {
  Container,
  InformationContainer,
  InformationItem,
  InformationText,
  InformationValue,
  InformationValueText,
  Content,
  Title,
  TemperatureCircle,
  TemperatureLabel,
} from './styles';

const Temperature: React.FC = () => (
  <Container>
    <InformationContainer>
      <InformationItem>
        <InformationText>Umidade</InformationText>
        <InformationValue>
          <Ionicons name="water-outline" color={textColor} size={22} />
          <InformationValueText>60%</InformationValueText>
        </InformationValue>
      </InformationItem>
      <InformationItem>
        <InformationText>UV</InformationText>
        <InformationValue>
          <Ionicons name="sunny-outline" color={textColor} size={22} />
          <InformationValueText>6.5</InformationValueText>
        </InformationValue>
      </InformationItem>
      <InformationItem>
        <InformationText>Ventilação</InformationText>
        <InformationValue>
          <MaterialIcons name="fan" color={textColor} size={22} />
          <InformationValueText textColor="#b9ffb7">ON</InformationValueText>
        </InformationValue>
      </InformationItem>
    </InformationContainer>
    <Content>
      <Title>Temperatura</Title>
      <TemperatureCircle fill={(10 / 35) * 100}>
        {(fill) => (
          <TemperatureLabel>
            {Math.round((35 * fill) / 100)} °C
          </TemperatureLabel>
        )}
      </TemperatureCircle>
    </Content>
  </Container>
);

export default Temperature;
