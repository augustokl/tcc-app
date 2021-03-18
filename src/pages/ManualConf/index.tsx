import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import {
  getManualConfRequest,
  updateManualConfRequest,
} from '../../store/modules/manualConf/actions';

import ButtonSave from '../../components/ButtonSave';

import {
  Container,
  Title,
  Switch,
  CategoryMain,
  Category,
  CategoryTitle,
} from './styles';

const ManualConf: React.FC = () => {
  const [active, setActive] = useState(false);
  const [fan, setFan] = useState(false);
  const [heater, setHeater] = useState(false);
  const [water, setWater] = useState(false);

  const { data, loading } = useSelector(
    (state: ApplicationState) => state.manualConf,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManualConfRequest());
  }, []);

  useEffect(() => {
    if (data) {
      setActive(data.active);
      setFan(data.fan);
      setHeater(data.temperature);
      setWater(data.humidity);
    }
  }, [data]);

  const handleActive = useCallback((active) => {
    setActive(active);

    if (!active) {
      setFan(active);
      setHeater(active);
      setWater(active);
    }
  }, []);

  const onCickSave = useCallback(() => {
    const data = {
      active,
      fan,
      temperature: heater,
      humidity: water,
    };

    dispatch(updateManualConfRequest(data));
  }, [active, fan, heater, water]);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Comandos Manuais</Title>
      <CategoryMain>
        <CategoryTitle>Ativar</CategoryTitle>
        <Switch onValueChange={handleActive} value={active} />
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
      <ButtonSave text="Salvar" onPress={onCickSave} />
    </Container>
  );
};

export default ManualConf;
