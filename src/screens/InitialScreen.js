import useLoadData from '../hooks/useLoadData';

const InitialScreen = ({ navigation }) => {
    const isDataLoaded = useLoadData();
    if (isDataLoaded) {
        navigation.navigate('App');
    }
    return null
};

export default InitialScreen;