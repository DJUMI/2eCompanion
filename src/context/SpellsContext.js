import firebase from 'firebase';
import { firestore } from 'firebase/firestore';

import createDataContext from './createDataContext';

const spellsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, spells: action.payload };
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
//initial state
const setSpellState = dispatch => {
    return (state) => {
        console.log('hi')
        dispatch({ type: 'SET_STATE', payload: state })
    };
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

export const { Context, Provider } = createDataContext(
    spellsReducer,
    { setSpellState, deleteSpell, castFocus, refocus, decreaseSlot, increaseSlot },
    { spells: {}, focus: { points: { current: 2, max: 2 } } }
);