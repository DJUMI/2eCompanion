import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Card, ModRow } from '../../common';

const renderItem = ({ item }) => (
    <View>
        <Text>{item.title} {item.value}</Text>
    </View>
);

const AbilityScores = ({ data }) => {
    return (
        <View style={styles.container}>
            <Card title='Ability Scores'>
                {/* <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                /> */}
                <View style={styles.contentContainer}>
                    <ModRow mods={data} />
                </View>
            </Card>
        </View>
    );
};

export default AbilityScores;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    }
});
