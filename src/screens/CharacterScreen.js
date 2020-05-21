import React, { useState } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

import Content from '../components/character/Content';
import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../constants/Dimensions';

const CharacterScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEADER_HEIGHT}
        minHeight={MIN_HEADER_HEIGHT}
        maxOverlayOpacity={0.3}
        foregroundExtrapolate={null}
        renderHeader={() => (
          <View style={{ flex: 1 }}>
            <Image source={require('../../assets/images/Besh.png')} style={styles.image} />
          </View>
        )}
        renderFixedForeground={() => (
          <View style={styles.title}>
            <Text style={styles.titleText}>Besh Wellspring Gnome Leaf Druid</Text>
          </View>
        )}
      >
        <View style={{ height: 1000 }} >
          <TriggeringView>
            <Content />
          </TriggeringView>
        </View>
      </HeaderImageScrollView>
    </View>

  );
}

export default CharacterScreen;

const styles = StyleSheet.create({
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
    paddingTop: 20,
    //backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  titleText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
  },
});


