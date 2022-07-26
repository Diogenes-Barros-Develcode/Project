import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AuthedRoutes} from './src/global/routes/routes.routes';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthedRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
