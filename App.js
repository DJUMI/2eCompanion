import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, YellowBox, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';

import ApiKeys from './src/constants/ApiKeys';
import { Provider as CharacterProvider } from './src/context/CharacterContext';
import { Provider as UserProvider } from './src/context/UserContext';
import { Provider as RollProvider } from './src/context/RollContext';
import { Provider as SpellsProvider } from './src/context/SpellsContext';
import useCachedResources from './src/hooks/useCachedResources';
import RootNavigator from './src/navigation/RootNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';

const windowDimensions = Dimensions.get('window')
EStyleSheet.build({ $rem: windowDimensions.width / 380 });

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [loggedIn, setLoggedIn] = React.useState(null);

  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ]);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return (
          <CharacterProvider>
            <UserProvider>
              <SpellsProvider>
                <RollProvider>
                  <NavigationContainer linking={LinkingConfiguration}>
                    <RootNavigator />
                  </NavigationContainer>
                </RollProvider>
              </SpellsProvider>
            </UserProvider>
          </CharacterProvider>
        );
      case false:
        return (
          <CharacterProvider>
            <UserProvider>
              <NavigationContainer>
                <AuthNavigator />
              </NavigationContainer>
            </UserProvider>
          </CharacterProvider>
        );
      default:
        return null;
    }
  };


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        {renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
