import React from 'react';
import {Container, Title} from './styles';

interface Props {
  name: string;
  backgroundColor: string;
}

export function CityComponentInfo({name, backgroundColor}: Props) {
  return (
    <Container style={{backgroundColor: backgroundColor}}>
      <Title>{name}</Title>
    </Container>
  );
}
