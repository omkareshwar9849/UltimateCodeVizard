import React, { useState } from 'react';
import Header from './components/header';
import OtpForm from './components/OtpForm';
import CodeDisplay from './components/codeDisplay';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [otp, setOtp] = useState('');
  const [json, setJson] = useState('');

  const setJsonResponse = (response) => {
    setJson(response);
  };

  return (
    <div>
      <CustomCursor/>
      <Header />
      <OtpForm otp={otp} onChange={setOtp} setJson={setJsonResponse} />
      <h1>Python Code Display</h1>
      <CodeDisplay code={json.output} />
    </div>
  );
};

export default App;
