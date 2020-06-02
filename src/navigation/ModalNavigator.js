import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import DrawerNavigator from './DrawerNavigator';
import RollScreen from '../screens/modal/RollScreen';

const Stack = createStackNavigator();

export default ModalNavigator = ({ navigation, route }) => (
    <Stack.Navigator
        mode="modal"
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
    >
        <Stack.Screen
            name="Root"
            component={DrawerNavigator}
        />
        <Stack.Screen
            name="Roll"
            component={RollScreen}
            options={{
                animationEnabled: true,
                cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => {
                    return {
                        cardStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 0.5, 0.9, 1],
                                outputRange: [0, 0.25, 0.7, 1],
                            }),
                        },
                        overlayStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.5],
                                extrapolate: "clamp",
                            }),
                        },
                    };
                },
            }}
        />
    </Stack.Navigator>
);
