import React, { useEffect, useState } from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged} from 'firebase/auth'
import { ref, set as firebaseSet, getDatabase,push as firebasePush, onValue } from 'firebase/database'

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
import { MySignInScreen } from './Login2';
import ASSUMPTIONS from '../data/assumptions.json';
{/* Data from https://www3.epa.gov/carbon-footprint-calculator/ */}

function App(props) {
  const[category, setCategory] = useState('');
  const[questionsCorrect, setQuestionsCorrect] = useState([0, 0]);
  const[currentUser, setCurrentUser] = useState(null);
  const[isCorrect, setIsCorrect] = useState(false);
  const[scoreData, setScoreData] = useState([{"co2/year":0, "sustainabilityScore":0, "equivalentEarths":0}])
  const [inputValue, setInputValue] = useState([{"mpd": "", "mpg": "", "electricity": "", "naturalGas": "", "fuelOil": "", "propane": "",
                                                "plastic": false, "glass": false, "aluminum": false, "paper": false, "gasOption": "dollars",
                                                "electricityOption": "dollars", "fuelOption": "dollars", "propaneOption": "dollars"}]);
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

  const handleChange = (event) => {
    let newValue = event.target.value;
    let isChecked = event.target.checked;
    let section = event.target.name;
    let inputValueCopy = [...inputValue];
    if(newValue === "on" || newValue === "off"){ 
      inputValueCopy[0][section] = isChecked;
    } else {
      inputValueCopy[0][section] = newValue;
    }
    setInputValue(inputValueCopy);
  }
  
  const computeScore = () => {
    let vehicleCo2 = (inputValue[0]["mpd"] / inputValue[0]["mpg"]) * ASSUMPTIONS[0]["co2/gallon"] * 365;
    let energyCo2 = (inputValue[0]["naturalGas"] * 
                    (inputValue[0]["gasOption"] === "dollar" ? ASSUMPTIONS[1]["co2/$"] : ASSUMPTIONS[1]["co2/therm"]))
                    + (inputValue[0]["electricity"] * 
                    (inputValue[0]["electricityOption"] === "dollar" ? ASSUMPTIONS[2]["co2/$"] : ASSUMPTIONS[2]["co2/kwh"]))
                    + (inputValue[0]["fuelOil"] * 
                    (inputValue[0]["fuelOption"] === "dollar" ? ASSUMPTIONS[3]["co2/$"] : ASSUMPTIONS[3]["co2/gallon"]))
                    + (inputValue[0]["propane"] * 
                    (inputValue[0]["propaneOption"] === "dollar" ? ASSUMPTIONS[4]["co2/$"] : ASSUMPTIONS[4]["co2/gallon"]));
    energyCo2 = energyCo2 * 12;
    let wasteC02 =  (inputValue[0]["plastic"] ? ASSUMPTIONS[5]["plastic"] : 0) +
                    (inputValue[0]["glass"] ? ASSUMPTIONS[5]["glass"] : 0) +
                    (inputValue[0]["aluminum"] ? ASSUMPTIONS[5]["metal"] : 0) +
                    (inputValue[0]["paper"] ? ASSUMPTIONS[5]["paper"] : 0);
    let totalWaste = vehicleCo2 + energyCo2 - wasteC02 + 692;
    let earthsUsed = (totalWaste * 7753000000) / 92594150117649.6;
    let sustainabilityScore = (92594150117649.6 / 7753000000) / totalWaste;
    let earthData = [{"co2/year":totalWaste, "sustainabilityScore":sustainabilityScore, "equivalentEarths":earthsUsed,
                    "vehiclePortion":vehicleCo2, "energyPortion":energyCo2,
                  }];
    setScoreData(earthData);
  }

  useEffect(()=> {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    })
  })

  /*
  const db = getDatabase();

  useEffect(() => {
    const userRef = ref(db, "user/" + currentUser);

    onValue(userRef, (snapshot) => {
      const newValue = snapshot.val()
        setScoreData(newValue)
    })


  }, [db])

  */
  

  return (
    <>
      <NavBar isLoggedIn={currentUser !== null}/>
      <Routes>
        <Route path="/*" element={<Navigate to="/"/>}/>
        <Route path="login" element={<MySignInScreen source="/" isLoggedIn={currentUser !== null}/>}  />
        <Route path="/" element={<Home />} />
        <Route path="inputData" element={<InputData />} />
        <Route path="insertData" element={<InsertData computeScore={computeScore}/>}>
          <Route path="insertEnergy" element={<InsertEnergy changeCallback={handleChange} currValue={inputValue}/>} />
          <Route path="insertWaste" element={<InsertWaste changeCallback={handleChange} currValue={inputValue}/>} />
          <Route path="insertVehicle" element={<InsertVehicle changeCallback={handleChange} currValue={inputValue}/>} />
          <Route index element={<InsertVehicle changeCallback={handleChange} currValue={inputValue}/>} />
        </Route>
        <Route path="triviaStartPage" element={<TriviaStartPage />} />
        <Route path="triviaCategory" element={<TriviaCategory setCatCallback={setCat} />} />
        <Route path="triviaQuestion" element={<TriviaQuestion id={category} questionCallback={answerQuestion} />} />
        <Route path="correct" element={<CorrectTrivia correct={isCorrect}/>} />
        <Route path="sustainabilityScore" element={<SustainabilityScore scoreData={scoreData}/>}/>
        <Route path="dashboard" element={<Dashboard score={questionsCorrect} loggedIn={currentUser !== null} scoreData={scoreData} user={currentUser}/>}/>
        <Route path="about" element={<About />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
