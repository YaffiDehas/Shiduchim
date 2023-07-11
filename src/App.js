import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import UserList from './Components/UserList/UserList';
import Login from './Components/Login/Login';
import FillQuestionnaire from './Components/Forms/FillQuestionnaire/FillQuestionnaire';
import HomePage from './Components/HomePage/HomePage';
import ManagerPage from './Components/ManagerPage/ManagerPage';
import SearchAndMatch from './Components/SearchAndMatch/SearchAndMatch';
import StatisicsClosedMatchMakked from './Components/StatisicsClosedMatchMakked/StatisicsClosedMatchMakked';
import PersonalArea from './Components/PersonalArea/PersonalArea';
import MatchMakerPage from './Components/MatchMakerPage/MatchMakerPage';
import CheckingNewRegistered from './Components/CheckingNewRegistered/CheckingNewRegistered';
import CloseMatch from './Components/CloseMatch/CloseMatch';
import Engaged from './Components/Engaged/Engade';
import CloseEngagedPage from './Components/CloseEngagedPage/CloseEngagedPage';
import SendEmail from './Components/SendMail/SendMail';
import ShowMessages from './Components/ShowMessages/ShowMessages';
import moment from 'moment';
import parseFormat from 'moment-parseformat';
import './App.css';

function App() {
  const format = parseFormat('10/10/2010',
    { preferredOrder: { '/': 'DMY', '.': 'MDY', '-': 'YMD' } }
);
  
let day = "2023-06-25T09:44:34.745+00:00"
let date = moment(day);
  
console.log(date.format(format));

const dateFromDB = '2023-06-25T09:44:34.745+00:00'
const formattedDate = moment(dateFromDB).utc().format('DD/MM/YY')

console.log( 'Date From DB:', dateFromDB )
//=> 2005-12-03T18:30:00.000Z

console.log( 'Formatted Date:', formattedDate )
  console.log(new Intl.DateTimeFormat('en-u-ca-hebrew',{dateStyle:"full"}).format(new Date()));

// console.log(new Intl.DateTimeFormat('he-u-ca-hebrew',{weekday: 'long', year:'numeric', month:'numeric', day:'numeric'}).format(new Date()));
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FillQuestionnaire" element={<FillQuestionnaire />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ManagerPage" element={<ManagerPage />} />
        <Route path="/SearchAndMatch" element={<SearchAndMatch />} />
        <Route path="/StatisicsClosedMatchMakked" element={<StatisicsClosedMatchMakked />} />
        <Route path="/PersonalArea" element={<PersonalArea />} />
        <Route path="/MatchMakerPage" element={<MatchMakerPage />} />
        <Route path="/CheckingNewRegistered" element={<CheckingNewRegistered />} />
        <Route path="/CloseMatch" element={<CloseMatch />} />
        <Route path="/Engaged" element={<Engaged />} />
        <Route path="/CloseEngagedPage" element={<CloseEngagedPage />} />
        <Route path="/SendEmail" element={<SendEmail />} />
        <Route path="/ShowMessages" element={<ShowMessages />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
