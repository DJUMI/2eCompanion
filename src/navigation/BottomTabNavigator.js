import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import CharacterScreen from '../screens/CharacterScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FeatsScreen from '../screens/FeatsScreen';
import SpellsScreen from '../screens/SpellsScreen';
import InventoryScreen from '../screens/InventoryScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Character';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
      }}
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
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Character':
      return 'Character';
    case 'Feats':
      return 'Feats';
    case 'Spells':
      return 'Spells';
    case 'Inventory':
      return 'Inventory';
    case 'Details':
      return 'Details';
  }
}
