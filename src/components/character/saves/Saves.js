import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, CircleBtn } from '../../common';

const Saves = ({ data }) => {
    return (
        <View style={styles.container}>
            <Card title='Saving Throws'>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <CircleBtn title={item.title} value={`${item.prof}${item.value}`} />
                            </View>
                        );
                    }}
                    contentContainerStyle={styles.list}
                />
            </Card>
        </View>
    );
};

export default Saves;

const styles = EStyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    list: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 10,
    },
    itemContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        paddingBottom: 10,
    },
});
