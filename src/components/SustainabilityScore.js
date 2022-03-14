import React from 'react'; 

export function SustainabilityScore(props) {
    return(    
        <main className="inputMain">
            <h1 className="titleOfPage">Sustainability Score</h1>
            <p className="score">{isNaN(props.scoreData[0]["sustainabilityScore"]) ? 0 : (props.scoreData[0]["sustainabilityScore"] * 100).toFixed(3)} </p>
            <div className="container" role="button">
            <p className="scoreText"> Sustainability score is a score that takes into consideration how much Co2 you produce 
                relative to how much Co2 the Earth can sustain for an average person. A score of 100 represents
                that the Earth could sustain if every person produced the same amount as you. Any score less
                means that the Earth could not sustain every person living like you. A higher score is better.</p>
            </div>
        </main>
    );
}