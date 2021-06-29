import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFgCx1ryOQaWG1-mgd53483XboClU-Elw",
    authDomain: "sharoni.firebaseapp.com",
    projectId: "sharoni",
    storageBucket: "sharoni.appspot.com",
    messagingSenderId: "271278271530",
    appId: "1:271278271530:web:8ddf1abac2f2a5a9cea753"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};
  