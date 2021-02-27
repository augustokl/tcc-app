import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { background, highlight } from '../styles/colors';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Controls from '../pages/Controls';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ _, color }) => {
        let iconName = 'home';

        if (route.name === 'Configurações') {
          iconName = 'settings';
        } else if (route.name === 'Controles') {
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
    <Tab.Screen name="Controles" component={Controls} />
    <Tab.Screen name="Configurações" component={Settings} />
  </Tab.Navigator>
);

export default Routes;
