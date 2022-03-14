import React from 'react'; 

export function SustainabilityScore() {
    return(
        <main className="inputMain">
            <h1 className="titleOfPage">Sustainability Score</h1>
            <p className="score">90</p>
            <div className="containerInput container">
            <button type="button" className="btn btn-lg buttonCustom roundButton">Analyze</button>
            </div>
        </main>
    );
}