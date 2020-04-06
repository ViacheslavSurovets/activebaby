import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDgun1gJdSBNkR_akSSkQCHlzHCH9w-Znc',
  authDomain: 'active-baby-271312.firebaseapp.com',
  databaseURL: 'https://active-baby-271312.firebaseio.com',
  projectId: 'active-baby-271312',
  storageBucket: 'active-baby-271312.appspot.com',
  messagingSenderId: '435131925301',
  appId: '1:435131925301:web:4e56de4ccebd43c5e4027c',
  measurementId: 'G-HTQQPLHG7D'
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if ( !userAuth ) return;

  const userRef = firestore.doc ( `users/${ userAuth.uid }` );

  const snapShot = await userRef.get ();
  if ( !snapShot.exists ) {
    const { displayName, email } = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set ( {
        displayName,
        email,
        createdAt,
        ...additionalData
      } );
    } catch ( error ) {
      console.log ( 'error creating user', error.message );
    }
  }

  return userRef;

};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj =>{
    const newDocRef = collectionRef.doc();
    batch.set( newDocRef, obj );
  });

  return await batch.commit()
};


firebase.initializeApp ( config );

export const auth = firebase.auth ();
export const firestore = firebase.firestore ();

const provider = new firebase.auth.GoogleAuthProvider ();
provider.setCustomParameters ( { prompt: 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup ( provider );

export default firebase;

