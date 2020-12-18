import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0qrbsbpXo66JXUZEnCk40OAay2ReQHew",
    authDomain: "am1dh-fcffa.firebaseapp.com",
    projectId: "am1dh-fcffa",
    storageBucket: "am1dh-fcffa.appspot.com",
    messagingSenderId: "87463127669",
    appId: "1:87463127669:web:dcb9525be8f01ca3c3e63c",
    measurementId: "G-X2GXF46JEG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
export  const db=firebaseApp.firestore()
export const auth=firebaseApp.auth()

