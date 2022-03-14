import React from 'react';
import { Link } from 'react-router-dom';

export function TriviaStartPage() {
    return(
        <div>
            <main className="centerMain">
                <div className="container containerTrivia" aria-label="Trivia Intro">
                    <p><strong>Test your knowledge and get 50 coins for each correct answer!</strong></p>
                </div>
                <div className="container containerTrivia" aria-label="Trivia Start">
                    <Link to="/triviaCategory" className="btn btn-lg start centerElement">Start!</Link>
                </div>
            </main>
        </div>
    )
}