import React from 'react';
import { Link } from 'react-router-dom';

export function Login(props) {
    let origin = props.source;

    const handleClick = () => {
        props.loginCallback(true);
    }

    return (
        <main className="loginPage centerMain">
            <form className="form-horizontal">
                <div className="container containerLogin">
                    <div className="form-group">
                        <div className="col-sm-10">
                            <label htmlFor="UserName">User Name</label>
                            <input type="text" className="form-control" name="UserName" id="UserName" placeholder="UserName" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" name="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10"> 
                            <Link to={origin} onClick={handleClick} className="btn btn-sm login roundButton" aria-label="Log in Button">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    )
}