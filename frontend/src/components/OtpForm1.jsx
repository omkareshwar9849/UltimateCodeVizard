import React from 'react';

const OtpForm1 = ({ handleSubmit, otp, onChange, setJson }) => {
  const handleSubmitInternal = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt:`find the error in the code for ${otp} please give error free code with it's exlaination`})
    });
    const json = await res.json();
    setJson(json);
  }

  const handleChange = (e) => {
    if (e.target.name === "otp") {
      onChange(e.target.value);
    }
  }

  return (
    <form onSubmit={handleSubmitInternal}>
      <div className="mb-3">
        <label htmlFor="otp" autoComplete="false" className="form-label"><h1> Enter Your Request </h1></label>
        <textarea  value={otp} onChange={handleChange} className="form-control" id="otp" name="otp" required  rows={10} cols={10}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default OtpForm1;