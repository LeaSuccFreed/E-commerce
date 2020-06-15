import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth';
import { rejects } from 'assert';


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
    //const collectionRef = firestore.collection('users')

    const snapShot = await userRef.get();
    //const collectionSnapshot = await collectionRef.get();
    //console.log(collectionSnapshot)
     
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
        //console.log(userRef)
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    //console.log(collectionRef)

    const batch = firestore.batch()
    objToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInwithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;