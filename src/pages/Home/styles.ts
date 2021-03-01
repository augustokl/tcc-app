import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { darken } from 'polished';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { background, textColor, orange } from '../../styles/colors';

interface InformationValueTextType extends Text {
  textColor?: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: center;
  padding: 50px ${Platform.OS === 'android' ? 150 : 0}px;
`;

export const InformationContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 60px;
  border-bottom-color: #808080;
  border-bottom-width: 1px;
`;

export const InformationItem = styled.View`
  justify-content: space-between;
  align-items: center;
  color: ${textColor};
`;

export const InformationText = styled.Text`
  color: ${darken(0.05, textColor)};
  font-family: 'Montserrat-light';
`;

export const InformationValue = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InformationValueText = styled.Text<InformationValueTextType>`
  color: ${(props) => props.textColor || textColor};
  margin-left: 5px;
  font-size: 18px;
  font-family: 'Montserrat-Regular';
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${textColor};
  font-size: 28px;
  background-color: transparent;
  font-family: 'Montserrat-medium';
`;

export const TemperatureCircle = styled(AnimatedCircularProgress).attrs(() => ({
  size: 250,
  width: 5,
  backgroundWidth: 5,
  tintColor: orange,
  backgroundColor: darken(0.2, background),
  arcSweepAngle: 240,
  rotation: 240,
  lineCap: 'round',
}))`
  margin-top: 20px;
`;

export const TemperatureLabel = styled.Text`
  font-size: 48px;
  color: ${orange};
  font-family: 'Montserrat-medium';
`;
