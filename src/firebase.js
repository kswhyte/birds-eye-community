import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDxNyQdQEAzmq-g8_nJ91fcInki3kk6mCo",
  authDomain: "birdseyecommunity.firebaseapp.com",
  databaseURL: "https://birdseyecommunity.firebaseio.com",
  storageBucket: "birdseyecommunity.appspot.com",
  messagingSenderId: "929360627253"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const usersFromDatabase = firebase.database().ref('users/');
