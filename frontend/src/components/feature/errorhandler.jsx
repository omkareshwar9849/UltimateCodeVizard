import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './feature.css';
import CustomCursor from '../CustomCursor';
import Header from '../header';
import CodeDisplay from '../codeDisplay';


function Errorhandler() {
    const [request, setRequest] = useState('');
    const [json, setJson] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('c');
    const [loading, setLoading] = useState(false);
    const [inputLanguage, setInputLanguage] = useState(selectedLanguage);

    const setJsonResponse = (response) => {
    setJson(response);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("http://localhost:5000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: `Find the error in the ${inputLanguage} code for ${request} please give error free code with its explanation` })
        });
        const json = await res.json();
        setJson(json);
        setLoading(false);
    };

    const handleChange = (e) => {
        if (e.target.name === "otp") {
            setRequest(e.target.value);
        }
    };

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setInputLanguage(selectedLanguage);
        setSelectedLanguage(selectedLanguage);
    };



    return (
        <div>
            <CustomCursor/>
            <Header />   
            <div className="code1">
                <h1>HANDLING THE ERROR IN THE CODE</h1>
                <div className="row">
                    <div className="col-md-6 left-section prompt1">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="language" className="form-label"><h1>Select Language:</h1></label>
                                <select id="language" className="form-select" value={inputLanguage} onChange={handleLanguageChange}>
                                    <option value="c">C</option>
                                    <option value="cpp">C++</option>
                                    <option value="java">JAVA</option>
                                    <option value="python">Python</option>
                                </select>
                            </div>

                            <label htmlFor="otp" autoComplete="false" className="form-label"><h1> Enter Your Request </h1></label>
                            <textarea value={request} onChange={handleChange} className="form-control" id="otp" name="otp" required rows={10} cols={10} />
                            <button type="submit" className="btn btn-primary">Submit</button>
                            {loading && <div className="loader"></div>}
                        </form>
                    </div>
                    <div className="col-md-6 right-section">
                        <h1>{`Code Display `}</h1>
                        <CodeDisplay code={json.output} language={selectedLanguage} />
                    </div>
                </div>
            </div>




             
            
        </div>
    )
}

export default Errorhandler