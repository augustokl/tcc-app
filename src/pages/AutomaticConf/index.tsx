import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@ptomasroos/react-native-multi-slider';

import { ApplicationState } from '../../store';
import {
  getAutomaticConfRequest,
  updateAutomaticConfRequest,
} from '../../store/modules/automaticConf/actions';

import ButtonSave from '../../components/ButtonSave';
import { orange } from '../../styles/colors';

import {
  Container,
  Title,
  Category,
  CategoryTitle,
  CategoryValues,
} from './styles';

const Settings: React.FC = () => {
  const [temp, setTemp] = useState([10, 20]);
  const [humidity, setHumidity] = useState([60, 80]);

  const { data, loading } = useSelector(
    (state: ApplicationState) => state.automaticConf,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAutomaticConfRequest());
  }, []);

  useEffect(() => {
    const {
      min_humidity,
      max_humidity,
      min_temperature,
      max_temperature,
    } = data;

    setTemp([min_temperature, max_temperature]);
    setHumidity([min_humidity, max_humidity]);
  }, [data]);

  const handleTempChangeValues = useCallback((values) => setTemp(values), []);
  const handleHumidityChangeValues = useCallback(
    (values) => setHumidity(values),
    [],
  );

  const onClickSave = useCallback(() => {
    const [min_humidity, max_humidity] = humidity;
    const [min_temperature, max_temperature] = temp;

    const data = {
      min_humidity,
      max_humidity,
      min_temperature,
      max_temperature,
    };

    dispatch(updateAutomaticConfRequest(data));
  }, [humidity, temp]);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Configurações Automáticas</Title>
      <Category>
        <CategoryTitle>Temperatura</CategoryTitle>
        <CategoryValues>{`${temp[0]} °C - ${temp[1]} °C`}</CategoryValues>
      </Category>
      <Slider
        values={temp}
        sliderLength={350}
        selectedStyle={{
          backgroundColor: orange,
        }}
        onValuesChange={handleTempChangeValues}
        min={0}
        max={40}
        step={1}
        snapped
      />
      <Category>
        <CategoryTitle>Umidade</CategoryTitle>
        <CategoryValues>{`${humidity[0]}% - ${humidity[1]}%`}</CategoryValues>
      </Category>
      <Slider
        values={humidity}
        sliderLength={350}
        selectedStyle={{
          backgroundColor: orange,
        }}
        onValuesChange={handleHumidityChangeValues}
        min={0}
        max={100}
        step={1}
        snapped
      />
      <ButtonSave text="Salvar" onPress={onClickSave} />
    </Container>
  );
};

export default Settings;
