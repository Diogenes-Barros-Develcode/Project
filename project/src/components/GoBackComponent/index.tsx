import React from 'react';
import {useTheme} from 'styled-components';
import {Container, GoBackImage} from './styles';

interface Props {
  onPress: () => void;
}

export function GoBackComponent({onPress}: Props) {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <GoBackImage source={theme.icons.arrowBack} />
    </Container>
  );
}
