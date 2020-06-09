import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, YellowBox, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Provider as CharacterProvider } from './src/context/CharacterContext';
import { Provider as UserProvider } from './src/context/UserContext';
import { Provider as RollProvider } from './src/context/RollContext';
import { Provider as SpellsProvider } from './src/context/SpellsContext';
import RootNavigator from './src/navigation/RootNavigator';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';

const windowDimensions = Dimensions.get('window')
EStyleSheet.build({ $rem: windowDimensions.width / 380 });

export default function App(props) {
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ]);

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
