import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Keyboard } from 'react-native';

import DrawerScreen from '../screens/drawer/DrawerScreen';
import BottomTabNavigator from './BottomTabNavigator';
import EditTabNavigator from './EditTabNavigator';
import RollScreen from '../screens/modal/RollScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation, route }) {
    navigation.setOptions({ headerShown: false });

    return (
        <Drawer.Navigator
            drawerPosition='right'
            drawerContent={(props) => <DrawerScreen {...props} />}
            screenOptions={{ unmountOnBlur: true }}
        >
            <Drawer.Screen
                name="Tabs"
                component={BottomTabNavigator}
                listeners={{
                    drawerClose: e => {
                        Keyboard.dismiss();
                    }
                }} 
            />
            <Drawer.Screen name="Edit Character" component={EditTabNavigator} />
        </Drawer.Navigator>
    );
};