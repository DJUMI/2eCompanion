import { useContext, useEffect, useState } from 'react';
import firebase from 'firebase';

import ApiKeys from '../constants/ApiKeys';
import { Context as CharacterContext } from '../context/CharacterContext';
import { Context as SpellsContext } from '../context/SpellsContext';
import useCachedResources from './useCachedResources';

const useLoadData = () => {
    const resourcesLoaded = useCachedResources();
    const [loggedIn, setLoggedIn] = useState(null);
    const { state, fetchCharacters } = useContext(CharacterContext);
    const { setSpellState } = useContext(SpellsContext);
    const dataLoaded = state.fetched;

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                fetchCharacters();
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
    }, []);

    return { dataLoaded, resourcesLoaded, loggedIn };
};

export default useLoadData;