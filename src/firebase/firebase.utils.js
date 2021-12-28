import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAljDF219P-JAm_awop_gp-a8CJofkGR60",
  authDomain: "crwn-clothing-a793d.firebaseapp.com",
  projectId: "crwn-clothing-a793d",
  storageBucket: "crwn-clothing-a793d.appspot.com",
  messagingSenderId: "460505215493",
  appId: "1:460505215493:web:9cbda967c91cebcb0f226c",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
