import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { darken } from 'polished';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { background, textColor } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: center;
  justify-content: center;
  padding: 50px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  color: ${textColor};
  font-size: 28px;
  background-color: transparent;
`;

export const TemperatureCircle = styled(AnimatedCircularProgress).attrs(() => ({
  size: 250,
  width: 5,
  backgroundWidth: 5,
  tintColor: '#00a600',
  tintColorSecondary: '#ff0000',
  backgroundColor: darken(0.2, background),
  arcSweepAngle: 240,
  rotation: 240,
  lineCap: 'round',
}))`
  margin-top: 20px;
`;

export const TemperatureLabel = styled.Text`
  font-size: 20px;
`;
