import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedTest from '../components/AnimatedTest';
import MyTest from '../components/MyTest';
import Card from '../components/Card';

const TestScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Card title='Test Card'>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>Test Card Content</Text>
                </View>
            </Card> */}
            <AnimatedTest title='Test Card'>
                <Text style={styles.text}>Test Card Content</Text>
            </AnimatedTest>
            <MyTest title='My Test Card'>
                <Text style={styles.text}>Test Card Content</Text>
            </MyTest>
        </View>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        paddingTop: 250,
    },
    contentContainer: {
        padding: 5,
        height: 100,
    },
    text: {
        color: 'white'
    }
});
