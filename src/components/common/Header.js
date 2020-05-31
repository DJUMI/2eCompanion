import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ navigation }) => {
    return (
        <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => navigation.openDrawer()}
        >
            <FontAwesome name="cog" size={36} color="white" />
        </TouchableOpacity>
    );
};

export { Header };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconContainer: {
        padding: 5,
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        top:15,
        zIndex: 5,
    },
});