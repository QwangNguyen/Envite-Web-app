import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import 'whatwg-fetch';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUF_uQb0zyMjp1xJSPMNHeRqLllidbcbM",
  authDomain: "envite-info340.firebaseapp.com",
  projectId: "envite-info340",
  storageBucket: "envite-info340.appspot.com",
  messagingSenderId: "808364912690",
  appId: "1:808364912690:web:ec8cd9cd22018377bd8c2b"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));