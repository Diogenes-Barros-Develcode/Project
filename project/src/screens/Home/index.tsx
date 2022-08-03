/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Modal, StatusBar, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import {InputComponent} from '../../components/InputComponent';
import {PlacesComponent} from '../../components/PlacesComponent';
import {PlacesHomeComponent} from '../../components/PlacesHomeComponent';
import {useFetch} from '../../global/services/get';
import theme from '../../global/styles/theme';
import {
  BaliDescription,
  BaliDescriptionWrapper,
  CityImages,
  Container,
  Content,
  ContentHeaderIcon,
  ContentPlaceDetails,
  Header,
  HeaderIcon,
  ScrollCityImage,
  ScrollPlaces,
  UserName,
  UserPhoto,
  WrapperCityImage,
  WrapperPlacesHome,
  WrapperScrollView,
} from './styles';

// const ModalPoup = ({visible, children}: any) => {
//   const [showModal, setShowModal] = useState(visible);
//   const scaleValue = useRef(new Animated.Value(0)).current;
//   const changeModalState = () => {
//     if (visible) {
//       setShowModal(true);
//       Animated.spring(scaleValue, {
//         toValue: 1,
//         speed: 0.8,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setTimeout(() => setShowModal(false), 200);
//       Animated.timing(scaleValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };
//   useEffect(() => {
//     changeModalState();
//   }, [visible]);
//   return (
//     <Modal transparent visible={showModal}>
//       <View style={styles.modalBackground}>
//         <Animated.View
//           style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
//           {children}
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

interface HomeProps {
  id: string;
  name: string;
  description: string;
}

export function Home() {
  const theme = useTheme();

  const navigation = useNavigation();

  // const [isVisible, setIsVisible] = useState(false);

  // const {data, fetchData} = useFetch<HomeProps>('/categories');

  // useEffect(() => {
  //   fetchData();
  //   console.log(data.name);
  // }, [data]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <UserPhoto source={theme.images.eu} />
        <UserName>Olá, Rafael</UserName>
        <ContentHeaderIcon>
          <HeaderIcon source={theme.icons.manageAccount} />
        </ContentHeaderIcon>
      </Header>

      {/* <Content>
        <InputComponent
          source={theme.icons.searchIcon}
          sourceSecundary={theme.icons.locationIcon}
        />
      </Content> */}

      {/* <WrapperScrollView>
        <ScrollPlaces horizontal showsHorizontalScrollIndicator={false}>
          <PlacesComponent source={theme.icons.island} name="Island" />
          <PlacesComponent source={theme.icons.beach} name="Beach" />
          <PlacesComponent source={theme.icons.snowflake} name="Arctic" />
          <PlacesComponent source={theme.icons.surfing} name="Surfing" />
          <PlacesComponent source={theme.icons.beachFront} name="Beachfront" />
          <PlacesComponent source={theme.icons.mansion} name="Mansions" />
          <PlacesComponent source={theme.icons.cities} name="Cities" />
        </ScrollPlaces>
      </WrapperScrollView> */}

      <ContentPlaceDetails>
        <WrapperPlacesHome>
          <PlacesHomeComponent
            name="Parassaurolofo"
            source={theme.images.parasaurolophus}
            description="Parasaurolophus (ou parassaurolofo) é um gênero de dinossauros herbívoros com até 5 metros de altura e
            10 metros de comprimento. O nome do gênero quer dizer (do latim) lagarto com chifre paralelo.
            Estes dinos viveram entre 76 e 73 milhões de anos atrás, durante o período Cretáceo – o último dos três períodos da Era Mezozoica."
            onPress={() => navigation.navigate('Parassaurolo' as never)}
          />

          <PlacesHomeComponent
            name="Tiranossauro"
            source={theme.images.tyranossauro}
            description="Dentre os nomes dos dinossauros mais famosos, os Tyrannosaurus não são conhecidos apenas por filmes ou livros.
            Acontece que estes dinos carnívoros foram um dos gêneros mais abundantes de dinossauros do planeta,
            com estimativas apontando bilhões de indivíduos vivendo ao longo dos 2 milhões de anos de existência do grupo (68-66 M.A)."
            onPress={() => navigation.navigate('Tyranossauro' as never)}
          />
        </WrapperPlacesHome>
      </ContentPlaceDetails>

      {/* <ModalPoup visible={isVisible}>
        <BaliDescriptionWrapper>
          <BaliDescription>
            There is no other place like Bali in this world. A magical mix of
            culture, people, nature, activities, weather, culinary delights,
            nightlife and many other interesting things.Bali, the famed Island
            of the Gods, with its varied landscape of hills and mountains,
            rugged coastlines and sandy beaches, lush rice terraces, and
            volcanic hillsides all providing a picturesque backdrop to its
            colorful, deeply spiritual, and unique culture stakes a serious
            claim to be paradise on earth. With world-class surfing and diving,
            a large number of cultural, historical, and archaeological
            attractions, and an enormous range of accommodations, this is one of
            the world's most popular island destinations and one which
            consistently wins travel awards.
          </BaliDescription>
        </BaliDescriptionWrapper>
        <ScrollCityImage horizontal>
          <WrapperCityImage>
            <CityImages source={theme.images.baliDetails} />
            <CityImages source={theme.images.bali} />
          </WrapperCityImage>
        </ScrollCityImage>
      </ModalPoup> */}
    </Container>
  );
}

// const styles = StyleSheet.create({
//   modalBackground: {
//     flex: 1,
//     backgroundColor: theme.colors.modalBackGround,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: theme.colors.primary,
//     paddingHorizontal: RFValue(20),
//     paddingVertical: RFValue(20),
//     borderRadius: RFValue(10),
//     elevation: RFValue(20),
//   },
// });
