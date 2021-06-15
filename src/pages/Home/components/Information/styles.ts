import styled from 'styled-components/native';
import { darken } from 'polished';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { background, textColor, orange } from '../../../../styles/colors';

interface InformationValueTextType extends Text {
  textColor?: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 30px 60px;
  border-bottom-color: #808080;
  border-bottom-width: 1px;
`;

export const InformationLine = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
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
