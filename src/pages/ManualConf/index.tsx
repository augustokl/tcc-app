import React, { useState } from 'react';
import ButtonSave from '../../components/ButtonSave';

import {
  Container,
  Title,
  Switch,
  CategoryMain,
  Category,
  CategoryTitle,
} from './styles';

const Controls: React.FC = () => {
  const [active, setActive] = useState(false);
  const [fan, setFan] = useState(false);
  const [heater, setHeater] = useState(false);
  const [water, setWater] = useState(false);

  return (
    <Container>
      <Title>Comandos Manuais</Title>
      <CategoryMain>
        <CategoryTitle>Ativar</CategoryTitle>
        <Switch onValueChange={setActive} value={active} />
      </CategoryMain>
      <Category>
        <CategoryTitle>Ventilação</CategoryTitle>
        <Switch disabled={!active} onValueChange={setFan} value={fan} />
      </Category>
      <Category>
        <CategoryTitle>Aquecedor</CategoryTitle>
        <Switch disabled={!active} onValueChange={setHeater} value={heater} />
      </Category>
      <Category>
        <CategoryTitle>Irrigação</CategoryTitle>
        <Switch disabled={!active} onValueChange={setWater} value={water} />
      </Category>
      <ButtonSave text="Salvar" />
    </Container>
  );
};

export default Controls;
