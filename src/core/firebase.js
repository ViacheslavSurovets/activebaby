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

export const convertCollectionSnapshotToMap = collectionsSnapshot => {
  const transformCollection = collectionsSnapshot.docs.map ( doc => {
    const { title, items, routeName, id } = doc.data ();

    return {
      routeName,
      id,
      title,
      items
    };
  } );

  return transformCollection.reduce((accumulator, collection)=> {
    accumulator[collection.id] = collection;
    return accumulator;
  } ,{});
};


export const getCurrentUser = () => {
  return new Promise((resolve,reject) =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};


export const createSubscription = async ( email ) => {
  const subscriptionRef = firestore.doc ( `subscription/${ email }` );
  const snapShot = subscriptionRef.get ();

  if ( snapShot.exists ) {
    return alert ( 'The user with the email, such as yours, already subscribed' );
  }

  if ( !snapShot.exists ) {
    const createdAt = new Date ();

    try {
      await subscriptionRef.set ( {
        email,
        createdAt
      } );
    } catch ( error ) {
      console.log ( 'error of creating subscription' );
    }
  }
  return subscriptionRef;
};

export const addCollectionsAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const collectionRef = firestore.collection ( collectionKey );

  const batch = firestore.batch ();
  objectsToAdd.forEach ( obj => {
    const newDocRef = collectionRef.doc ();
    batch.set ( newDocRef, obj );
  } );

  return await batch.commit ();
};


firebase.initializeApp ( config );

export const auth = firebase.auth ();
export const firestore = firebase.firestore ();

export const googleProvider = new firebase.auth.GoogleAuthProvider ();
googleProvider.setCustomParameters ( { prompt: 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup ( googleProvider );

export default firebase;

