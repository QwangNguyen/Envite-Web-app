import React from 'react';
import { Link} from 'react-router-dom';

export function TriviaCategory(props) {
    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <div className="row">
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("21")} className="btn btn-lg triviaCategory">Animals of the Earth</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("9919")} className="btn btn-lg triviaCategory buttonTan">Nature Study</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("1215")} className="btn btn-lg triviaCategory">Climate Change</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("267")} className="btn btn-lg triviaCategory buttonTan">Wildlife Ecology</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("3835")} className="btn btn-lg triviaCategory">Endangered Species</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Random")} className="btn btn-lg triviaCategory buttonTan">Random</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}