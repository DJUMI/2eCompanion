import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import { Separator } from './Separator';

const renderSeparator = () => (
    <View style={styles.separatorContainer}>
        <Separator />
    </View>
);

const Accordion = ({ title, data, renderContent, renderHeader }) => {
    const [selected, setSelected] = useState(undefined);

    const onPress = i => {
        selected === i ?
            setSelected(undefined) :
            setSelected(i)
    };

    const renderItem = ({ item, index }) => (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => onPress(index + 1)}>
                    {renderHeader(item)}
                </TouchableOpacity>

            </View>
            {selected === index + 1 ?
                renderContent(item) :
                null
            }
        </>
    );

    return (
        <>
            {title ?
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                </View> :
                null
            }

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                listKey={Math.random()}
                renderItem={(item, index) => renderItem(item, index)}
                ItemSeparatorComponent={renderSeparator}
            />
        </>
    );
};

export { Accordion };

const styles = EStyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        paddingHorizontal: '10rem',
        paddingVertical: '5rem',
        backgroundColor: Colors.darkBrown,
    },
    titleText: {
        color: 'white',
        fontSize: '20rem',
    },
    headerContainer: {
        backgroundColor: Colors.mediumBrown,
    },
    separatorContainer: {
        backgroundColor: Colors.mediumBrown,
    },
});
