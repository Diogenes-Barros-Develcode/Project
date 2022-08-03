import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface PhotoIndexProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${RFValue(20)}px;
  height: ${RFValue(64)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const UserPhoto = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_primary};
  font-weight: 600;
`;

export const ContentHeaderIcon = styled.View.attrs({
  elevation: 5,
})`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const HeaderIcon = styled.Image`
  width: ${RFValue(20)}px;
`;

export const Content = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  align-items: center;
  padding: ${RFValue(10)}px ${RFValue(20)}px;
`;

export const WrapperScrollView = styled.View`
  width: 100%;
  height: ${RFValue(65)}px;
`;

export const ScrollPlaces = styled.ScrollView``;

export const WrapperPlacesHome = styled.View`
  width: 100%;
  padding: 0 ${RFValue(21)}px;
`;

export const ContentPlaceDetails = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  background-color: ${({theme}) => theme.colors.secundary};
`;

export const BaliDescriptionWrapper = styled.View``;

export const BaliDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_secundary};
  font-weight: 500;
`;

export const ScrollCityImage = styled.ScrollView`
  margin-top: ${RFValue(20)}px;
`;

export const WrapperCityImage = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(100)}px;
`;

export const CityImages = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${RFValue(245)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(10)}px;
`;

export const PhotoIndex = styled.View<PhotoIndexProps>`
  height: ${({active}) => (active ? 6 : 4)}px;
  width: ${({active}) => (active ? 6 : 4)}px;
  background-color: ${({theme, active}) =>
    active ? theme.colors.background_red : theme.colors.icon_slider};
  border-radius: 6px;
  margin: 0 5px;
`;
