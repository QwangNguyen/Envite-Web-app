import React from 'react'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Login } from './login';
<<<<<<< HEAD
// import { propTypes } from 'react-bootstrap/esm/Image';
=======
>>>>>>> a9b939f4631d0eaf0dd334dc14f857db5a168da1

export function Dashboard(props) {
    let dashboardInfo = [{"cardTitle" : "CO2 Generated in One Year", "cardDisplay": props.scoreData[0]["co2/year"] + " lbs"},
                        {"cardTitle" : "Sustainability Score:", "cardDisplay": props.scoreData[0]["sustainabilityScore"]},
                        {"cardTitle" : "Equivalent Earths Used:", "cardDisplay": props.scoreData[0]["equivalentEarths"]}];

    const displayCards = dashboardInfo.map((card, index) => {
        return (
            <div className='dashboardCard' key={index}>
                <p className='bold titleCard'>{card.cardTitle}</p>
                <p className='dataDisplay'>{card.cardDisplay}</p> 
            </div>
        )
    });

    if(!props.loggedIn) {
        return <Login loginCallback={props.loginCallback} source="/dashboard"/>
    } else {
        return(
            <main>
                <h1 className='text-center bold greeting'>Hello User</h1>
<<<<<<< HEAD
                {/* Profile Picutre */}
                <div className='container spaceBetween centerElement' aria-label="Dashboard">
                    <div className='dashboardCard'>
                        <p className='bold titleCard'>CO2 Generated in One year:</p>
                        <p className='dataDisplay'>1350lbs</p>
                    </div>
                    <div className='dashboardCard'>
                        <p className='bold titleCard'>Sustainability Score:</p>
                        <p className='dataDisplay'>40</p>
                    </div>
                    <div className='dashboardCard'>
                        <p className='bold titleCard'>Equivalent Earths Used:</p>
                        <p className='dataDisplay'>2.5</p>
                    </div>
=======
                {/* Profile Picture */}
                <div className='container spaceBetween centerElement'>
                    {displayCards}    
>>>>>>> a9b939f4631d0eaf0dd334dc14f857db5a168da1
                </div>
                <div className='dashboardCard long'>
                    <p className='bold titleCard'>Earth Day:</p>
                    <p className='dataDisplay'>(Represent the date that earth's yearly carbon threshold is passed if everyone lives the same way as you)</p>
                    <p className='dataDisplay'> March 25th</p>
                </div>
                <p className='bold titleCard firstTitleCard'>Questions answered correct:</p>
                <ProgressBar variant="success" animated now={props.score[0]} max={props.score[1]} label={(props.score[1] === 0 ? '0' : props.score[0] / props.score[1] * 100 + '%')} className='barChart' />
                <p className='bold titleCard firstTitleCard'>Improvement:</p>
                <ProgressBar variant="primary" animated now={25}  label={40 + '%'}className='barChart'/>
            </main>
        );
    }
}

