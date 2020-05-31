import firebase from 'firebase';
import { firestore } from 'firebase/firestore';

import createDataContext from './createDataContext';
import Besh from '../constants/characters/Besh';
import Gyro from '../constants/characters/Gyro';

const characterReducer = (state, action) => {
    switch (action.type) {
        case 'delete_character':
            return state.filter((character) => character.name !== action.payload);
        case 'add_character':
            return [...state, { name: action.payload }];
        case 'fetch_character':
            const updatedCharacters = [...state.characters, action.payload]
            return {...state, characters: updatedCharacters};
        case 'switch_character':
            return {...state, current: action.payload};
        default:
            return state;
    }
};

const createCharacter = dispatch => {
    return () => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection('users').doc(currentUser.uid).collection('characters').doc(Gyro.details.name).set(Gyro)
            .then(() => console.log('Document successfully written!'))
            .catch(e => console.e('error writing document: ', e))
    }


};

const deleteCharacter = dispatch => {
    return (name) => {
        dispatch({ type: 'delete_character', payload: name });
    };
};

const fetchCharacter = dispatch => {
    return (name) => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection('users').doc(currentUser.uid).collection('characters').doc(name).get()
            .then((doc) => {
                if (doc.exists) {
                    dispatch({ type: 'fetch_character', payload: doc.data() });
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    };
};

const switchCharacter = dispatch => {
    return (index) => {
        dispatch({ type: 'switch_character', payload: index });
    };
};

export const { Context, Provider } = createDataContext(
    characterReducer,
    { createCharacter, deleteCharacter, fetchCharacter, switchCharacter },
    { current: 0, characters: [] }
);