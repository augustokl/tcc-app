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
  Content,
  Title,
  Category,
  CategoryTitle,
  CategoryValues,
  InputTime,
  Picker,
} from './styles';

const Settings: React.FC = () => {
  const [temp, setTemp] = useState([10, 20]);
  const [humidity, setHumidity] = useState([60, 80]);
  const [interval, setInterval] = useState(0);
  const [open, setOpen] = useState(new Date());
  const [close, setClose] = useState(new Date());

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
      activation_time,
      close,
      open,
    } = data;

    if(!min_humidity || max_humidity || min_temperature || max_temperature){
      return
    }

    setTemp([min_temperature, max_temperature]);
    setHumidity([min_humidity, max_humidity]);
    setInterval(activation_time);
    setOpen(new Date(open));
    setClose(new Date(close));
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
      activation_time: interval,
      open,
      close
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
      <Content>
        <Category>
          <CategoryTitle>Temperatura</CategoryTitle>
          <CategoryValues>{`${temp[0]} °C - ${temp[1]} °C`}</CategoryValues>
        </Category>
        <Slider
          values={temp}
          sliderLength={300}
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
          sliderLength={300}
          selectedStyle={{
            backgroundColor: orange,
          }}
          onValuesChange={handleHumidityChangeValues}
          min={0}
          max={100}
          step={1}
          snapped
        />
        <Category>
          <CategoryTitle>Tempo de ativação</CategoryTitle>
        </Category>
        <InputTime
          type={'custom'}
          options={{
            mask: '99',
            validator: (value, settings) => {
              console.log(value, settings)
              return true
            }
          }}
          keyboardType='numeric'
          value={String(interval)}
          onChangeText={newValue => {
            const regex = new RegExp('^[0-2]?[0-9]?$', 'g')
            if (regex.test(newValue)){
              setInterval(Number(newValue))
            }
          }}
        />
        <Category>
          <CategoryTitle>Fechamento Sombrite</CategoryTitle>
        </Category>
        <Picker  value={close} onChange={(event, date) => date ? setClose(date) : setClose(close)}/>
        <Category>
          <CategoryTitle>Abertura Sombrite</CategoryTitle>
        </Category>
        <Picker  value={open} onChange={(event, date) => date ? setOpen(date) : setOpen(open)}/>
      </Content>
      <ButtonSave text="Salvar" onPress={onClickSave} />
    </Container>
  );
};

export default Settings;
