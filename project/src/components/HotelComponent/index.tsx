import React from 'react';
import {useTheme} from 'styled-components';
import {
  Container,
  HotelAvaliationImage,
  HotelDetails,
  HotelName,
  HotelPhoto,
  Wrapper,
  WrapperAvaliation,
} from './styles';

interface Props {
  onPress: () => void;
}

export function HotelComponent({onPress}: Props) {
  const theme = useTheme();

  return (
    <Wrapper activeOpacity={1} onPress={onPress}>
      <Container>
        <HotelPhoto source={theme.images.kayuLama} />

        <HotelDetails>
          <HotelName>Villa Kayu Lama</HotelName>
          <WrapperAvaliation>
            <HotelAvaliationImage source={theme.icons.starAvaliation} />
            <HotelAvaliationImage source={theme.icons.starAvaliation} />
            <HotelAvaliationImage source={theme.icons.starAvaliation} />
            <HotelAvaliationImage source={theme.icons.starAvaliation} />
            <HotelAvaliationImage source={theme.icons.starAvaliation} />
          </WrapperAvaliation>
        </HotelDetails>
      </Container>
    </Wrapper>
  );
}
