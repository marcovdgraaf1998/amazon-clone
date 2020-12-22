import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBspfAVWuhJCksz7MBvT98VxyFPCiAb8qg",
    authDomain: "clone-2ed24.firebaseapp.com",
    projectId: "clone-2ed24",
    storageBucket: "clone-2ed24.appspot.com",
    messagingSenderId: "242218836505",
    appId: "1:242218836505:web:6adcc13c94f23a96cb4088",
    measurementId: "G-KPF2N62DFY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };