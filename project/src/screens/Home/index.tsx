import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {InputComponent} from '../../components/InputComponent';
import {PlacesComponent} from '../../components/PlacesComponent';
import {PlacesHomeComponent} from '../../components/PlacesHomeComponent';
import {
  Container,
  Content,
  ContentHeaderIcon,
  ContentPlaceDetails,
  Header,
  HeaderIcon,
  ScrollPlaces,
  UserName,
  UserPhoto,
  WrapperPlacesHome,
  WrapperScrollView,
} from './styles';

export function Home() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />

      <Header>
        <UserPhoto source={theme.images.eu} />
        <UserName>Hello, Diógenes</UserName>
        <ContentHeaderIcon>
          <HeaderIcon source={theme.icons.manageAccount} />
        </ContentHeaderIcon>
      </Header>

      <Content>
        <InputComponent
          source={theme.icons.searchIcon}
          sourceSecundary={theme.icons.locationIcon}
        />
      </Content>

      <WrapperScrollView>
        <ScrollPlaces horizontal showsHorizontalScrollIndicator={false}>
          <PlacesComponent source={theme.icons.island} name="Island" />
          <PlacesComponent source={theme.icons.beach} name="Beach" />
          <PlacesComponent source={theme.icons.snowflake} name="Arctic" />
          <PlacesComponent source={theme.icons.surfing} name="Surfing" />
          <PlacesComponent source={theme.icons.beachFront} name="Beachfront" />
          <PlacesComponent source={theme.icons.mansion} name="Mansions" />
          <PlacesComponent source={theme.icons.cities} name="Cities" />
        </ScrollPlaces>
      </WrapperScrollView>

      <ContentPlaceDetails>
        <WrapperPlacesHome>
          <PlacesHomeComponent />
        </WrapperPlacesHome>
      </ContentPlaceDetails>
    </Container>
  );
}
