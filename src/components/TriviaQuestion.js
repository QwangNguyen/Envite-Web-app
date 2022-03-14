import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


export function TriviaQuestion(props) {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        fetch(`https://jservice.io/api/category?id=${props.id}`)
          .then((res) => res.json())
          .then((data) => {
            setQuestionList(data.clues.sort(() => Math.random() - 0.5))
          })
    }, [])

    if(questionList.length === 0) {
        return(
            <Spinner animation="border" variant="success" />
        );
    }
    
    let correctAnswer = questionList[0].answer;
    console.log(props.questionCallback);
    console.log(correctAnswer);
    let answerList = [];
    for(let i = 0; i < 4; i ++) {
        answerList.push(questionList[i].answer);
    }
    let question = questionList[0].question;
    answerList = answerList.sort(() => Math.random() - 0.5);

    const handleClick = (event) => {
        props.questionCallback(event.currentTarget.name === correctAnswer);
    }

    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <p className="question">{question}</p>
            </div>
            <div className="container containerTrivia containerPadding">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/correct" className="btn btn-lg triviaCategory" onClick={handleClick} name={answerList[0]}>
                                {answerList[0]}
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/correct" className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answerList[1]}>
                                {answerList[1]}
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/correct" className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answerList[2]}>
                                {answerList[2]}
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/correct" className="btn btn-lg triviaCategory" onClick={handleClick} name={answerList[3]}>
                                {answerList[3]}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>     
    )
}