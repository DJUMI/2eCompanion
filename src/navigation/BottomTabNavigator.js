import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import CharacterScreen from '../screens/tab/CharacterScreen';
import DetailsScreen from '../screens/tab/DetailsScreen';
import SkillsScreen from '../screens/tab/SkillsScreen';
import SpellsScreen from '../screens/tab/SpellsScreen';
import InventoryScreen from '../screens/tab/InventoryScreen';
import FeatsScreen from '../screens/tab/FeatsScreen';
import TestScreen from '../screens/tab/TestScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Test';

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          title: 'Character',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
        }}
      />
      <BottomTab.Screen
        name="Skills"
        component={SkillsScreen}
        options={{
          title: 'Skills',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />,
        }}
      />
      <BottomTab.Screen
        name="Feats"
        component={FeatsScreen}
        options={{
          title: 'Feats',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="running" />,
        }}
      />
      <BottomTab.Screen
        name="Spells"
        component={SpellsScreen}
        options={{
          title: 'Spells',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="hat-wizard" />,
        }}
      />
      <BottomTab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          title: 'Inventory',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="briefcase" />,
        }}
      />
      <BottomTab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="align-justify" />,
        }}
      />
      <BottomTab.Screen
        name="Test"
        component={TestScreen}
        options={{
          title: 'Test',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="cogs" />,
        }}
      />
    </BottomTab.Navigator>
  );
};
