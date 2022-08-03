import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {useTheme} from 'styled-components';
import {
  Container,
  Details,
  DetailsDescription,
  DetailsTitle,
  PlacePhoto,
  ReadMore,
  ReadMoreButton,
  Wrapper,
  WrapperDescription,
  WrapperTitle,
} from './styles';

interface Props {
  onPress: () => void;
  source: ImageSourcePropType;
  name: string;
  description: string;
}

export function PlacesHomeComponent({
  onPress,
  source,
  name,
  description,
}: Props) {
  return (
    <Wrapper activeOpacity={1} onPress={onPress}>
      <Container>
        <PlacePhoto source={source} />

        <Details>
          <WrapperTitle>
            <DetailsTitle>{name}</DetailsTitle>
          </WrapperTitle>
          <WrapperDescription>
            <DetailsDescription>{description}</DetailsDescription>
          </WrapperDescription>
        </Details>
      </Container>
    </Wrapper>
  );
}
