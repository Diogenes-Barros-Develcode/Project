import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: ${RFValue(385)}px;
  background-color: red;
`;

export const ImageCity = styled.Image`
  width: 100%;
  height: 100%;
`;
