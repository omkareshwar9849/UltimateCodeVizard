import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import CustomCursor from './CustomCursor';
import FeaturePlate from'./plate';
import './home.css';
import image from "../images/image001.svg";

const Home = () => {
  return (
    <div>
      <CustomCursor/>
      <Header />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-section">
            <h1>Welcome to Ultimate Code Vizard</h1>
            <p>
              This is the ultimate tool for all your coding needs. From code generation to error handling,
              from time complexity analysis to code conversion, we've got you covered.
              Start exploring the power of code with Ultimate Code Vizard!
            </p>
          </div>
          <div className="col-md-6 right-section">
            <img src={image} alt="SVG Image" className="img-fluid" />
          </div>
        </div>
    
    
        <div className="container">
          <strong><h1>FEATURES</h1></strong>
          <div className="feature-list">
            <FeaturePlate font='gold' name='codegenerator' title="Code Generator" description=" Automatically generate code snippets or templates based on user inputs or predefined patterns to help developers." />
            <FeaturePlate font='purple' name='errorhandler' title="Error Handler" description=" Implement error detection and reporting mechanisms to assist developers in identifying and resolving issues more effectively." />
            <FeaturePlate font='gold' name='codereview' title="Code Review" description="Analyze code for adherence to coding standards, best practices, and potential vulnerabilities, providing feedback for improvement." />
            <FeaturePlate font='gold' name='timecomplexity' title="Time Complexity" description="Determine the computational efficiency of algorithms by analyzing their time complexity, aiding in performance optimization." />
            <FeaturePlate font='gold' name='codeconverter' title="Convertering the Code" description="Translate code from one programming language to another,facilitating interoperability & migration b/w different platforms." />
            <FeaturePlate font='gold' name='codeefficiency' title="Improve Code efficiency" description="Offer suggestions and optimizations to enhance the speed, memory usage, and overall performance of code." />
            <FeaturePlate font='gold' name='sqlconvert' title="Convertering to the Sql" description="Convert natural language queries or commands into SQL queries for interacting with databases more intuitively." />
            
            {/* Add more FeaturePlate components as needed */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
