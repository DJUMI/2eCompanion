import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useEffect } from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, YellowBox, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';

import ApiKeys from './src/constants/ApiKeys';
import { Provider as CharacterProvider } from './src/context/CharacterContext';
import { Provider as UserProvider } from './src/context/UserContext';
import useCachedResources from './src/hooks/useCachedResources';
import AuthNavigator from './src/navigation/AuthNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import { Spinner } from './src/components/common';

const windowDimensions = Dimensions.get('window')
EStyleSheet.build({ $rem: windowDimensions.width / 380 });

const Stack = createStackNavigator();

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
      user ?
        setLoggedIn(true) :
        setLoggedIn(false);
    });
  }, []);

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return (
          <CharacterProvider>
            <UserProvider>
              <NavigationContainer linking={LinkingConfiguration}>
                <Stack.Navigator>
                  <Stack.Screen name="Root" component={DrawerNavigator} />
                </Stack.Navigator>
              </NavigationContainer>
            </UserProvider>
          </CharacterProvider>
        );
      case false:
        return (
          <CharacterProvider>
            <UserProvider>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Root" component={AuthNavigator} />
                </Stack.Navigator>
              </NavigationContainer>
            </UserProvider>
          </CharacterProvider>
        );
      default:
        return (
          <View style={styles.contentContainer}>
            <Spinner />
          </View>
        );
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
    backgroundColor: 'tan',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
