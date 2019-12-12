import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyAOuwfhmAHbInn6DuUcquLUcgTZhBBeWi8",
    authDomain: "crwn-db-94367.firebaseapp.com",
    databaseURL: "https://crwn-db-94367.firebaseio.com",
    projectId: "crwn-db-94367",
    storageBucket: "crwn-db-94367.appspot.com",
    messagingSenderId: "414318871248",
    appId: "1:414318871248:web:c73c3ce253c35e0cdc14d5",
    measurementId: "G-P44KR9W7G2"
 };
firebase.initializeApp(config)
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const SignInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase ;       
