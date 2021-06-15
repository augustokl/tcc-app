import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/core'; 

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
  const isFocused = useIsFocused();

  const [temp, setTemp] = useState([10, 20]);
  const [humidity, setHumidity] = useState([60, 80]);
  const [activation, setActivation] = useState(0);
  const [open, setOpen] = useState(new Date());
  const [close, setClose] = useState(new Date());
  const [show, setShow] = useState(false);

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
      open_sombrite,
      close_sombrite,
    } = data;

    if(!min_humidity || !max_humidity || !min_temperature || !max_temperature){
      return
    }

    console.log(open_sombrite, close_sombrite)

    setTemp([min_temperature, max_temperature]);
    setHumidity([min_humidity, max_humidity]);
    setActivation(activation_time);
    setOpen(open_sombrite);
    setClose(close_sombrite);
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
      activation_time: activation,
      open_sombrite: open,
      close_sombrite: close
    };

    dispatch(updateAutomaticConfRequest(data));
  }, [humidity, temp, activation, open, close]);

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
          value={String(activation)}
          onChangeText={newValue => {
            const regex = new RegExp('^[0-2]?[0-9]?$', 'g')
            if (regex.test(newValue)){
              setActivation(Number(newValue))
            }
          }}
        />
        <Category>
          <CategoryTitle>Abertura Sombrite</CategoryTitle>
        </Category>
        <Picker  value={open} onChange={(event, date) => date ? setOpen(date) : setOpen(open)}/>
        <Category>
          <CategoryTitle>Fechamento Sombrite</CategoryTitle>
        </Category>
        <Picker  value={close} onChange={(event, date) => date ? setClose(date) : setClose(close)}/>
      </Content>
      <ButtonSave text="Salvar" onPress={onClickSave} />
    </Container>
  );
};

export default Settings;
