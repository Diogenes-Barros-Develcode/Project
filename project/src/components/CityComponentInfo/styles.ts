import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(100)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(100)}px;
  margin-right: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text_primary};
`;
