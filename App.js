import React from 'react';
import SwitchNavigator from './navigation/SwitchNavigator';
import ApiKeys from './config/ApiKeys';
import * as firebase from 'firebase'; 
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

export default class App extends React.Component {
  constructor(){
    super();
  
    //Firebase
    // if(!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}
    // firebase.initializeApp(ApiKeys.FirebaseConfig);

  }

  componentWillMount(){
    var firebaseConfig = {
            apiKey: "*************",
            authDomain: "**********",
            databaseURL: "*********",
            projectId: "**********",
            storageBucket: "*********",
            messagingSenderId: "*************",
            appId: "***************",
            measurementId: "***************"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (      
        <SwitchNavigator />
    );
  }
}


