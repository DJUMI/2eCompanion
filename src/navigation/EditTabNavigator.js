import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import EditCharacterScreen from '../screens/edit/EditCharacterScreen';
import EditDetailsScreen from '../screens/edit/EditDetailsScreen';
import EditSkillsScreen from '../screens/edit/EditSkillsScreen';
import EditSpellsScreen from '../screens/edit/EditSpellsScreen';
import EditInventoryScreen from '../screens/edit/EditInventoryScreen';
import EditFeatsScreen from '../screens/edit/EditFeatsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Character';

export default function EditTabNavigator({ navigation, route }) {
    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
        >
            <BottomTab.Screen
                name="Character"
                component={EditCharacterScreen}
                options={{
                    title: 'Character',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
                }}
            />
            <BottomTab.Screen
                name="Skills"
                component={EditSkillsScreen}
                options={{
                    title: 'Skills',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />,
                }}
            />
            <BottomTab.Screen
                name="Feats"
                component={EditFeatsScreen}
                options={{
                    title: 'Feats',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="running" />,
                }}
            />
            <BottomTab.Screen
                name="Spells"
                component={EditSpellsScreen}
                options={{
                    title: 'Spells',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="hat-wizard" />,
                }}
            />
            <BottomTab.Screen
                name="Inventory"
                component={EditInventoryScreen}
                options={{
                    title: 'Inventory',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="briefcase" />,
                }}
            />
            <BottomTab.Screen
                name="Details"
                component={EditDetailsScreen}
                options={{
                    title: 'Details',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="align-justify" />,
                }}
            />
        </BottomTab.Navigator>
    );
};