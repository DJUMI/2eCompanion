import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import DetailsContent from '../../components/details/DetailsContent';
import { EditHeader } from '../../components/common';

const EditDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <EditHeader />
            <ScrollView>
                <DetailsContent />
            </ScrollView>
        </View>
    );
};

export default EditDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});