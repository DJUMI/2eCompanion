import React, { useContext } from 'react';
import { Dimensions, Image, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

import CharacterContent from '../../components/character/CharacterContent';
import { Context } from '../../context/CharacterContext';
import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../../constants/Dimensions';
import { Header, Loading } from '../../components/common';

const renderContent = (image_url, name) => (
  <HeaderImageScrollView
    scrollViewBackgroundColor='tan'
    maxHeight={MAX_HEADER_HEIGHT}
    minHeight={MIN_HEADER_HEIGHT}
    maxOverlayOpacity={0.3}
    foregroundExtrapolate={null}
    renderHeader={() => (
      <View style={{ flex: 1 }}>
        {image_url === '' ?
          <Image
            source={require('../../../assets/images/default-profile.png')}
            style={styles.image}
          /> : <Image
            source={{ uri: image_url }}
            style={styles.image}
          />}
      </View>
    )}
    renderFixedForeground={() => (
      <View style={styles.title}>
        <Text style={styles.titleText}>{name}</Text>
      </View>
    )}
  >
    <View  >
      <TriggeringView>
        <CharacterContent />
      </TriggeringView>
    </View>
  </HeaderImageScrollView>
);

const CharacterScreen = ({ navigation }) => {
  const { state, fetchCharacters } = useContext(Context);
  var name = '';
  var image = '';
  if (state.characters.length) {
    image = state.characters[state.current].details.image;
    name = state.characters[state.current].details.name;
  }

  const renderLoading = () => {
    fetchCharacters();
    return <Loading />;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} />
      {state.characters.length ?
        renderContent(image, name) :
        renderLoading()
      }
    </View>
  );
}

export default CharacterScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEADER_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '20rem',
  },
  titleText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '24rem',
  },
});


