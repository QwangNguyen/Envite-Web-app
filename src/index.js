import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import 'whatwg-fetch';

import triviaQuestions from './data/triviaQuestions.json';

ReactDOM.render(
    <BrowserRouter>
        <App triviaData={triviaQuestions}/>
    </BrowserRouter>, document.getElementById('root'));