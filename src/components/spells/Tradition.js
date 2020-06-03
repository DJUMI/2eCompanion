import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '../common';
import Schools from './Schools';
import Colors from '../../constants/Colors';

const Tradition = ({ data: { tradition, casterType }}) => {
    return (
        <View style={styles.container}>
            <Card title='Tradition'>
                <View style={styles.contentContainer}>
                    <Schools school={tradition}/>
                    {casterType ? <Text style={styles.text}>{casterType}</Text> : null}
                </View>
            </Card>
        </View>
    );
};

export default Tradition;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginRight: 5,
        paddingBottom: 10,
    },
    contentContainer: {
        padding: 5,
    },
    text: {
        color: 'white',
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: 1,
    },
});
