import React from 'react';

export function InsertWaste(props) {
    return(
        <form>
          <h1 className="titleOfPage fontChanger">Check off the Items you currently Recycle</h1>
          <div>
            <input id="recyclePlastic" type="checkbox" name="plastic" onChange={props.changeCallback} checked={props.currValue[0]["plastic"]} className="checkbox"/>
            <label htmlFor="recyclePlastic" className="labelForm">Plastic</label>
          </div>
          <div>
            <input id="recycleGlass" type="checkbox" name="glass" onChange={props.changeCallback} checked={props.currValue[0]["glass"]} className="checkbox"/>
            <label htmlFor="recycleGlass" className="labelForm">Glass</label>
          </div>
          <div>
            <input id="recycleAluminum" type="checkbox" name="aluminum" onChange={props.changeCallback} checked={props.currValue[0]["aluminum"]} className="checkbox"/>
            <label htmlFor="recycleAluminum" className="labelForm">Aluminum</label>
          </div>
          <div>
            <input id="recyclePaper" type="checkbox" name="paper" onChange={props.changeCallback} checked={props.currValue[0]["paper"]} className="checkbox"/>
            <label htmlFor="recyclePaper" className="labelForm">Paper</label>
          </div>
        </form>
    );
}