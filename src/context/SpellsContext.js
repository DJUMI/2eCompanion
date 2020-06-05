import firebase from 'firebase';
import { firestore } from 'firebase/firestore';

import createDataContext from './createDataContext';

const spellsReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_SPELL':
            return state.filter((character) => character.name !== action.payload);
        case 'ADD_SPELL':
            return { ...state, fetching: true };
        case 'CAST_FOCUS':
            return { ...state, focus: { ...state.focus, points: { ...state.focus.points, current: state.focus.points.current - 1 }}};
        case 'REFOCUS':
            return { ...state, focus: { ...state.focus, points: { ...state.focus.points, current: state.focus.points.current + 1 }}};
        case 'CAST_SPELL':
            return state;
        default:
            return state;
    }
};

const createCharacter = dispatch => {
    return () => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection('users').doc(currentUser.uid).collection('characters').doc(Besh.details.name).set(Besh)
            .then(() => console.log('Document successfully written!'))
            .catch(e => console.e('error writing document: ', e))
    }
};

//edit character actions
const deleteSpell = dispatch => {
    return (name) => {
        dispatch({ type: 'DELETE_SPELL', payload: name });
    };
};

//focus spell actions
const castFocus = dispatch => {
    return () => {
        dispatch({ type: 'CAST_FOCUS'});
    };
};

const refocus = dispatch => {
    return (curr, max) => {
        if (curr < max) {
            dispatch({ type: 'REFOCUS' });
        }
    };
};

//spell slot actions
const decreaseSlot = dispatch => {
    return (index) => {
        dispatch({ type: 'DECREASE_SLOT', payload: index });
    };
};

const increaseSlot = dispatch => {
    return (index) => {
        dispatch({ type: 'INCREASE_SLOT', payload: index})
    }
}



const fetchCharacters = dispatch => {
    return () => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection('users').doc(currentUser.uid).collection('characters').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dispatch({ type: 'FETCH_CHARACTERS', payload: doc.data() });
                });
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
    spellsReducer,
    { castFocus, deleteSpell, refocus },
    { spells: {}, focus: { points: { current: 2, max: 2 } } }
);