import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import { Separator } from './Separator';

const Accordion = ({ title, data, renderContent, renderHeader }) => {
    const [selected, setSelected] = useState(undefined);

    const onPress = i => {
        selected === i ?
            setSelected(undefined) :
            setSelected(i)
    };

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => onPress(index + 1)}>
                        {renderHeader(item)}
                    </TouchableOpacity>

                </View>
                {selected === index + 1 ?
                    renderContent(item) :
                    null
                }
            </View>
        );
    };

    const renderSeparator = () => {
        return (
            <View style={styles.separatorContainer}>
                <Separator />
            </View>
        );
    };

    return (
        <View>
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
        </View>
    );
};

export { Accordion };

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.darkBrown,
    },
    titleText: {
        color: 'white',
        fontSize: 20,
    },
    headerContainer: {
        backgroundColor: Colors.mediumBrown,
    },
    separatorContainer: {
        backgroundColor: Colors.mediumBrown,
    },
});
