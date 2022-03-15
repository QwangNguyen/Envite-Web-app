import React from 'react'; 
import { Link } from 'react-router-dom';

export function InputData() {
    return (
        <div aria-label="Input Data">
            <main className="inputMain">
                <h1 className="titleOfPage">See Your Impact On <br/> Our Planet</h1>
                <div className="containerInput container">
                    <Link to="/insertData" className="btn btn-lg buttonCustom roundButton">Find Your Footprint</Link>
                </div>
            </main>
        </div>
    );
}