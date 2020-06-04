import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, CircleBtn } from '../../common';

const Saves = ({ data }) => (
    <View style={styles.container}>
        <Card title='Saving Throws'>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled='false'
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <CircleBtn title={`${item.title} Saving Throw`} prof={item.prof} mod={item.value} />
                        </View>
                    );
                }}
                contentContainerStyle={styles.list}
            />
        </Card>
    </View>
);

export default Saves;

const styles = EStyleSheet.create({
    container: {
        marginTop: '10rem',
        paddingHorizontal: '10rem',
    },
    list: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '15rem',
        paddingTop: '5rem',
        paddingBottom: '10rem',
    },
    itemContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: '18rem',
        paddingBottom: '10rem',
    },
});
