import firebase from 'firebase';
import { firestore } from 'firebase/firestore';

import createDataContext from './createDataContext';
import Besh from '../constants/characters/Besh';
import Gyro from '../constants/characters/Gyro';
import Moggy from '../constants/characters/Moggy';
import Chauncey from '../constants/characters/Chauncey';

const characterReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CHARACTER':
            return state.filter((character) => character.name !== action.payload);
        case 'FETCH_START':
            return { ...state, fetched: false };
        case 'FETCH_CHARACTERS':
            return { ...state, characters: action.payload, fetched: true };
        case 'SWITCH_CHARACTERS':
            return { ...state, current: action.payload };
        default:
            return state;
    }
};

const editCharacter = dispatch => {
    return (text, details) => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        //const currentCharacter = state.characters[state.current];
        //const updatedCharacter = { ...currentCharacter, details: { ...currentCharacter.details, notes: [ ...notes, text ]}};
        //const oldNotes = state.characters[state.current].details.notes;
        //const updatedNotes = [ ...oldNotes, text];
        db.collection('users').doc(currentUser.uid).collection('characters').doc('Besh').update({
            details: { ...details, notes: [ ...details.notes, text]}
        })
            .then(() => {
                console.log('character successfully edited!');
                fetchCharacters();
            })
        //dispatch({ type: 'EDIT_CHARACTER', payload: text });
    };
};

const createCharacter = dispatch => {
    return () => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection('users').doc(currentUser.uid).collection('characters').doc(Chauncey.details.name).set(Chauncey)
            .then(() => console.log('Document successfully written!'))
            .catch(e => console.e('error writing document: ', e))
    }
};

const deleteCharacter = dispatch => {
    return (name) => {
        dispatch({ type: 'DELETE_CHARACTER', payload: name });
    };
};

const fetchCharacters = dispatch => {
    return () => {
        dispatch({ type: 'FETCH_START' });
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const fetched = [];
        db.collection('users').doc(currentUser.uid).collection('characters').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    fetched.push(doc.data());                    
                })
                dispatch({ type: 'FETCH_CHARACTERS', payload: fetched });
            }).catch(function (error) {
                    console.log("Error getting document:", error);
                });
    };
};

const switchCharacter = dispatch => {
    return (index) => {
        dispatch({ type: 'SWITCH_CHARACTERS', payload: index });
    };
};

export const { Context, Provider } = createDataContext(
    characterReducer,
    { createCharacter, deleteCharacter, fetchCharacters, switchCharacter, editCharacter },
    { current: 0, characters: [], fetched: false }
);