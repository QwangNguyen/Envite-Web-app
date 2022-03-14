import React, { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import {InputData} from './InputData';
import {InsertData} from './InsertData';
import NavBar from './NavBar';
import Footer from './Footer';
import { InsertVehicle } from './InsertVehicle';
import { InsertEnergy } from './InsertEnergy';
import { InsertWaste } from './InsertWaste';
import { SustainabilityScore } from './SustainabilityScore';
import { Dashboard } from "./Dashboard";
import { TriviaStartPage }  from './TriviaStartPage';
import { TriviaCategory } from './TriviaCategory';
import { TriviaQuestion } from './TriviaQuestion';
import { CorrectTrivia } from './CorrectTrivia';
import { Home } from './Home';
import { About } from './About';
import { Login } from './login';

function App(props) {
  const[category, setCategory] = useState('');
  const[questionsCorrect, setQuestionsCorrect] = useState([0, 0]);
  const[isLoggedIn, setisLoggedIn] = useState(false);
  const[isCorrect, setIsCorrect] = useState(false);

  const categoryOptions = ["21", "9919", "1215", "267", "3835"];

  const setCat = (cat) => {
    if (cat === "Random") {
      let index = Math.floor(Math.random() * 5);
      setCategory(categoryOptions[index]);
    } else {
      setCategory(cat);
    }
  }

  const answerQuestion = (correct) => {
    const questionsCorrectCopy = [...questionsCorrect];
    if(correct) {
      setIsCorrect(true);
      questionsCorrectCopy[0]++;
    } else {
      setIsCorrect(false);
    }
    questionsCorrectCopy[1]++;
    setQuestionsCorrect(questionsCorrectCopy)
  }

  const logIn = () => {
    setisLoggedIn(true);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="login" element={<Login loginCallback={logIn} source="/"/>}  />
        <Route path="/" element={<Home />} />
        <Route path="inputData" element={<InputData />} />
        <Route path="insertData" element={<InsertData />}>
          <Route path="insertEnergy" element={<InsertEnergy />} />
          <Route path="insertWaste" element={<InsertWaste />} />
          <Route path="insertVehicle" element={<InsertVehicle />} />
          <Route index element={<InsertVehicle/>} />
        </Route>
        <Route path="triviaStartPage" element={<TriviaStartPage />} />
        <Route path="triviaCategory" element={<TriviaCategory setCatCallback={setCat} />} />
        <Route path="triviaQuestion" element={<TriviaQuestion id={category} questionCallback={answerQuestion} />} />
        <Route path="correct" element={<CorrectTrivia correct={isCorrect}/>} />

        {/*}
        <Route path="incorrect" element={<IncorrectAnswer />} /> 
        */}
        <Route path="sustainabilityScore" element={<SustainabilityScore />}/>
        <Route path="dashboard" element={<Dashboard score={questionsCorrect} loggedIn={isLoggedIn} loginCallback={logIn} />}/>
        <Route path="about" element={<About />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
