import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Alert from './Alert';
import '../styles/Login.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [otp, setOtp] = useState('');
  const [showOtpBox, setShowOtpBox] = useState(false);
  let navigate = useNavigate();
  const host = process.env.REACT_APP_BACKEND_HOST;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await res.json();
    console.log(json)
    if (json.success) {
      const res = await fetch(`${host}/api/email/otp/${otp}`);
      console.log(res.status)
      if (res.status === 200) {
        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Login Successfully", "success");
        navigate("/");
      }
      else {
        props.showAlert("Invalid OTP", "danger");
      }
    }
    else {
      props.showAlert("Invalid credentials", "danger");
    }
  }
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
      console.log("email sentttt")
      fetch(`${host}/api/email/sendotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: credentials.email })
      }).then((response) => {
        console.log(response)
        console.log("hello");
        if (response.ok) {
          setShowOtpBox(true);
          props.showAlert(`OTP Sent to your email successfully`, "success");
        }
      })
        .catch((error) => {
          console.error("Network error:", error);
          console.log("hello");
          console.log("Network error:", error);
          props.showAlert("NETWORK ERROR : Unable to send OTP" + error, "danger");
        });
    }
    else {
      setShowOtpBox(true);
      const otp = await fetch(`${host}/api/email/otp`);
      const otpjson = await otp.json();
      console.log(otpjson);
      props.showAlert(`OTP Sent to your email successfully : ${otpjson.OTP}`, "success");
      // props.showAlert(`OTP Sent to your email successfully`, "success");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "otp") {
      setOtp(e.target.value);
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className={props.darkMode ? ' dark-mode' : 'light-mode'} style={{height:'100vh'}}>
      <Header Mode={props.darkMode ? ' dark-mode' : 'light-mode'} darkMode={props.darkMode} toggleColorMode={props.toggleColorMode} />
      <Alert alert={props.alert}/>
      <section id="login">
        <div className="login-container">
          <h5 id='loginHeading'>Please login to use to Ultimate Code Vizard</h5>
          <hr />
          <form onSubmit={handleSubmit} className="login-form">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" value={credentials.email} onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name="password" required />
            </div>
            {!showOtpBox ? (
              <button type="button" onClick={handleSendOtp} className="golden-button">Send OTP</button>
            ) : (
              <>
                <div className="mb-3">
                  <label htmlFor="otp" autoComplete="false" className="form-label">Enter OTP</label>
                  <input type="text" value={otp} maxLength={4} onChange={onChange} className="form-control" id="otp" name="otp" required />
                </div>
                <button type="submit" className="golden-button">Login</button>
              </>
            )}
          </form>
        </div>
      </section>

    </div>
  )
}

export default Login;
