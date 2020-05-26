import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';

const TestScreen = () => {
    return (
        <View>
            <Card title='Test Card'>
                <Text>Test Card Content</Text>
            </Card>
        </View>
    );
};

export default TestScreen;

const styles = StyleSheet.create({});
