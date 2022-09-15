
import firebase from 'firebase/app';
import '@firebase/firestore';
import "@firebase/storage";
import '@firebase/auth';
import '@firebase/database';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCwQacoy1zqvLGlsGXN0Knh42ygrd9K4ms",
    authDomain: "kiosko-inmobiliario-b8f96.firebaseapp.com",
    databaseURL: "https://kiosko-inmobiliario-b8f96-default-rtdb.firebaseio.com",
    projectId: "kiosko-inmobiliario-b8f96",
    storageBucket: "kiosko-inmobiliario-b8f96.appspot.com",
    messagingSenderId: "630764521841",
  appId: "1:630764521841:web:0298371a29ba6d89074ed0"
});

export function getStorage(){
    return firebase.storage(app);
}

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}

export default firebase;
