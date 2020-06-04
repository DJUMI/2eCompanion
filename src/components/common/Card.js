import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Separator } from '../common';
import Colors from '../../constants/Colors';

const renderClosed = (title) => (
    <View style={styles.closedContainer}>
        <Text style={styles.titleText}>{title}</Text>
    </View>
);

const renderExpanded = (title) => (
    <View style={styles.expandedContainer}>
        <Text style={styles.titleText}>{title}</Text>
    </View>
);

const renderEmpty = (empty) => (
    empty === 'light' ?
        <View style={styles.emptyLight}>
            <Separator />
        </View> :
        <View style={styles.emptyDark}>
            <Separator />
        </View>
);

const Card = ({ title, children, empty }) => {
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
            height: '2rem',
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    closedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderRadius: '5rem',
    },
    expandedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
    },
    titleText: {
        color: 'white',
        fontSize: '20rem',
        padding: '5rem',
    },
    itemContainer: {
        backgroundColor: Colors.lightBrown,
        borderBottomLeftRadius: '5rem',
        borderBottomRightRadius: '5rem',
        overflow: 'hidden',
    },
    emptyLight: {
        padding: '10rem',
        paddingHorizontal: '50rem',
        backgroundColor: Colors.lightBrown,
    },
    emptyDark: {
        padding: '10rem',
        paddingHorizontal: '50rem',
        backgroundColor: Colors.mediumBrown,
    }
});