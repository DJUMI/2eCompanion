import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import FeatsContent from '../../components/feats/FeatsContent';
import { EditHeader } from '../../components/common';

const EditFeatsScreen = () => {
    return (
        <View style={styles.container}>
            <EditHeader />
            <ScrollView>
                <FeatsContent />
            </ScrollView>
        </View>

    );
};

export default EditFeatsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});