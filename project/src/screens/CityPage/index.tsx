import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {CityComponentInfo} from '../../components/CityComponentInfo/indext';
import {GoBackComponent} from '../../components/GoBackComponent';
import {HotelComponent} from '../../components/HotelComponent';
import {
  Avaliation,
  AvaliationImage,
  CityName,
  Container,
  Content,
  ContentImportantCountryInfo,
  CountryName,
  HotelComponentWrapper,
  ImageCity,
  ImageWrapper,
  WrapperAvaliation,
  WrapperCityComponentInfo,
} from './styles';

export function CityPage() {
  const theme = useTheme();
  const navigation = useNavigation();

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
      <GoBackComponent onPress={() => navigation.goBack()} />

      <Content>
        <CityName>Bali</CityName>
        <CountryName>Indonesia</CountryName>
        <WrapperAvaliation>
          <Avaliation>5</Avaliation>
          <AvaliationImage source={theme.icons.starAvaliation} />
        </WrapperAvaliation>
      </Content>

      <ContentImportantCountryInfo>
        <WrapperCityComponentInfo>
          <CityComponentInfo
            name="Hotels"
            backgroundColor={theme.colors.cityComponentFocused}
          />
          <CityComponentInfo
            name="Foods"
            backgroundColor={theme.colors.cityComponentUnFocused}
          />

          <CityComponentInfo
            name="Activities"
            backgroundColor={theme.colors.cityComponentUnFocused}
          />
        </WrapperCityComponentInfo>

        <HotelComponentWrapper>
          <HotelComponent
            onPress={() => navigation.navigate('HotelPage' as never)}
          />
        </HotelComponentWrapper>
      </ContentImportantCountryInfo>
    </Container>
  );
}
