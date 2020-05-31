import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';

import { Context as CharacterContext } from '../context/CharacterContext';
import { Context as UserContext } from '../context/UserContext';
import { Btn, Input } from '../components/common';

const TestScreen = () => {
    const { state: { user } } = useContext(UserContext);
    const { state, createCharacter, deleteCharacter, switchCharacter, fetchCharacters } = useContext(CharacterContext);
    const [character, setCharacter] = useState('');

    useEffect(() => {
        //console.log('user is: ', user);
    },[user])

    const renderSelected = () => {
        return (
        state.characters.length ?
            <Text>{state.characters[state.current].details.name}</Text> :
            null
        );
    };

    return (
        <View style={styles.container}>
            <Text>Available Characters:</Text>
            <FlatList
                data={state.characters}
                keyExtractor={(item) => item.details.name}
                renderItem={({ item }) => {
                    return <Text>{item.details.name}</Text>
                }}
            />
            <Text>Selected Character: {renderSelected()}</Text>
            <Input
                placeholder=''
                label=''
                value={character}
                onChangeText={character => setCharacter(character)}
            />
            <Btn
                title='Switch Character'
                onPress={() => {
                    switchCharacter(character)
                }} 
            />
            <Btn
                title='Fetch Characters'
                onPress={() => {
                    fetchCharacters()
                }} 
            />
            
            <Btn title='Create Character' onPress={createCharacter} />
            <Btn title='Delete Character' onPress={() => deleteCharacter(character)} />
            <Btn title='Sign Out' onPress={() => firebase.auth().signOut()} />
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