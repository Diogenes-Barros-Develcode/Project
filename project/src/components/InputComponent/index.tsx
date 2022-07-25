import React from 'react';
import {
  ConfigButton,
  ConfigWrapper,
  Container,
  Content,
  Icon,
  IconWrapper,
  SecundaryIcon,
  SimpleExplication,
  WharetoButton,
  WhereTo,
} from './styles';
import {ImageSourcePropType} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  sourceSecundary: ImageSourcePropType;
}

export function InputComponent({source, sourceSecundary}: Props) {
  return (
    <Container>
      <WharetoButton activeOpacity={0.7}>
        <IconWrapper>
          <Icon source={source} />
        </IconWrapper>

        <Content>
          <WhereTo>Where to?</WhereTo>
          <SimpleExplication>
            Anywhere - Any week - Add guests
          </SimpleExplication>
        </Content>
      </WharetoButton>

      <ConfigButton activeOpacity={0.7}>
        <ConfigWrapper>
          <SecundaryIcon source={sourceSecundary} />
        </ConfigWrapper>
      </ConfigButton>
    </Container>
  );
}
