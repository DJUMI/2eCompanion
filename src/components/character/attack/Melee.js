import React from 'react';
import { View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, Separator } from '../../common';
import Weapon from './Weapon';

const Melee = ({ data }) => (
    <View style={styles.container}>
        <Card title='Melee Strikes'>
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

export default Melee;

const styles = EStyleSheet.create({
    container: {
        marginTop: '10rem',
        paddingHorizontal: '10rem',
    },
    contentContainer: {
        paddingHorizontal: '5rem',
    },
});
