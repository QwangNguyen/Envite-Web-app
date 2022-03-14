import React from 'react';
import { Link } from 'react-router-dom';

export function CorrectTrivia(props) {
    if(props.correct) {
        return (
            <main className="triviaBody centerMain">
                <div className="container containerTrivia">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="content">
                                <img src="img/coin.png" alt="a coin" aria-label="coin when your get the ansers for the trivia game" />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="content">
                                <p className="message">You got it!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link to="/triviaCategory" className="btn btn-lg start centerElement">Try another question</Link>
                </div>
            </main>
        )
    } else {
        return (
            <main className="triviaBody centerMain">
                <div className="col-sm-12">
                    <div className="content">
                        <h1 className="aboutHeader">Incorrect answer!</h1>
                        <p className="aboutText">Your answer was incorrect. :(</p>
                        <Link to="/triviaCategory" className="btn btn-lg start centerElement">Try another question</Link>
                    </div>
                </div>
            </main>
        )
    }
}