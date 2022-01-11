import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBTsoK46FK0An-yCgKIIUtDbnz7woOazhg",
    authDomain: "crwn-db-f4f2d.firebaseapp.com",
    projectId: "crwn-db-f4f2d",
    storageBucket: "crwn-db-f4f2d.appspot.com",
    messagingSenderId: "1073589901111",
    appId: "1:1073589901111:web:0d30e6c388bd4cddcdecb2",
    measurementId: "G-PFYBKZZY0V"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase