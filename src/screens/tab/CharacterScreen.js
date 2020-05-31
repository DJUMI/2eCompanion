import React, { useContext } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

import CharacterContent from '../../components/character/CharacterContent';
import { Context } from '../../context/CharacterContext';
import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../../constants/Dimensions';
import { Header, Loading } from '../../components/common';

const renderContent = () => {
  return (
    <HeaderImageScrollView
      maxHeight={MAX_HEADER_HEIGHT}
      minHeight={MIN_HEADER_HEIGHT}
      maxOverlayOpacity={0.3}
      foregroundExtrapolate={null}
      renderHeader={() => (
        <View style={{ flex: 1 }}>
          <Image source={require('../../../assets/images/Besh.png')} style={styles.image} />
        </View>
      )}
      renderFixedForeground={() => (
        <View style={styles.title}>
          <Text style={styles.titleText}>Besh</Text>
        </View>
      )}
    >
      <View style={{ backgroundColor: 'tan' }} >
        <TriggeringView>
          <CharacterContent />
        </TriggeringView>
      </View>
    </HeaderImageScrollView>
  );
};

const CharacterScreen = ({ navigation }) => {
  const { state, fetchCharacters } = useContext(Context);

  const renderLoading = () => {
    fetchCharacters();
    return <Loading />;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation}/>
      {state.characters.length ?
        renderContent() :
        renderLoading()
    }
    </View>
  );
}

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan'
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
    paddingTop: 20,
  },
  titleText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
  },
});


