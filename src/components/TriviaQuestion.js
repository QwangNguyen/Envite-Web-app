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
    
    let answerList = [];
    
    for(let i = 0; i < 4; i ++) {
        answerList.push(questionList[i].answer);
    }
    
    let question = questionList[0].question;

    console.log(question.length);

    if (question.length === 0) {
        question = questionList[1].question;
    }
    
    answerList = answerList.sort(() => Math.random() - 0.5);

    const handleClick = (event) => {
        props.questionCallback(event.currentTarget.name === correctAnswer);
    }

    let questionRows = answerList.map((answer, index) => {
        if (index === 0 || index === 3) {
            return (
                <div className="col-md-6 d-flex" key={index}>
                    <div className="buttonbody">
                        <Link to="/correct" className="btn btn-lg triviaCategory" onClick={handleClick} name={answer}>
                            {answer}
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-md-6 d-flex" key={index}>
                    <div className="buttonbody">
                        <Link to="/correct" className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answer}>
                            {answer}
                        </Link>
                    </div>
                </div>
            )
        }
    });

    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <p className="question">{question}</p>
            </div>
            <div className="container containerTrivia containerPadding">
                <div className="row">
                    {questionRows} 
                </div>
            </div>
        </main>     
    )
}