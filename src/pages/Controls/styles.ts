import { lighten } from 'polished';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { background, orange, textColor } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: flex-start;
  padding: 90px ${Platform.OS === 'android' ? 150 : 0}px;
`;

export const Switch = styled.Switch.attrs(() => ({
  trackColor: { false: lighten(0.2, background), true: orange },
  thumbColor: '#f4f3f4',
  ios_backgroundColor: lighten(0.2, background),
}))``;

export const Title = styled.Text`
  font-family: 'Montserrat-bold';
  font-size: 28px;
  color: ${textColor};
  margin-bottom: 20px;
  padding: 0 30px;
`;

export const CategoryMain = styled.View`
  padding: 0 30px;
  margin: 20px 0 60px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.View`
  padding: 0 30px;
  margin: 20px 0;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  color: ${textColor};
  font-size: 20px;
  font-family: 'Montserrat-Regular';
`;
