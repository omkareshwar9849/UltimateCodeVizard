import React, { useState } from 'react';
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

  return (
    <div>
      <CustomCursor/>
      <Router>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleColorMode={toggleColorMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} toggleColorMode={toggleColorMode} alert={alert} showAlert = {showAlert} />} />
          <Route path="/signup" element={<Signup darkMode={darkMode} toggleColorMode={toggleColorMode} alert={alert} showAlert = {showAlert} />} />
          <Route path="/feature/codegenerator" element={<Codegenerator darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/feature/errorhandler" element={<Errorhandler darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/feature/codereview" element={<Codereview darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/feature/timecomplexity" element={<Timecomplexity darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/feature/codeconverter" element={<Codeconverter darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/feature/codeefficiency" element={<Codeefficiency darkMode={darkMode} toggleColorMode={toggleColorMode}/>} />
          <Route path="/feature/sqlconvert" element={<Sqlconvert darkMode={darkMode} toggleColorMode={toggleColorMode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
