import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-right: ${RFValue(10)}px;
`;

export const WrapperImage = styled.View``;

export const IconPlace = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;

export const WrapperTitle = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_secundary};
  font-size: ${RFValue(10)}px;
  font-weight: 400;
`;
