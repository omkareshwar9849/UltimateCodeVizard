import React from 'react';

const OtpForm = ({ handleSubmit, otp, onChange, setJson }) => {
  const handleSubmitInternal = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: otp })
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
        <label htmlFor="otp" autoComplete="false" className="form-label">Enter Promt</label>
        <input type="text" value={otp} onChange={handleChange} className="form-control" id="otp" name="otp" required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default OtpForm;
