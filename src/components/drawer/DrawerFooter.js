import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

const DrawerFooter = () => {
    return (
        <View style={styles.container}>
        </View>
    );
};

export default DrawerFooter;

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderColor: Colors.gold,
        borderTopWidth: 1,
        marginHorizontal: 10
    }
});
