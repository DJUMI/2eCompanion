import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'SignIn';

export default function AuthNavigator({ navigation, route }) {
  navigation.setOptions({ headerShown: false });

  return (
    <Stack.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};