import React from 'react'; 

export function SustainabilityScore(props) {
    return(    
        <main className="inputMain">
            <h1 className="titleOfPage">Sustainability Score</h1>
            <p className="score">90</p>
            <div className="containerInput container" role="button">
            <button type="button" className="btn btn-lg buttonCustom roundButton">Analyze</button>
            </div>
        </main>
    );
}