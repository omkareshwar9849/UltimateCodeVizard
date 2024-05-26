import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FeaturePlate from './plate';
import '../styles/home.css';
import '../App.css';
import image from "../images/image001.svg";

const Home = ({ darkMode, toggleColorMode }) => {

  return (
    <div>
      <section className={darkMode ? ' dark-mode' : 'light-mode'}>
        <Header darkMode={darkMode} toggleColorMode={toggleColorMode}  />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 left-section">
              <h1 className='main_header'>Welcome to Ultimate Code Vizard</h1>
              <p className='discript'>
                This is the ultimate tool for all your coding needs. From code generation to error handling,
                from time complexity analysis to code conversion, we've got you covered.
                Start exploring the power of code with Ultimate Code Vizard!
              </p>
            </div>
            <div className="col-md-6 right-section">
              <img src={image} alt="SVGImage" className="img-fluid" />
            </div>
          </div>


          <div className="container">
            <section id="Features" >

              <strong>
                <h1 className='main_header'>FEATURES</h1>
              </strong>

              <div className="feature-list">
                <FeaturePlate
                  font='yellow'
                  name='codegenerator'
                  title="Code Generator"
                  description=" Automatically generate code snippets or templates based on user inputs or predefined patterns to help developers in coding." />

                <FeaturePlate
                  font='purple'
                  name='errorhandler'
                  title="Error Handler"
                  description=" Implement error detection and reporting mechanisms to assist developers in identifying and resolving issues more effectively." />

                <FeaturePlate
                  font='blue'
                  name='codereview'
                  title="Code Review"
                  description="Analyze code for adherence to coding standards, best practices, and potential vulnerabilities, providing feedback for improvement." />

                <FeaturePlate
                  font='green'
                  name='timecomplexity'
                  title="Time Complexity"
                  description="Determine the computational efficiency of algorithms by analyzing their time complexity, aiding in performance optimization." />

                <FeaturePlate
                  font='red'
                  name='codeconverter'
                  title="Convertering the Code"
                  description="Translate code from one programming language to another,facilitating interoperability & migration b/w different platforms." />

                <FeaturePlate
                  font='orange'
                  name='codeefficiency'
                  title="Improve Code efficiency"
                  description="Offer suggestions and optimizations to enhance the speed, memory usage, and overall performance of code for execution." />

                <FeaturePlate
                  font='pink'
                  name='sqlconvert'
                  title="Convertering to the Sql"
                  description="Converting of the natural language into the queries or commands into SQL queries for interacting with databases more intuitively ." />
              </div>
            </section>
          </div>

        </div>

      </section>
    </div>

  );
};

export default Home;
