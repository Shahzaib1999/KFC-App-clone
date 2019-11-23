import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBbJYj0Ua0vnpX0W0E90p-13s64LALJGN8",
    authDomain: "kfcapp-6bd76.firebaseapp.com",
    databaseURL: "https://kfcapp-6bd76.firebaseio.com",
    projectId: "kfcapp-6bd76",
    storageBucket: "kfcapp-6bd76.appspot.com",
    messagingSenderId: "1012767621218",
    appId: "1:1012767621218:web:f4bc315c01677a84c5d13b",
    measurementId: "G-LNKD19EY0Y"
};
firebase.initializeApp(firebaseConfig);

export default firebase