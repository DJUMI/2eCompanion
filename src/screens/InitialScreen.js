import useLoadData from '../hooks/useLoadData';

const InitialScreen = ({ navigation }) => {
    const { dataLoaded, resourcesLoaded, loggedIn } = useLoadData();

    if (resourcesLoaded) {
        switch (loggedIn) {
            case true:
                if (dataLoaded) {
                    navigation.navigate('App');
                    return null
                } else return null
            case false:
                navigation.navigate('Auth');
                return null
            default:
                return null
        }
    }

    return null
};

export default InitialScreen;