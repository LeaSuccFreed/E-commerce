import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth';


const config = {
    apiKey: "AIzaSyDj5CIrtuiqJ4DnGhpLVhehmCfSs_89g24",
    authDomain: "crwn-clothing-44a8a.firebaseapp.com",
    databaseURL: "https://crwn-clothing-44a8a.firebaseio.com",
    projectId: "crwn-clothing-44a8a",
    storageBucket: "crwn-clothing-44a8a.appspot.com",
    messagingSenderId: "575859672819",
    appId: "1:575859672819:web:ae93605bb52f13e65a5986",
    measurementId: "G-7FFF19EH3C"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
     
    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
        console.log(userRef)
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;