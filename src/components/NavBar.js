import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut} from 'firebase/auth'

export default function NavBar(props) {
    const logOut = () => {
        const auth = getAuth();
        signOut(auth)
            .catch(err => console.log(err));
    }

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
                            {props.isLoggedIn ? <li><Link to="login" aria-label="About Us" onClick={logOut}>Logout</Link></li> : null}
                        </ul>
                    </div>
                </nav>
        </header>
    )
}