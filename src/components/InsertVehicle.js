import React from 'react';

export function InsertVehicle(props) {
    return(
        <form>
            <label htmlFor="milesPerDay" className="formInput labelForm">
                Miles Driven Per Day:
            </label><br/>
            <input type="number" name="mpd" onChange={props.changeCallback} value={props.currValue[0]["mpd"]} id="milesPerDay" className="textBox formInput"/><br/>

            <label htmlFor="milesPerGallon" className="formInput labelForm">
                Miles Per Gallon of Vehicle:
            </label><br/>
            <input type="number" name="mpg" onChange={props.changeCallback} value={props.currValue[0]["mpg"]} id="milesPerGallon" className="textBox formInput"/><br/>
        </form>
    );
}