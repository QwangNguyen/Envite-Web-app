import React from 'react'; 

export function Avatar() {
    return(
        
        <div className="container spaceBetween">
            <div className="avatar">
                <img src="./img/avatar.png" alt="the User's avatar which represents them" />
            </div>

            <div className="chart">
                <img src="./img/chart.png" alt="a graph representing the current emissions of the User" />
            </div>
        </div>
        
    );
}