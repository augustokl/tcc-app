import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { background, highlight } from '../styles/colors';

import Temperature from '../pages/Temperature';
import Moisture from '../pages/Moisture';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'home';

        if (route.name === 'Temperatura') {
          iconName = focused ? 'thermometer-high' : 'thermometer-low';
        } else if (route.name === 'Umidade') {
          iconName = focused ? 'water-percent' : 'water-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: highlight,
      inactiveTintColor: 'gray',
      style: { backgroundColor: background },
    }}>
    <Tab.Screen name="Temperatura" component={Temperature} />
    <Tab.Screen name="Umidade" component={Moisture} />
  </Tab.Navigator>
);

export default Routes;
