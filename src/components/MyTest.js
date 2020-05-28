import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';

const MyTest = ({ title, children }) => {
    const [expanded, setExpanded] = useState(true);
    const [minHeight, setMinHeight] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);
    const [animation, setAnimation] = useState(new Animated.Value(1000));

    const toggle = () => {
        let initialValue = expanded ? maxHeight + minHeight : minHeight;
        let finalValue = expanded ? minHeight : maxHeight + minHeight;

        setExpanded(!expanded);

        setAnimation(initialValue);
        Animated.spring(animation, {
            toValue: finalValue
        }).start();
    };

    const _setMaxHeight = (e) => {
        setMaxHeight(e.nativeEvent.layout.height);
    };

    const _setMinHeight = (e) => {
        setMinHeight(e.nativeEvent.layout.height);
    };

    return (
        <Animated.View style={[styles.container, { height: animation }]}>
            <View style={styles.titleContainer} onLayout={_setMinHeight}>
                <Text style={styles.title}>{title}</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={toggle}
                >
                    <Text>Hi</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.body} onLayout={_setMaxHeight}>
                {children}
            </View>
        </Animated.View>
    );
};

export default MyTest;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});