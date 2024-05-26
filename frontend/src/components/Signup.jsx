import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../styles/SignUp.css'; // Import the CSS file
import Alert from './Alert';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [otp, setOtp] = useState('');
  const [showOtpBox, setShowOtpBox] = useState(false);
  let navigate = useNavigate();
  const host = process.env.REACT_APP_BACKEND_HOST;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.cpassword === credentials.password) {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        const res = await fetch(`${host}/api/email/otp/${otp}`);
        console.log(res.status);
        if (res.status === 200) {
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          props.showAlert("Account Created Successfully", "success");
          navigate("/");
        } else {
          props.showAlert("Invalid OTP", "danger");
        }
      } else {
        props.showAlert("User with this email already exists", "danger");
      }
    } else {
      props.showAlert("Password and confirm password mismatch", "danger");
    }
  };

  const isValidEmail = (email) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleSendOtp = async () => {
    if (!credentials.email || credentials.email.trim() === '') {
      props.showAlert(`Please enter your email to receive the OTP.`, "warning");
      return; // Prevent OTP sending
    }

    if (!isValidEmail(credentials.email)) {
      props.showAlert(`Please enter a valid email.`, "danger");
      return; // Prevent OTP sending
    }
    const emailsend = process.env.REACT_APP_EMAIL;
    if (Number(emailsend) === 1) {
      fetch(`${host}/api/email/sendotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: credentials.email })
      }).then((response) => {
        console.log(response);
        if (response.ok) {
          setShowOtpBox(true);
          props.showAlert(`OTP Sent to your email successfully`, "success");
        }
      }).catch((error) => {
        console.error("Network error:", error);
        console.log("hello");
        props.showAlert("NETWORK ERROR: Unable to send OTP " + error, "danger");
      });
    } else {
      setShowOtpBox(true);
      const otp = await fetch(`${host}/api/email/otp`);
      const otpjson = await otp.json();
      console.log(otpjson);
      props.showAlert(`OTP Sent to your email successfully: ${otpjson.OTP}`, "success");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "otp") {
      setOtp(e.target.value);
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={props.darkMode ? 'dark-mode' : 'light-mode'} style={{ height: "100vh" }}>
      <Header Mode={props.darkMode ? 'dark-mode' : 'light-mode'} darkMode={props.darkMode} toggleColorMode={props.toggleColorMode} />
      <Alert alert={props.alert} />
      <section id='signUp'>
        <div className="signup-container">
          <h5 id='signupHeading'>Please Create an account to use Ultimate Code Vizard</h5><br />
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" value={credentials.name} onChange={onChange} className="form-control" id="name" name="name" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" value={credentials.email} onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            {!showOtpBox ? (
              <>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name="password" minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input type="password" onChange={onChange} className="form-control" id="cpassword" name="cpassword" minLength={5} required />
                </div>
                <button type="button" onClick={handleSendOtp} className="golden-button">Send OTP</button>
              </>

            ) : (
              <>
                <div className="mb-3">
                  <label htmlFor="otp" autoComplete="false" className="form-label">Enter OTP</label>
                  <input type="text" value={otp} maxLength={4} onChange={onChange} className="form-control" id="otp" name="otp" required />
                </div>
                <button type="submit" className="golden-button">SignUp</button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
