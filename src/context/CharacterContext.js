import createDataContext from './createDataContext';

const characterReducer = (state, action) => {
    switch (action.type) {
        case 'delete_character':
            return state.filter((character) => character.name !== action.payload);
        case 'add_character':
            return [...state, { name: action.payload }];
        default:
            return state;
    }
};

const addCharacter = dispatch => {
    return (name) => {
        dispatch({ type: 'add_character', payload: name });
    };
};

const deleteCharacter = dispatch => {
    return (name) => {
        dispatch({ type: 'delete_character', payload: name})
    }
}

export const { Context, Provider } = createDataContext(
    characterReducer,
    { addCharacter, deleteCharacter },
    [{ name: 'Besh' }]
);