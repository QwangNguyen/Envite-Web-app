import React from 'react'; 
import {Link, Outlet} from 'react-router-dom';

export function InsertData() {
    return (
        <main>
            <div className="container-fluid">
                <div className="box-1">
                    <img src="img/JustEarth.png" alt="pixelated earth" className="earth"/>
                </div>
                <div className="box-2">
                    <nav className="tabMenu">
                        <ul className="tabItems">
                            <li><Link to="/insertData/insertVehicle">Vehicle</Link></li>
                            <li><Link to="/insertData/insertEnergy">Home Energy</Link></li>
                            <li><Link to="/insertData/insertWaste">Waste</Link></li>
                        </ul>
                    </nav>
                    <Outlet />
                    <div className="text-center">
                        <Link to="/sustainabilityScore" className="analyze roundButton">Analyze</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}