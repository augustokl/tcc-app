import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { background, orange, textColor } from '../../styles/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  padding: 90px ${Platform.OS === 'android' ? 150 : 30}px 50px;
`;

export const Content = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false
}))`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-bold';
  font-size: 24px;
  color: ${textColor};
  margin-bottom: 40px;
`;

export const Category = styled.View`
  margin: 30px 0;
  width: 100%;

  flex-direction: column;
`;

export const CategoryTitle = styled.Text`
  color: ${textColor};
  font-size: 20px;
  font-family: 'Montserrat-medium';

`;

export const CategoryValues = styled.Text`
  font-size: 16px;
  color: ${orange};
  font-family: 'Montserrat-light';

  margin-top: 10px;
`;

export const InputTime = styled(TextInputMask)`
  font-size: 16px;
  color: ${textColor};
  font-family: 'Montserrat-light';

  border-color: ${orange};
  width: 70px;
  padding: 10px 10px;
  border-radius: 4px;
  border-width: 1px;
`;

export const Picker = styled(DateTimePicker).attrs(() => ({
  mode:"time",
  display:"compact",
  textColor: orange,
  is24Hour: true,
}))`
  width: 100px;
  color: ${orange};
`;