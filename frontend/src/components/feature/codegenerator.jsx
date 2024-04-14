import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './feature.css';
import Header from '../header';
import OtpForm from '../OtpForm';
import CodeDisplay from '../codeDisplay';
import CustomCursor from '../CustomCursor';

const Codegenerator = () =>{
    const [otp, setOtp] = useState('');
    const [json, setJson] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('c'); 

    const setJsonResponse = (response) => {
    setJson(response);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        console.log(language);
    };

    return (
        <div>
            <CustomCursor/>
            <Header />
            <div >      
                <div className="code">
                    <h1>GENERATING THE SNIPPET CODE </h1>
                    <div className="row">
                        <div className="col-md-6 left-section prompt">
                            <OtpForm 
                                otp={otp} 
                                onChange={setOtp} 
                                setJson={setJsonResponse}
                                selectedLanguage={selectedLanguage}
                                onLanguageChange={handleLanguageChange} 
                            />
                        </div>
                        <div className="col-md-6 right-section">
                            <h1>{`Code Display `}</h1>
                            <CodeDisplay code={json.output} language={selectedLanguage} />
                        </div>
                    </div>
                </div>




              {/*======>  main code  <============

               <OtpForm otp={otp} onChange={setOtp} setJson={setJsonResponse} />
              <h1>Python Code Display</h1>
              <CodeDisplay code={json.output} />  
              
              */}
            </div>
        </div>
    )
}

export default Codegenerator;
