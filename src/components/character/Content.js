import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { MAX_HEADER_HEIGHT } from '../../constants/Dimensions';
import Health from './Health';

const Content = () => {
    
    return (
        <View style={styles.container} >
            <Health />
            <Text>More Character Stuff</Text>
            <Text>Even More Character Stuff</Text>
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    container: {
      },
});
