import React, { useState } from 'react';

const OtpForm = ({ handleSubmit, otp, onChange, setJson, selectedLanguage, onLanguageChange }) => {
  const [loading, setLoading] = useState(false);
  const [inputLanguage, setInputLanguage] = useState(selectedLanguage);

  const handleSubmitInternal = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before sending the request
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt:`wtire a ${inputLanguage} code for ${otp} please give simple code`})
    });
    const json = await res.json();
    setJson(json);
    setLoading(false); // Set loading to false after receiving the response
  }

  const handleChange = (e) => {
    if (e.target.name === "otp") {
      onChange(e.target.value);
    }
  }

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setInputLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  }

  return (
    <form onSubmit={handleSubmitInternal}>
      <div className="mb-3">
      
      <div className="mb-3">
      <label htmlFor="language" className="form-label"><h1>Select Language:</h1></label>
        <select id="language" className="form-select" value={inputLanguage} onChange={handleLanguageChange}>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">JAVA</option>
          <option value="python">Python</option>
          {/* Add more options for other languages if needed */}
        </select>
      </div>  

      <label htmlFor="otp" autoComplete="false" className="form-label"><h1> Enter Your Request </h1></label>
      <input type="text" value={otp} onChange={handleChange} className="form-control" id="otp" name="otp" required />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      {loading && <div className="loader"></div>} {/* Display loader if loading is true */}
    </form>
  );
};

export default OtpForm;
