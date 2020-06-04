import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

const TabBarIcon = (props) => (
  <FontAwesome5
    name={props.name}
    size={30}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
