import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { ApplicationState } from '../../store';
import { getDataRequest } from '../../store/modules/equipment/actions';

import { Container } from './styles';
import Information from './components/Information';
import Temperature from './components/Temperature';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const request = () => dispatch(getDataRequest());

    request();

    const interval = setInterval(() => {
      request();
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Information />
      <Temperature />
    </Container>
  );
};

export default Home;
