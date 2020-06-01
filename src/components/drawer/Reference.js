import React, { useCallback, useState } from 'react';
import { Alert, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const Reference = () => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const renderClosed = () => {
        return (
            <TouchableOpacity
                style={styles.closedContainer}
                onPress={() => setIsOpen(true)}
            >
                <FontAwesome5
                    name="search"
                    size={24}
                    color={Colors.gold}
                    style={styles.icon}
                />
                <Text style={styles.text}>Reference</Text>
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
                    <FontAwesome5
                        name="search"
                        size={24}
                        color={Colors.gold}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Reference</Text>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder='Type your search here'
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={search}
                        onChangeText={text => setSearch(text)}
                    />
                    <TouchableOpacity 
                        style={styles.iconContainer}
                        onPress={handlePress}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const handlePress = useCallback(async () => {
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

    return (
        isOpen ?
            renderOpen() :
            renderClosed()
    );
};

export default Reference;

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
    input: {
        padding: '10rem',
        fontSize: '18rem',
        lineHeight: '23rem',
        backgroundColor: 'white',
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.gold,
        padding: '15rem'
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
