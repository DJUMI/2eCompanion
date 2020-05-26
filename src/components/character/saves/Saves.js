import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import Card from '../../Card';
import CircleBtn from '../../CircleBtn';

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Fortitude</Text>
                <CircleBtn title='Fortitude' value='E8'/>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Reflex</Text>
                <CircleBtn title='Reflex' value='T6'/>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Will</Text>
                <CircleBtn title='Will' value='E11'/>
            </View>
        </View>
    );
};

const Saves = () => {
    return (
        <View style={styles.container}>
            <Card title='Saving Throws'>
                {renderContent()}
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
    contentContainer: {
        flexDirection: 'row',
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
