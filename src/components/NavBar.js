import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <header className='spaceBetween'>
            <img className="logo" src="img/EnviteLogo.png" alt="envite company logo"/>
                <nav>
                    <div role="navigation" aria-label="Navigation Bar">
                        <ul className="links-nav">
                            <li><Link to="" aria-label="Home">Home</Link></li>
                            <li><Link to="triviaStartPage" aria-label="Trivia">Trivia</Link></li>
                            <li><Link to="dashboard" aria-label="Dashboard">Dashboard</Link></li>
                            <li><Link to="inputData" aria-label="Input Data">Input Data</Link></li>
                            <li><Link to="about" aria-label="About Us">About Us</Link></li>
                            <li><Link to="login" aria-label="About Us">Login</Link></li>
                        </ul>
                    </div>
                </nav>
        </header>
    )
}