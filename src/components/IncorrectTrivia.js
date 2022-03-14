import React from 'react';
import { Link} from 'react-router-dom';

export function IncorrectAnswer() {
    return (
        <main className="triviaBody centerMain">
            <div className="col-sm-12" aria-label="Incorrect Trivia">
                <div className="content">
                    <h1 className="aboutHeader">Incorrect answer!</h1>
                    <p className="aboutText">Your answer was incorrect. :(</p>
                    <Link to="/triviaCategory" className="btn btn-lg start centerElement">Try another question</Link>
                </div>
            </div>
        </main>
    )
}