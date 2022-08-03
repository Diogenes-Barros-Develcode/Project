import React from 'react';
import {useTheme} from 'styled-components';
import {
  Container,
  DinoIMage,
  InfoMap,
  MapImage,
  Name,
  TextOne,
  TextTwo,
  WrapperImage,
  WrapperInfo,
  WrapperInfoTwo,
  WrapperMap,
  WrapperText,
  WrapperTextTwo,
  WrapperTitle,
} from './styles';

export function Tyranossauro() {
  const theme = useTheme();

  return (
    <Container>
      <WrapperInfo>
        <WrapperImage>
          <DinoIMage source={theme.images.dinoProfileParassauro} />
          <WrapperTitle>
            <Name>Tiranossauro</Name>
          </WrapperTitle>
        </WrapperImage>
      </WrapperInfo>

      <WrapperText>
        <TextOne>
          Assim como outros representantes da família Tyrannosauridae, o T. rex
          foi um carnívoro bípede com um crânio cilíndrico e uma grossa e
          musculosa cauda. Suas pernas eram longas e musculosas, mas seus braços
          eram extremamente curtos e finos, além desses animais também possuírem
          três dedos ao fim de cada perna e dois dedos nos braços. Na idade
          adulta um T. rex poderia atingir cerca de 4 metros de altura e 12
          metros de comprimento. Seu crânio podia passar de 1,4 metro, e sua
          massa podia passar de 8 toneladas. As fêmeas eram maiores que os
          machos. Um recente estudo comprova que tinha a mordida mais poderosa
          dentre os dinossauros; sua mordida exercia uma pressão de 6 toneladas.
          Tinha 60 dentes irregulares, alguns com mais de 30 centímetros e
          outros bem menores que 20.
        </TextOne>
      </WrapperText>

      <WrapperInfoTwo>
        <WrapperTextTwo>
          <TextTwo>
            Estima-se também que suas musculosas pernas permitiam que o animal
            atingisse uma velocidade superior a quarenta quilômetros por hora em
            um bote (todos os muscúlos do corpo do T.rex concentrados em 1 único
            objetivo, correr). Hoje, há mais de trinta esqueletos de
            tiranossauros totalmente remontados, e é exatamente essa abundância
            de material fóssil disponível que permitiu que esses animais fossem
            profundamente estudados para se descobrir os principais aspectos de
            sua biomecânica, apesar de que sua fisiologia e seus hábitos diários
            ainda são frutos de debate até hoje.
          </TextTwo>
        </WrapperTextTwo>

        <WrapperMap>
          <MapImage source={theme.images.mapaDinoOne} />
          <InfoMap>Mapa onde eles viviam.</InfoMap>
        </WrapperMap>
      </WrapperInfoTwo>
    </Container>
  );
}
