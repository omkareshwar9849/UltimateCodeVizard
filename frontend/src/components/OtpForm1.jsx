import React, { useState } from 'react';

const OtpForm1 = ({ handleSubmit, otp, onChange, setJson, selectedRequest, onRequestChange }) => {
  const [loading, setLoading] = useState(false);
  const [inputRequest, setInputRequest] = useState(selectedRequest);

  const handleSubmitInternal = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before sending the request
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: otp, inputRequest })
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

  const handleRequestChange = (e) => {
    const selectedRequest = e.target.value;
    setInputRequest(selectedRequest);
    onRequestChange(selectedRequest);
  }

  return (
    <form onSubmit={handleSubmitInternal}>
      <div className="mb-3">
        <label htmlFor="otp" autoComplete="false" className="form-label"><h1> Enter Your Request </h1></label>
        <textarea  value={otp} onChange={handleChange} className="form-control" id="otp" name="otp" required  rows={10} cols={10}/>

        <div className="mb-3">
      <label htmlFor="Request" className="form-label"><h1>Select Language:</h1></label>
        <select id="Request" className="form-select" value={inputRequest} onChange={handleRequestChange}>
          <option value="solve the error and explain the error in the code in a easy way" selected>Error handle</option>
          {/* Add more options for other languages if needed */}
        </select>
      </div>  

      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {loading && <div className="loader"></div>} {/* Display loader if loading is true */}
    </form>
  );
};

export default OtpForm1;
