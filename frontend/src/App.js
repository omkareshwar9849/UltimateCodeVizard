import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './components/Home'; // Import the Home component
import LoginForm from './components/LoginForm';
import Header from './components/header';
import Codegenerator from './components/feature/codegenerator';
import Errorhandler from './components/feature/errorhandler';
import Codereview from './components/feature/codereview';
import Timecomplexity from './components/feature/timecomplexity';
import Codeconverter from './components/feature/codeconverter';
import Codeefficiency from './components/feature/codeefficiency';
import Sqlconvert from './components/feature/sqlconvert';

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/header" element={<Header />}></Route>
          <Route exact path="/feature/codegenerator" element={<Codegenerator />}></Route>
          <Route exact path="/feature/errorhandler" element={<Errorhandler />}></Route>
          <Route exact path="/feature/codereview" element={<Codereview />}></Route>
          <Route exact path="/feature/timecomplexity" element={<Timecomplexity />}></Route>
          <Route exact path="/feature/codeconverter" element={<Codeconverter />}></Route>
          <Route exact path="/feature/codeefficiency" element={<Codeefficiency />}></Route>
          <Route exact path="/feature/sqlconvert" element={<Sqlconvert />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
