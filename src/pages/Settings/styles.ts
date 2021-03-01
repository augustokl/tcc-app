import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { background, orange, textColor } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: flex-start;
  padding: 90px ${Platform.OS === 'android' ? 150 : 30}px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-bold';
  font-size: 28px;
  color: ${textColor};
  margin-bottom: 40px;
`;

export const Category = styled.View`
  margin: 30px 0;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  color: ${textColor};
  font-size: 20px;
  font-family: 'Montserrat-medium';
`;

export const CategoryValues = styled.Text`
  font-size: 18px;
  color: ${orange};
  font-family: 'Montserrat-light';
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: auto;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${orange};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-medium';
  font-size: 18px;
  color: ${background};
  padding: 15px 120px;
`;
