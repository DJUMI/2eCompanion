import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../constants/Colors';

const ActionsList = () => {
    const [showActions, setShowActions] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.title}
                onPress={() => setShowActions(!showActions)}
            >
                <Text style={styles.titleText}>Actions</Text>
            </TouchableOpacity>
            {showActions ?
                <View>
                    <Text style={styles.text}>
                        Treat Wounds
                    </Text>
                </View> :
                null
            }
        </View>
    );
};

export default ActionsList;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        backgroundColor: Colors.darkBrown,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
        paddingLeft: 10,
    },
    titleText: {
        color: 'white',
        fontSize: 20,
    },
    text: {
        color: 'white',
        padding: 5,
    }
});
