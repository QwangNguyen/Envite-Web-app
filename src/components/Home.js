import React from 'react'; 
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <main>
                <div role="navigation" aria-label="Main Menu" className="menu">
                    <div className="containerIndex">
                        <Link to="/dashboard" className="btn footprint roundButton">See Dashboard</Link>
                    </div>
                    <div className="containerIndex">
                        <Link to="/inputData" className="btn footprint roundButton">Input Your Data</Link>
                    </div>
                    <div className="containerIndex">
                        <Link to="/triviaStartPage" className="btn footprint roundButton">Play TriviaGame</Link>
                    </div>
                    <div className="containerIndex">
                        <Link to="/Login" className="btn footprint roundButton">Login</Link>
                    </div>
                </div>
                <div role="document">
                    <div className="missionContainer">
                        <div>
                            <h1 className="missionInfo">Our Mission</h1>
                            <p className="info">We believe that everyone can participate in the action of being more environmental friendly just by changing a bit of their lifestyles!</p>
                            <p className="info">Come join us by inputting your data, testing your environmental knowledge with our trivia game, and receiving rewards from the store!</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}