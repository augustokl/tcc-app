import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { ApplicationState } from '../../store';
import { getDataRequest } from '../../store/modules/equipment/actions';
import { textColor } from '../../styles/colors';

import {
  Container,
  InformationContainer,
  InformationLine,
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
  const isFocused = useIsFocused();

  const { data, loading } = useSelector(
    (state: ApplicationState) => state.equipment,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataRequest());
  }, [isFocused]);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  const fanText = data.fan ? 'ON' : 'OFF';
  const sombriteText = data.sombrite ? 'ABE' : 'FEC';

  return (
    <Container>
      <InformationContainer>
        <InformationLine>
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
              <InformationValueText>{data.uv}</InformationValueText>
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
        </InformationLine>
        <InformationLine>
          <InformationItem>
            <InformationText>Umi. Solo</InformationText>
            <InformationValue>
              <Ionicons name="water-outline" color={textColor} size={22} />
              <InformationValueText>{data.soil_humidity}%</InformationValueText>
            </InformationValue>
          </InformationItem>
          <InformationItem>
            <InformationText>Vazão</InformationText>
            <InformationValue>
              <Entypo name="air" color={textColor} size={22} />
              <InformationValueText>{data.water_flow}</InformationValueText>
            </InformationValue>
          </InformationItem>
          <InformationItem>
            <InformationText>Sombrite</InformationText>
            <InformationValue>
              <MaterialIcons name="tent" color={textColor} size={22} />
              <InformationValueText textColor={data.sombrite ? '#b9ffb7' : '#ed374f'}>
                {sombriteText}
              </InformationValueText>
            </InformationValue>
          </InformationItem>
        </InformationLine>
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
