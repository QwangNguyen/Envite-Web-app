import React from 'react'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Login } from './login';
import { MySignInScreen } from './login2';

export function Dashboard(props) {
    let dashboardInfo = [{"cardTitle" : "CO2 Generated in One Year", "cardDisplay": props.scoreData[0]["co2/year"] + " lbs"},
                        {"cardTitle" : "Sustainability Score:", "cardDisplay": props.scoreData[0]["sustainabilityScore"]*100},
                        {"cardTitle" : "Equivalent Earths Used:", "cardDisplay": props.scoreData[0]["equivalentEarths"]}];

    const displayCards = dashboardInfo.map((card, index) => {
        return (
            <div className='dashboardCard' key={index}>
                <p className='bold titleCard'>{card.cardTitle}</p>
                <p className='dataDisplay'>{card.cardDisplay === null ? 0 : card.cardDisplay}</p> 
            </div>
        )
    });

    if(!props.loggedIn) {
        return <MySignInScreen loginCallback={props.loginCallback} source="/dashboard"/>
    } else {
        return(
            <main>
                <h1 className='text-center bold greeting'>Hello User</h1>
                <div className='container spaceBetween centerElement'>
                    {displayCards}    
                </div>
                <p className='bold titleCard firstTitleCard'>Questions answered correct: {props.score[0]} / {props.score[1]}</p>
                <ProgressBar variant="success" animated now={props.score[0]} max={props.score[1]} label={(props.score[1] === 0 ? '0' : props.score[0] / props.score[1] * 100 + '%')} className='barChart' />
                <p className='bold titleCard firstTitleCard'>Improvement:</p>
                <ProgressBar variant="primary" animated now={25}  label={40 + '%'}className='barChart'/>
            </main>
        );
    }
}