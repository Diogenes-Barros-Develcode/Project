import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/Home';

const Tabs = createBottomTabNavigator();

export function Routes() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
}
