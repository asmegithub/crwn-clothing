/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD0g7FLHtNHcwVOVG6JlG7LlbcfANHPGF8",
  authDomain: "crwn-db-bd35e.firebaseapp.com",
  projectId: "crwn-db-bd35e",
  storageBucket: "crwn-db-bd35e.appspot.com",
  messagingSenderId: "393350433840",
  appId: "1:393350433840:web:0f68f5971a38efeeefb1f5",
  measurementId: "G-ZJ4DGNQX9N",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
