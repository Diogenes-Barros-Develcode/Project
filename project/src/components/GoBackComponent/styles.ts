import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 15%;
  height: 5%;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: ${RFValue(50)}px;
  margin-left: ${RFValue(10)}px;
  background-color: transparent;
`;

export const GoBackImage = styled.Image``;
