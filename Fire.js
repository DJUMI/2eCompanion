import * as firebase from 'firebase';
import ApiKeys from './src/constants/ApiKeys';

class Fire {
    init() {
        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {});
            }
        });
    }
}

export default Fire;