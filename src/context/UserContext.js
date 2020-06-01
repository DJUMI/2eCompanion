import firebase from 'firebase';

import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, loading: true, error: '' };
        case 'SIGN_IN_SUCCESS':
            console.log('login success!')
            return { ...state, email: '', error: '', password: '', user: action.payload, loading: false };
        case 'SIGN_IN_FAIL':
            return { ...state, error: action.payload, loading: false };
        case 'SIGN_OUT':
            return { ...state, error: '', email: '', password: '', user: '', loading: false };
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload };
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload };
        default:
            return state;
    };
};

const emailChanged = dispatch => {
    return (text) => {
        dispatch({ type: 'EMAIL_CHANGED', payload: text })
    };
};

const passwordChanged = dispatch => {
    return (text) => {
        dispatch({ type: 'PASSWORD_CHANGED', payload: text })
    };
};

const signIn = dispatch => {
    return ({ email, password }) => {
        dispatch({ type: 'SIGN_IN' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: 'SIGN_IN_SUCCESS', payload: user })
            })
            .catch(error => {
                dispatch({ type: 'SIGN_IN_FAIL', payload: error })
            });
    };
};

const signUp = dispatch => {
    return ({ email, password }) => {
        dispatch({ type: 'SIGN_IN' });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: 'SIGN_IN_SUCCESS', payload: user })
            })
            .catch(error => {
                dispatch({ type: 'SIGN_IN_FAIL', payload: error })
            });
    }
}

const signOut = dispatch => {
    return () => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGN_OUT' });
            })
            .catch(error => {
                dispatch({ type: 'SIGN_IN_FAIL', payload: error });
            });
    };
};


export const { Context, Provider } = createDataContext(
    userReducer,
    { signIn, signUp, signOut, emailChanged, passwordChanged },
    { email: '', password: '', user: '', error: '', loading: false }
);
