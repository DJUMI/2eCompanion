import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../constants/Colors';

const renderClosed = (title) => {
    return (
        <View style={styles.closedContainer}>
            <View style={styles.iconContainer}></View>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.iconContainer}>
                <FontAwesome5
                    name='caret-down'
                    color='white'
                    size={20}
                />
            </View>
        </View>
    );
};

const renderExpanded = (title) => {
    return (
        <View style={styles.expandedContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
};

const Card = ({ data, title, renderContent }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                {isExpanded ?
                    renderExpanded(title) :
                    renderClosed(title)
                }
            </TouchableOpacity>
            <View style={styles.itemContainer}>
                {isExpanded ?
                    renderContent(data) :
                    null
                }
            </View>
        </View>
    );
};

export default Card;

const styles = EStyleSheet.create({
    container: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    closedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderRadius: 5,
    },
    expandedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        padding: 5,
    },
    itemContainer: {
        backgroundColor: Colors.lightBrown,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
    }
});