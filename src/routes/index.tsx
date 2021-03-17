import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { background, highlight } from '../styles/colors';

import Home from '../pages/Home';
import ManualConf from '../pages/ManualConf';
import AutomaticConf from '../pages/AutomaticConf';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ _, color }) => {
        let iconName = 'home';

        if (route.name === 'Configurações Manuais') {
          iconName = 'settings';
        } else if (route.name === 'Configurações Automáticas') {
          iconName = 'options';
        }

        return <Icon name={iconName} size={24} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: highlight,
      inactiveTintColor: 'gray',
      showLabel: false,
      style: { backgroundColor: background },
    }}>
    <Tab.Screen name="Temperatura" component={Home} />
    <Tab.Screen name="Configurações Automáticas" component={AutomaticConf} />
    <Tab.Screen name="Configurações Manuais" component={ManualConf} />
  </Tab.Navigator>
);

export default Routes;
