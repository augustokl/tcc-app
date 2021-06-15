import styled from 'styled-components/native';
import { darken } from 'polished';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { background, textColor, orange } from '../../../../styles/colors';

export const Container = styled.View`
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

export const LastDate = styled.Text`
  font-size: 14px;
  color: ${textColor};
  font-family: 'Montserrat-medium';
`;