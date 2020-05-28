import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../constants/Colors';
import { Separator } from './Separator';

const Accordion = ({ title, data, renderContent, renderHeader }) => {
    const [selected, setSelected] = useState(undefined);

    const onPress = i => {
        selected === i ?
            setSelected(undefined) :
            setSelected(i)
    };

    return (
        <View>
            {title ?
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                </View> :
                null
            }

            <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => onPress(0)}>
                        {renderHeader(data[0])}
                    </TouchableOpacity>

                </View>
                {selected === 0 ?
                    renderContent(data[0]) :
                    null
                }
            </View>

            {data.slice(1).map((item, i) => (
                <View>
                    <View style={styles.headerContainer}>
                        <Separator />
                        <TouchableOpacity onPress={() => onPress(i+1)}>
                            {renderHeader(item)}
                        </TouchableOpacity>

                    </View>
                    {selected === i+1 ?
                        renderContent(item) :
                        null
                    }
                </View>
            ))}
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
});
