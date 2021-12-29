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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
