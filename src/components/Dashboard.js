import React from 'react'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Login } from './login';
import { propTypes } from 'react-bootstrap/esm/Image';

export function Dashboard(props) {

    console.log(props);

    if(!props.loggedIn) {
        return <Login loginCallback={props.loginCallback} source="/dashboard"/>
    } else {
        return(
            <main>
                <h1 className='text-center bold greeting'>Hello User</h1>
                {/* Profile Picutre */}
                <div className='container spaceBetween centerElement'>
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
                    <div className='dashboardCard'>
                        <p className='bold titleCard'>Earth Day:</p>
                        <p className='dataDisplay'> March 25th</p>
                    </div>
                </div>
                <p className='bold titleCard firstTitleCard'>Questions answered correct:</p>
                <ProgressBar variant="success" animated now={props.score[0]} max={props.score[1]} label={(props.score[1] === 0 ? '0' : props.score[0]/props.score[1] * 100 + '%')} className='barChart'/>
                <p className='bold titleCard'>Improvement:</p>
                <ProgressBar variant="primary" animated now={25}  label={40 + '%'}className='barChart'/>
            </main>
        );
    }
}

