import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Codegenerator from './components/feature/codegenerator';
import Errorhandler from './components/feature/errorhandler';
import Codereview from './components/feature/codereview';
import Timecomplexity from './components/feature/timecomplexity';
import Codeconverter from './components/feature/codeconverter';
import Codeefficiency from './components/feature/codeefficiency';
import Sqlconvert from './components/feature/sqlconvert';
import CustomCursor from './components/CustomCursor';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const host = process.env.REACT_APP_BACKEND_HOST;

  const toggleColorMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        const response = await fetch(host); // Replace with your backend URL
        if (response.ok) {
          console.log('Backend server woke up successfully');
        } else {
          console.error('Error waking up backend server:', response.statusText);
        }
      } catch (error) {
        console.error('Error waking up backend server:', error);
      }
    };

    wakeUpBackend();
  },[]);

  return (
    <div>
      <CustomCursor/>
      <Router>
        <Routes>
          <Route path="/UltimateCodeVizard/" element={<Home darkMode={darkMode} toggleColorMode={toggleColorMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} toggleColorMode={toggleColorMode} alert={alert} showAlert = {showAlert} />} />
          <Route path="/signup" element={<Signup darkMode={darkMode} toggleColorMode={toggleColorMode} alert={alert} showAlert = {showAlert} />} />
          <Route path="/UltimateCodeVizard/feature/codegenerator" element={<Codegenerator darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/UltimateCodeVizard/feature/errorhandler" element={<Errorhandler darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/UltimateCodeVizard/feature/codereview" element={<Codereview darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/UltimateCodeVizard/feature/timecomplexity" element={<Timecomplexity darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/UltimateCodeVizard/feature/codeconverter" element={<Codeconverter darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/UltimateCodeVizard/feature/codeefficiency" element={<Codeefficiency darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/UltimateCodeVizard/feature/sqlconvert" element={<Sqlconvert darkMode={darkMode} toggleColorMode={toggleColorMode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
