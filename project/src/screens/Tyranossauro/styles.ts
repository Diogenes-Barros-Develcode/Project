import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const WrapperInfo = styled.View`
  width: 100%;
  height: ${RFValue(140)}px;
`;

export const WrapperImage = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(10)}px;
  margin-left: ${RFValue(20)}px;
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
`;

export const DinoIMage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(10)}px;
`;

export const WrapperTitle = styled.View`
  margin-left: ${RFValue(10)}px;
  width: ${RFValue(200)};
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(28)};
  font-weight: 400;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const WrapperText = styled.View`
  width: 100%;
  height: ${RFValue(170)}px;
  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;
`;

export const TextOne = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text_secundary}
  text-align: justify;
`;

export const WrapperInfoTwo = styled.View`
  width: 100%;
  flex-direction: row;
  padding-left: ${RFValue(20)}px;
`;

export const WrapperTextTwo = styled.View`
  width: ${RFValue(200)}px;
`;

export const TextTwo = styled.Text`
    font-size: ${RFValue(10)}px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text_secundary}
  text-align: justify;
`;

export const WrapperMap = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(130)}px;
  align-items: center;
  margin-left: ${RFValue(25)}px;
  background-color: ${({theme}) => theme.colors.secundary};
`;

export const MapImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`;

export const InfoMap = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 400;
  text-align: center;
  margin-top: ${RFValue(2)}px;
  color: ${({theme}) => theme.colors.text_primary};
`;
