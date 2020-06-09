import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import ApiKeys from './src/constants/ApiKeys';

if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);
}

firebase.analytics();

export const db = firebase.firestore();

export default firebase;