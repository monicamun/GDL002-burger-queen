import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD-yJApB6dGmFYrD2GhlsR3asBN1OeE9lo",
    authDomain: "burger-queen-6689e.firebaseapp.com",
    databaseURL: "https://burger-queen-6689e.firebaseio.com",
    projectId: "burger-queen-6689e",
    storageBucket: "burger-queen-6689e.appspot.com",
    messagingSenderId: "234057880631",
    appId: "1:234057880631:web:e0f84eef34211891"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
