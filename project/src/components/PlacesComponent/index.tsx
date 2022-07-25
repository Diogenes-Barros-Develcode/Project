import React from 'react';
import {
  Container,
  IconPlace,
  Title,
  WrapperImage,
  WrapperTitle,
} from './styles';
import {ImageSourcePropType} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  name: string;
}

export function PlacesComponent({source, name}: Props) {
  return (
    <Container>
      <WrapperImage>
        <IconPlace source={source} />
      </WrapperImage>
      <WrapperTitle>
        <Title>{name}</Title>
      </WrapperTitle>
    </Container>
  );
}
