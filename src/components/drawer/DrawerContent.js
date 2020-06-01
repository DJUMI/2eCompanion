import React, { useContext } from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import DrawerAccordion from './DrawerAccordion';
import CharacterSwitch from './CharacterSwitch';
import Colors from '../../constants/Colors';
import Reference from './Reference';
import { Context } from '../../context/UserContext';

const DrawerContent = ({ navigation }) => {
    const { signOut } = useContext(Context);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => console.log('roll')}
            >
                <FontAwesome5
                    name="dice-d20"
                    size={24}
                    color={Colors.gold}
                    style={styles.icon}
                />
                <Text style={styles.text}>Roll</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate('Edit Character')}
            >
                <FontAwesome5
                    name="user-edit"
                    size={24}
                    color={Colors.gold}
                    style={styles.icon}
                />
                <Text style={styles.text}>Edit Character</Text>
            </TouchableOpacity>
            {/* <CharacterSwitch navigation={navigation}/>
            <Reference /> */}
            <DrawerAccordion navigation={navigation} />
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={signOut}
            >
                <FontAwesome5
                    name="sign-out-alt"
                    size={24}
                    color={Colors.gold}
                    style={styles.icon}
                />
                <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default DrawerContent;

const styles = EStyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: Colors.gold,
    },
    text: {
        color: Colors.gold,
        fontSize: '20rem',
        flex: 4,
    },
    itemContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        padding: '15rem',
        paddingVertical: '20rem',
    },
    icon: {
        flex: 1,
    }
});
