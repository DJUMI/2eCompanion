import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Context } from '../context/CharacterContext';
import { Btn, Input } from '../components/common';

const TestScreen = () => {
    const { state, addCharacter, deleteCharacter } = useContext(Context);
    const [character, setCharacter] = useState('');

    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }} 
            />
            <Input
                placeholder=''
                label=''
                value={character}
                onChangeText={character => setCharacter(character)}
            />
            <Btn title='Add Character' onPress={() => addCharacter(character)}/>
            <Btn title='Delete Character' onPress={() => deleteCharacter(character)}/>
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
