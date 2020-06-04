import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';

import { Context as CharacterContext } from '../../context/CharacterContext';
import { Context as UserContext } from '../../context/UserContext';
import { Btn, Header, Input } from '../../components/common';

const TestScreen = ({ navigation }) => {
    const { state: { user } } = useContext(UserContext);
    const { state, createCharacter, deleteCharacter, switchCharacter, fetchCharacters } = useContext(CharacterContext);
    const [character, setCharacter] = useState('');

    useEffect(() => {
        //console.log('user is: ', user);
    }, [user])

    const renderSelected = () => (
        state.characters.length ?
            <Text>{state.characters[state.current].details.name}</Text> :
            null
    );

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text>Available Characters:</Text>
            <FlatList
                data={state.characters}
                keyExtractor={(item) => item.details.name}
                renderItem={({ item }) => <Text>{item.details.name}</Text>}
            />
            <Text>Selected Character: {renderSelected()}</Text>
            <Input
                placeholder=''
                label=''
                value={character}
                onChangeText={character => setCharacter(character)}
            />
            <Btn
                title='Roll'
                onPress={() => navigation.navigate("Roll", { title: 'menu' })}
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

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: '5rem',
        paddingTop: '250rem',
    },
    contentContainer: {
        padding: '5rem',
        height: '100rem',
    },
    text: {
        color: 'white'
    }
});
