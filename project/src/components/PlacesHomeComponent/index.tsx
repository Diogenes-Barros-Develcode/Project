import React from 'react';
import {useTheme} from 'styled-components';
import {
  Container,
  Details,
  DetailsDescription,
  DetailsTitle,
  PlacePhoto,
  Wrapper,
  WrapperDescription,
  WrapperTitle,
} from './styles';

export function PlacesHomeComponent() {
  const theme = useTheme();

  return (
    <Wrapper activeOpacity={1}>
      <Container>
        <PlacePhoto source={theme.images.baliDetails} />

        <Details>
          <WrapperTitle>
            <DetailsTitle>Bali</DetailsTitle>
          </WrapperTitle>
          <WrapperDescription>
            <DetailsDescription>
              There is no other place like Bali in this world. A magical mix of
              culture, people, nature, activities, weather, culinary delights,
              nightlife and many other interesting things.Bali, the famed Island
              of the Gods, with its varied landscape of hills and mountains,
              rugged coastlines and sandy beaches, lush rice terraces, and
              volcanic hillsides all providing a picturesque backdrop to its
              colorful, deeply spiritual, and unique culture stakes a serious
              claim to be paradise on earth. With world-class surfing and
              diving, a large number of cultural, historical, and archaeological
              attractions, and an enormous range of accommodations, this is one
              of the world's most popular island destinations and one which
              consistently wins travel awards.
            </DetailsDescription>
          </WrapperDescription>
        </Details>
      </Container>
    </Wrapper>
  );
}
