import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { background, orange } from '../../styles/colors';

export const Button = styled(RectButton)`
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
