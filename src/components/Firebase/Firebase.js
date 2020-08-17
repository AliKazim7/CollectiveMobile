import firebase from 'react-native-firebase'

const config = {
  apiKey: "AIzaSyClahptwp4layIyP5SG2CJNPQMtFG-lKSk",
  authDomain: "collectiveapp-566a0.firebaseapp.com",
  databaseURL: "https://collectiveapp-566a0.firebaseio.com",
  projectId: "collectiveapp-566a0",
  storageBucket: "collectiveapp-566a0.appspot.com",
  messagingSenderId: "324262767010",
  appId: "1:324262767010:web:4fd8f24e96e3f35dd36afb"
};
firebase.initializeApp(config);

const storage = firebase.storage()

export {storage, firebase as default}