import React from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, Separator } from '../../common';
import Weapon from './Weapon';

const Ranged = ({ data }) => {
    return (
        <View style={styles.container}>
            <Card title='Ranged Strikes'>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <Weapon item={item} />
                    }}
                    ItemSeparatorComponent={Separator}
                    contentContainerStyle={styles.contentContainer}
                />
            </Card>
        </View>
    );
};

export default Ranged;

const styles = EStyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        paddingHorizontal: 5,
    },
});
