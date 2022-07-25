import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './routes';
import {CityPage} from '../../screens/CityPage';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthedRoutes() {
  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Screen name="Home" component={Routes} />
      <Screen name="CityPage" component={CityPage} />
    </Navigator>
  );
}
