import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6lVTbjbXzhJnWaOXSbhN58oup-yMOVKE",
    authDomain: "bob-tools-64bf2.firebaseapp.com",
    projectId: "bob-tools-64bf2",
    storageBucket: "bob-tools-64bf2.appspot.com",
    messagingSenderId: "305182606673",
    appId: "1:305182606673:web:67c6ff0528a2d07056bf70"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);