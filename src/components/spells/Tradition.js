import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card } from '../common';
import Schools from './Schools';
import Colors from '../../constants/Colors';

const Tradition = ({ data: { tradition, casterType } }) => (
    <View style={styles.container}>
        <Card title='Tradition'>
            <View style={styles.contentContainer}>
                <Schools school={tradition} />
                {casterType ? <Text style={styles.text}>{casterType}</Text> : null}
            </View>
        </Card>
    </View>
);

export default Tradition;

const styles = EStyleSheet.create({
    container: {
        flex: 3,
        marginRight: '5rem',
        paddingBottom: '10rem',
    },
    contentContainer: {
        padding: '5rem',
    },
    text: {
        color: 'white',
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        marginTop: '5rem',
        paddingVertical: '5rem',
        paddingHorizontal: '20rem',
        borderColor: 'white',
        borderWidth: '1rem',
    },
});
