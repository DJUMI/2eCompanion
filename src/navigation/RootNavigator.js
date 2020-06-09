import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AuthNavigator from './AuthNavigator';
import ModalNavigator from './ModalNavigator';
import InitialScreen from '../screens/InitialScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Initial';

export default function RootNavigator({ navigation, route }) {

  return (
    <Stack.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
      />
      <Stack.Screen
        name="App"
        component={ModalNavigator}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
};