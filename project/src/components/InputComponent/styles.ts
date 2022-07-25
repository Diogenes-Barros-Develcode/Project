import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 15,
})`
  width: 100%;
  height: ${RFValue(42)}px;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(40)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const WharetoButton = styled.TouchableOpacity`
  width: 80%;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  margin-left: ${RFValue(20)}px;
`;

export const Icon = styled.Image`
  color: ${({theme}) => theme.colors.text_primary};
`;

export const Content = styled.View`
  width: 80%;
  margin-left: ${RFValue(10)}px;
`;

export const WhereTo = styled.Text`
  color: ${({theme}) => theme.colors.text_primary};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;

export const SimpleExplication = styled.Text`
  color: ${({theme}) => theme.colors.text_secundary};
  font-size: ${RFValue(10)}px;
  font-weight: 400;
`;

export const ConfigWrapper = styled.View`
  width: 50%;
  height: 80%;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(20)}px;
  border: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.secundary};
`;

export const ConfigButton = styled.TouchableOpacity`
  width: 20%;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
`;

export const SecundaryIcon = styled.Image``;
