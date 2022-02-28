import React from 'react';
import { useNavigate } from 'react-router-dom';
import climateChange from '../data/climateChange.json';

export function TriviaQuestion(props) {
    {/*
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        fetch('https://jservice.io/api/category?id=1215')
          .then((res) => res.json())
          .then((data) => {
            setQuestionList(data.clues.sort(() => Math.random() - 0.5))
          })
    }, [])
    */}

    const navigate = useNavigate();

    let questionList = climateChange.clues.sort(() => Math.random() - 0.5);
    console.log(questionList);
    
    let correctAnswer = questionList[0].answer;

    let answerList = [];
    for(let i = 0; i < 4; i ++) {
        answerList.push(questionList[i].answer);
    }

    let question = questionList[0].question;
    answerList = answerList.sort(() => Math.random() - 0.5);

    

    const handleClick = (event) => {
        if(event.currentTarget.name === correctAnswer) {
            props.questionCallback(true);
            navigate("/correct")
        } else {
            props.questionCallback(false);
            navigate("/incorrect")
        }
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
                            <button className="btn btn-lg triviaCategory" onClick={handleClick} name={answerList[0]}>
                                {answerList[0]}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answerList[1]}>
                                {answerList[1]}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answerList[2]}>
                                {answerList[2]}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory" onClick={handleClick} name={answerList[3]}>
                                {answerList[3]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>     
    )
}