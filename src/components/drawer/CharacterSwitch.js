import React, { useContext, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import { Context } from '../../context/CharacterContext';

const renderSeparator = () => {
    return <View style={styles.separator} />
};

const CharacterSwitch = ({ navigation }) => {
    const { state, switchCharacter } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);

    const renderClosed = () => {
        return (
            <TouchableOpacity
                style={styles.closedContainer}
                onPress={() => setIsOpen(true)}
            >
                <MaterialCommunityIcons
                    name="account-switch"
                    size={24}
                    color={Colors.gold}
                    style={styles.icon}
                />
                <Text style={styles.text}>Switch Character</Text>
            </TouchableOpacity>
        );
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                    switchCharacter(index);
                    navigation.closeDrawer();
                }}
            >
                <View style={styles.selectedContainer}>
                    {/* {index == state.current ?
                        <View style={styles.selected} /> :
                        null
                    } */}
                </View>

                <View style={styles.imageContainer}>
                    {item.details.image === '' ?
                        <Image
                        source={require('../../../assets/images/default-profile.png')}
                        style={styles.image}
                    /> : <Image
                        source={{ uri: item.details.image }}
                        style={styles.image}
                        resizeMode='contain'
                    />}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{item.details.name}</Text>
                    <Text style={styles.itemText}>
                        {item.details.ancestry} {item.details.class}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderOpen = () => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.openContainer}
                    onPress={() => setIsOpen(false)}
                >
                    <MaterialCommunityIcons
                        name="account-switch"
                        size={24}
                        color={Colors.gold}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Switch Character</Text>
                </TouchableOpacity>
                <FlatList
                    data={state.characters}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    style={styles.list}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>

        );
    };

    return (
        isOpen ?
            renderOpen() :
            renderClosed()
    );
};

export default CharacterSwitch;

const styles = EStyleSheet.create({
    text: {
        color: Colors.gold,
        fontSize: '20rem',
        flex: 4,
    },
    closedContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        padding: '15rem',
        paddingVertical: '20rem',
    },
    openContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        paddingLeft: '30rem',
        paddingVertical: '20rem',
    },
    icon: {
        flex: 1,
    },
    selectedContainer: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    textContainer: {
        flex: 6,
        paddingVertical: 15,
    },
    imageContainer: {
        flex: 3,
        paddingVertical: 15,
    },
    image: {
        height: 75,
        width: 75,
        backgroundColor: 'white',
        borderRadius: 2,
    },
    nameText: {
        color: Colors.gold,
        fontSize: 30,
        fontWeight: 'bold',
    },
    itemText: {
        color: Colors.gold,
        fontSize: 18,
    },
    list: {
        backgroundColor: Colors.crimson,
        borderBottomWidth: 1,
        borderColor: Colors.gold,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        marginHorizontal: 8,
    },
    selected: {
        flex: 1,
        width: 1,
        //height: 106,
        backgroundColor: Colors.gold,
    },
});
