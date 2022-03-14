import React from 'react';
import { Link} from 'react-router-dom';

export function TriviaCategory(props) {

    let catInfoArr = [{"catNum": "21", "catName": "Animals of the Earth"},
                  {"catNum": "9919", "catName": "Nature Study"},
                  {"catNum": "1215", "catName": "Climate Change"},
                  {"catNum": "267", "catName": "Wildlife Ecology"},
                  {"catNum": "3835", "catName": "Endangered Species"},
                  {"catNum": "Random", "catName": "Random"}];

    const rows = catInfoArr.map((cat, index) => {
        if (index % 2 === 0) {
            return (
                <div className="col-md-4 d-flex centerElement">
                    <div className="buttonbody">
                        <Link to="/triviaQuestion" onClick={() => props.setCatCallback(cat.catNum)} className="btn btn-lg triviaCategory">{cat.catName}</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-md-4 d-flex centerElement">
                    <div className="buttonbody">
                        <Link to="/triviaQuestion" onClick={() => props.setCatCallback(cat.catNum)} className="btn btn-lg triviaCategory buttonTan">{cat.catName}</Link>
                    </div>
                </div>
            )
        }
    });

    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <div className="row">
                    {rows}
                </div>
            </div>
        </main>
    )
}