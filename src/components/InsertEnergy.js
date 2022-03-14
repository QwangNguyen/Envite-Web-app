import React from 'react';

export function InsertEnergy(props) {
    return(
        <form>
          <div>
            <label htmlFor="naturalGas" className="formInput labelForm">Natural Gas Usage per Month:</label><br/>
            <input type="number" name="naturalGas" onChange={props.changeCallback} value={props.currValue[0]["naturalGas"]} id="naturalGas" className="textBox formInput"/>
            <select className="selectForm" onChange={props.changeCallback} name="gasOption" value={props.currValue[0]["gasOption"]}>
              <option value="dollars">Dollars</option>
              <option value="therms">Therms</option>
            </select>
          </div>
          <div>
            <label htmlFor="electricity" className="formInput labelForm">Electricity per Month:</label><br/>
            <input type="number" name="electricity" onChange={props.changeCallback} value={props.currValue[0]["electricity"]} id ="electricity" className="textBox formInput"/>
            <select className="selectForm" onChange={props.changeCallback} name="electricityOption" value={props.currValue[0]["electricityOption"]}>
              <option value="dollars">Dollars</option>
              <option value="kWh">kWh</option>
            </select>
          </div>
          <div>
            <label htmlFor="fuelOil" className="formInput labelForm">Fuel Oil per Month:</label><br/>
            <input type="number" name="fuelOil" onChange={props.changeCallback} value={props.currValue[0]["fuelOil"]} id="fuelOil" className="textBox formInput"/>
            <select className="selectForm" onChange={props.changeCallback} name="fuelOption" value={props.currValue[0]["fuelOption"]}>
              <option value="dollars">Dollars</option>
              <option value="gallons">Gallons</option>
            </select>
          </div>
          <div>
            <label htmlFor="propane" className="formInput labelForm">Propane per Month:</label><br/>
            <input type="number" name="propane" onChange={props.changeCallback} value={props.currValue[0]["propane"]} id="propane" className="textBox formInput"/> 
            <select className="selectForm" onChange={props.changeCallback} name="propaneOption" value={props.currValue[0]["propaneOption"]}>
              <option value="dollars">Dollars</option>
              <option value="gallons">Gallons</option>
            </select>
          </div>
        </form>
    );
}


