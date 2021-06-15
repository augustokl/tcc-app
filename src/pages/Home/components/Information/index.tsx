import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { ApplicationState } from '../../../../store';
import { textColor } from '../../../../styles/colors';

import {  Container,
  InformationLine,
  InformationItem,
  InformationText,
  InformationValue,
  InformationValueText
} from './styles'

const Information: React.FC = () => {
  const { data, loading } = useSelector(
    (state: ApplicationState) => state.equipment,
  );

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="small" />
      </Container>
    );
  }

  const fanText = data.fan ? 'ON' : 'OFF';
  const sombriteText = data.sombrite ? 'ABE' : 'FEC';

  return (
      <Container>
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
      </Container>
  );
};

export default Information;
