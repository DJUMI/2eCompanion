import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Separator } from '../common';
import Colors from '../../constants/Colors';

const renderClosed = (title) => {
    return (
        <View style={styles.closedContainer}>
            {/* <View style={styles.iconContainer}></View> */}
            <Text style={styles.titleText}>{title}</Text>
            {/* <View style={styles.iconContainer}>
                <Feather
                    name='chevron-down'
                    color='white'
                    size={20}
                />
            </View> */}
        </View>
    );
};

const renderExpanded = (title, empty) => {
    return (
        <View style={styles.expandedContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
};

const renderEmpty = (empty) => {
    return (
        empty === 'light' ?
            <View style={styles.emptyLight}>
                <Separator />
            </View> :
            <View style={styles.emptyDark}>
                <Separator />
            </View>
    );
}

const Card = ({ title, children, empty }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                {isExpanded ?
                    renderExpanded(title, empty) :
                    renderClosed(title)
                }
            </TouchableOpacity>
            <View style={styles.itemContainer}>
                {isExpanded ?
                    empty ? renderEmpty(empty) : children :
                    null
                }
            </View>
        </View>
    );
};

export { Card };

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
    },
    emptyLight: {
        padding: 10,
        paddingHorizontal: 50,
        backgroundColor: Colors.lightBrown,
    },
    emptyDark: {
        padding: 10,
        paddingHorizontal: 50,
        backgroundColor: Colors.mediumBrown,
    }
});