import { useContext, useEffect } from 'react';

import { Context } from '../context/CharacterContext';

const useLoadData = () => {
    const { state, fetchCharacters } = useContext(Context);
    const fetched = state.fetched;

    useEffect(() => {
        fetchCharacters();
    }, [])

    return fetched;
};

export default useLoadData;