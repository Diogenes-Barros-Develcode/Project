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

export function Parassaurolo() {
  const theme = useTheme();

  return (
    <Container>
      <WrapperInfo>
        <WrapperImage>
          <DinoIMage source={theme.images.dinoProfileParassauro} />
          <WrapperTitle>
            <Name>Parassaurolofo</Name>
          </WrapperTitle>
        </WrapperImage>
      </WrapperInfo>

      <WrapperText>
        <TextOne>
          Parasaurolophus (na forma aportuguesada, parassaurolofo) é um gênero
          extinto de dinossauros ornitópodes herbívoros que viveu onde hoje é a
          América do Norte e a Ásia durante o Cretáceo Superior, cerca de
          76.5–73 milhões de anos atrás. Eram herbívoros que andavam tanto
          bípedes quanto quadrúpedes. Três espécies são reconhecidas
          universalmente: P. walkeri (a espécie-tipo), P. tubicen e P.
          cyrtocristatus. Uma quarta espécie, P. jiayensis, foi proposta, mas
          esta é mais comumente classifica no gênero separado Charonosaurus.
          Fósseis são conhecidos de Alberta (no Canadá), Novo México e Utah (nos
          Estados Unidos) e possivelmente Heilongjiang (na China). O gênero foi
          primeiramente descrito pelo paleontólogo William Parks em 1922 a
          partir de um crânio e um esqueleto parcial encontrados em Alberta.
        </TextOne>
      </WrapperText>

      <WrapperInfoTwo>
        <WrapperTextTwo>
          <TextTwo>
            Parasaurolophus (ou parassaurolofo) é um gênero de dinossauros
            herbívoros com até 5 metros de altura e 10 metros de comprimento. O
            nome do gênero quer dizer (do latim) lagarto com chifre paralelo.
            Estes dinos viveram entre 76 e 73 milhões de anos atrás, durante o
            período Cretáceo – o último dos três períodos da Era Mezozoica. A
            função da grande crista destes dinossauros ainda não é bem definida,
            mas pesquisas sugerem que o aparato poderia servir para vocalização
            ou para adorno durante épocas reprodutivas. Os parassaurolofos eram
            herbívoros que podiam ter tanto uma postura bípede quanto quadrúpede
            e até possivelmente nadavam.
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
