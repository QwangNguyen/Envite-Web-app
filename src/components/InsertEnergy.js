import React from 'react';

export function InsertEnergy(props) {
  let formInfo = [{"name": "naturalGas", "option": "gasOption", "text": "Natural Gas Usage per Month:", "unit": "therms", "unitText": "Therms"},
                  {"name": "electricity", "option": "electricityOption", "text": "Electricity per Month:", "unit": "kWh", "unitText": "kWh"},
                  {"name": "fuelOil", "option": "fuelOption", "text": "Fuel Oil per Month:", "unit": "gallons", "unitText": "Gallons"},
                  {"name": "propane", "option": "propaneOption", "text": "Propane per Month:", "unit": "gallons", "unitText": "Gallons"}];
  
  const formDivs = formInfo.map((div, index) => {
    return (
      <div key={index} aria-label="Insert Energy">
        <label htmlFor={div.name} className="formInput labelForm">{div.text}</label><br/>
        <input type="number" name={div.name} onChange={props.changeCallback} value={props.currValue[0][div.name]} id={div.name} className="textBox formInput"/>
        <select className="selectForm" onChange={props.changeCallback} name={div.option} value={props.currValue[0][div.name]}>
          <option value="dollars">Dollars</option>
          <option value={div.unit}>{div.unitText}</option>
        </select>
      </div>
    )
  });

  return(
      <form>
        {formDivs}
      </form>
  );
}


