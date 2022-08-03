import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: ${RFValue(385)}px;
`;

export const ImageCity = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  margin-top: ${RFValue(117)}px;
`;

export const CityName = styled.Text`
  font-size: ${RFValue(34)}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text_quaternary};
`;

export const CountryName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text_quaternary};
  margin-top: ${RFValue(10)}px;
`;

export const WrapperAvaliation = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(28)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: ${RFValue(25)}px;
  background-color: ${({theme}) => theme.colors.primary};
  margin-top: ${RFValue(13)}px;
`;

export const Avaliation = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const AvaliationImage = styled.Image`
  margin-left: ${RFValue(5)}px;
`;

export const ContentImportantCountryInfo = styled.View`
  width: 100%;
  height: ${RFValue(552)}px;
  position: absolute;
  margin-top: ${RFValue(277)}px;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const WrapperCityComponentInfo = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  justify-content: center;
  margin-top: ${RFValue(26)}px;
  padding-left: ${RFValue(20)}px;
`;

export const HotelComponentWrapper = styled.View`
  width: 100%;
  padding-left: ${RFValue(15)}px;
  padding-right: ${RFValue(15)}px;
`;
