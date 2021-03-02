import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Button, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  text: string;
}

const ButtonSave: React.FC<ButtonProps> = ({ text, ...rest }) => (
  <Button {...rest}>
    <ButtonText>{text}</ButtonText>
  </Button>
);

export default ButtonSave;
