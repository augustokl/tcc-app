import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { background } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: center;
  padding: 50px ${Platform.OS === 'android' ? 150 : 0}px;
`;
