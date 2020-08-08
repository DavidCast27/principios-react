import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import CONFIG_FIREBASE from "../constants/firebaseConfig";

firebase.initializeApp(CONFIG_FIREBASE);
//TODO: hacer los metodos
const auth = firebase.auth();
const database = firebase.database();
const USERS_PATH = "users/";

export const createUser = ({ username, email, password }) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const uid = res.user.uid;
      writeData(`${USERS_PATH}${uid}`, { username });
      return ({email, password});
    })
};

export const signIn = ({ email, password }) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const uid = res.user.uid;
      return getUserData(uid).then((username) => ({ ...username, email }));
    })
};

export const writeData = (ref, data) => {
  return database.ref(ref).set(data);
};

export const getUserData = (uid) => {
  return database
    .ref(`${USERS_PATH}${uid}`)
    .once("value")
    .then((snapshot) => snapshot.val() || null);
};
