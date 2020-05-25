import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Card from '../../Card';
import ConditionsList from './ConditionsList';
import Colors from '../../../constants/Colors';

const renderConditions = () => {
    return (
        <ConditionsList />
    );
};

const renderDying = () => {
    return (
        <Text style={styles.dyingText}>0</Text>
    );
};

const Status = () => {
    return (
        <View style={styles.container}>
            <Card title='Conditions' renderContent={renderConditions}/>
            <View style={styles.dyingWoundedContainer}>
                <View style={styles.dying}>
                    <View style={styles.topContainer}>
                        <Text style={styles.dyingText}>Dying</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.dyingText}>0</Text>
                    </View>
                </View>
                {/* <Card title='Dying' renderContent={renderDying}/>
                <Card title='Wounded' renderContent={renderDying} /> */}
                <View style={styles.wounded}>
                    <View style={styles.topContainer}>
                        <Text style={styles.dyingText}>Wounded</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.dyingText}>0</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Status;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    conditions: {
        flex: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleContainer: {
        backgroundColor: Colors.blue,
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    dyingWoundedContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    dying: {
        flex: 1,
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    wounded: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    topContainer: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.mediumBrown,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    dyingText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    }
});