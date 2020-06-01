import React, { useCallback, useContext, useState } from 'react';
import { Alert, FlatList, Image, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { Context } from '../../context/CharacterContext';

const renderSeparator = () => {
    return <View style={styles.separator} />
};

const DrawerAccordion = ({ navigation }) => {
    const [selected, setSelected] = useState(undefined);
    const [search, setSearch] = useState('');
    const { state, switchCharacter } = useContext(Context);

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

    const renderSwitchOpen = () => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.openContainer}
                    onPress={() => onPress(0)}
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

    const renderSwitchClosed = () => {
        return (
            <TouchableOpacity
                style={styles.closedContainer}
                onPress={() => onPress(0)}
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

    const renderSearchOpen = () => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.openContainer}
                    onPress={() => onPress(1)}
                >
                    <FontAwesome5
                        name="book-open"
                        size={24}
                        color={Colors.gold}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Reference</Text>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={search}
                        onChangeText={text => setSearch(text)}
                    />
                    <TouchableOpacity 
                        style={styles.iconContainer}
                        onPress={handleSearch}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const renderSearchClosed = () => {
        return (
            <TouchableOpacity
                style={styles.closedContainer}
                onPress={() => onPress(1)}
            >
                <FontAwesome5
                    name="book-open"
                    size={24}
                    color={Colors.gold}
                    style={styles.icon}
                />
                <Text style={styles.text}>Reference</Text>
            </TouchableOpacity>
        );
    };

    const onPress = i => {
        selected === i ?
            setSelected(undefined) :
            setSelected(i)
    };

    const handleSearch = useCallback(async () => {
        const url = `https://2e.aonprd.com/Search.aspx?query=${search}`;
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [search]);

    if (selected == 0) {
        return (
            <View>
                {renderSwitchOpen()}
                {renderSearchClosed()}
            </View>
        );
    } else if (selected == 1) {
        return (
            <View>
                {renderSwitchClosed()}
                {renderSearchOpen()}
            </View>
        );
    }

    return (
        <View>
            {renderSwitchClosed()}
            {renderSearchClosed()}
        </View>
    );
};

export default DrawerAccordion;

const styles = EStyleSheet.create({
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
    text: {
        color: Colors.gold,
        fontSize: '20rem',
        flex: 4,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        marginHorizontal: 8,
    },
    list: {
        backgroundColor: Colors.crimson,
        borderBottomWidth: 1,
        borderColor: Colors.gold,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    selectedContainer: {
        flex: 1,
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
    textContainer: {
        flex: 6,
        paddingVertical: 15,
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
    input: {
        padding: '10rem',
        fontSize: '18rem',
        lineHeight: '23rem',
        backgroundColor: 'white',
        flex: 1,
        borderRadius: '2rem',
    },
    searchContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        padding: '15rem',
        backgroundColor: Colors.crimson,
    },
    btn: {
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: '10rem',
        paddingHorizontal: '5rem',
    },
    btnText: {
        color: 'white',
    }
});
