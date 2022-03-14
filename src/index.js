import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import 'whatwg-fetch';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyALfBwnkL_afT2Rdda1qN9G6gYhWY2tF7Q",
    authDomain: "react-chat-wi22.firebaseapp.com",
    projectId: "react-chat-wi22",
    storageBucket: "react-chat-wi22.appspot.com",
    messagingSenderId: "982581109530",
    appId: "1:982581109530:web:eb828f5136a34d4de042a3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));