import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ApplicationState } from '../../store';
import { getDataRequest } from '../../store/modules/equipment/actions';
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

const Temperature: React.FC = () => {
  const { data, loading } = useSelector(
    (state: ApplicationState) => state.equipment,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataRequest());
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  const fanText = data.fan ? 'ON' : 'OFF';

  return (
    <Container>
      <InformationContainer>
        <InformationItem>
          <InformationText>Umidade</InformationText>
          <InformationValue>
            <Ionicons name="water-outline" color={textColor} size={22} />
            <InformationValueText>{data.humidity}%</InformationValueText>
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
            <InformationValueText textColor={data.fan ? '#b9ffb7' : '#ed374f'}>
              {fanText}
            </InformationValueText>
          </InformationValue>
        </InformationItem>
      </InformationContainer>
      <Content>
        <Title>Temperatura</Title>
        <TemperatureCircle fill={(data.temperature / 35) * 100}>
          {(fill) => (
            <TemperatureLabel>
              {Math.round((35 * fill) / 100)} °C
            </TemperatureLabel>
          )}
        </TemperatureCircle>
      </Content>
    </Container>
  );
};

export default Temperature;
