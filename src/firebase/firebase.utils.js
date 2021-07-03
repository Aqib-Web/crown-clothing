import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyVCN-jLgw5J6X2b0qauE0akW-JzoXDJ0",
  authDomain: "crown-db-4ed15.firebaseapp.com",
  projectId: "crown-db-4ed15",
  storageBucket: "crown-db-4ed15.appspot.com",
  messagingSenderId: "278734800786",
  appId: "1:278734800786:web:498502a49fec608f0ae34b",
  measurementId: "G-L6QVBXEE8F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
