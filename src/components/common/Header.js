import React from 'react';
import { TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ navigation }) => (
    <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.openDrawer()}
    >
        <FontAwesome name="cog" size={36} color="white" />
    </TouchableOpacity>
);

export { Header };

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconContainer: {
        padding: '5rem',
        position: 'absolute',
        width: '50rem',
        height: '50rem',
        alignItems: 'center',
        justifyContent: 'center',
        right: '5rem',
        top: '15rem',
        zIndex: 5,
    },
});