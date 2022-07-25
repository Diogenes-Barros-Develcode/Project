import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {Container, ImageCity, ImageWrapper} from './styles';

export function CityPage() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageWrapper>
        <ImageCity source={theme.images.bali} />
      </ImageWrapper>
    </Container>
  );
}
