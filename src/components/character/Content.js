import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { MAX_HEADER_HEIGHT } from '../../constants/Dimensions';
import Health from './Health';
import Armor from './Armor';
import Saves from './Saves';
import Perception from './Perception';
import Melee from './Melee';
import Ranged from './Ranged';

const Content = () => {

    return (
        <View style={styles.container} >
            <Health />
            <Armor />
            <Saves />
            <Perception />
            <Melee />
            <Ranged />
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
});
