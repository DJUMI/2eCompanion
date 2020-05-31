import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import BottomTabNavigator from './BottomTabNavigator';
import EditTabNavigator from './EditTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation, route }) {
    navigation.setOptions({ headerShown: false });

    return (
        <Drawer.Navigator
            drawerPosition='right'
            options={{ swipeEnabled: false }}
        >
            <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen name="Edit Character" component={EditTabNavigator} />
        </Drawer.Navigator>
    );
};