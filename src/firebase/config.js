import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBu2WVpg0pzKRn-so89C2AKVh_Hfu8gMXw",
  authDomain: "cooking-web-application.firebaseapp.com",
  projectId: "cooking-web-application",
  storageBucket: "cooking-web-application.appspot.com",
  messagingSenderId: "736879249081",
  appId: "1:736879249081:web:c22da5c1b1195e4001bd68"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }