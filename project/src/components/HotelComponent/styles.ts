import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled.View.attrs({
  elevation: 10,
})`
  width: ${RFValue(156)}px;
  height: ${RFValue(214)}px;
  align-items: center;
  border-radius: ${RFValue(22)}px;
`;

export const HotelPhoto = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${RFValue(22)}px;
`;

export const HotelDetails = styled.View`
  width: ${RFValue(156)}px;
  height: ${RFValue(45)}px;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: ${RFValue(22)}px;
  border-bottom-right-radius: ${RFValue(22)}px;
  border-top-right-radius: ${RFValue(22)}px;
  background-color: ${({theme}) => theme.colors.terciary};
  align-items: center;
  justify-content: center;
`;

export const HotelName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const WrapperAvaliation = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(2)}px;
`;

export const HotelAvaliationImage = styled.Image``;
