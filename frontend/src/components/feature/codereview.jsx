import React, { useState } from 'react'
import './feature.css';
import CustomCursor from '../CustomCursor';
import Header from '../header';
import CodeDisplay from '../codeDisplay';
import OtpForm1 from '../OtpForm1';

function Codereview() {
  const [otp, setOtp] = useState('');
    const [json, setJson] = useState('');

    const setJsonResponse = (response) => {
    setJson(response);
    };
    return (
        <div>
            <CustomCursor/>
            <Header />
            <div >      
                <div className="code1">
                    <h1>GIVING THE REVIEW OF THE CODE</h1>
                    <div className="row">
                        <div className="col-md-6 left-section prompt">
                            <OtpForm1 otp={otp} onChange={setOtp} setJson={setJsonResponse} />
                        </div>
                        <div className="col-md-6 right-section">
                            <h1>Result Display</h1>
                            <CodeDisplay code={json.output} />
                        </div>
                    </div>
                </div>




              {/*======>  main code  <============

               <OtpForm1 otp={otp} onChange={setOtp} setJson={setJsonResponse} />
              <h1>Result Display</h1>
              <CodeDisplay code={json.output} />  
              
              */}
            </div>
        </div>
    )
}

export default Codereview