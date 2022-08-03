import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled.View.attrs({
  elevation: 10,
})`
  width: 100%;
  height: ${RFValue(270)}px;
  align-items: center;
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(25)}px;
`;

export const PlacePhoto = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: ${RFValue(320)}px;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(25)}px;
`;

export const Details = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  position: absolute;
  bottom: 0;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(25)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const WrapperTitle = styled.View``;

export const DetailsTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const WrapperDescription = styled.View``;

export const DetailsDescription = styled.Text.attrs({
  numberOfLines: 4,
})``;

export const ReadMoreButton = styled.TouchableOpacity``;

export const ReadMore = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text_primary};
`;
