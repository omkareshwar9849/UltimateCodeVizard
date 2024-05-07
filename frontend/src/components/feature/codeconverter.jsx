import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './feature.css';
import CustomCursor from '../CustomCursor';
import Header from '../header';
import CodeDisplay from '../codeDisplay';


function Codeconverter() {
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
            body: JSON.stringify({ prompt: `please give the code which is converted from the code ${request} into the ${inputLanguage} language` })
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
                <h1  className='main_header'>CONVERTING THE CODE FROM ONE LANGUAGE TO OTHER LANGUAGE</h1>
                <div className="row">
                    <div className="col-md-6 left-section prompt1">
                        <form onSubmit={handleSubmit}>

                            <label htmlFor="otp" autoComplete="false" className="form-label"><h1> Enter Your Request </h1></label>
                            <textarea value={request} onChange={handleChange} className="form-control" id="otp" name="otp" required rows={10} cols={10} />
                            <div className="mb-3">
                                <label htmlFor="language" className="form-label"><h1>Select Language:</h1></label>
                                <select id="language" className="form-select" value={inputLanguage} onChange={handleLanguageChange}>
                                    <option value="c">C</option>
                                    <option value="cpp">C++</option>
                                    <option value="java">JAVA</option>
                                    <option value="python">Python</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            {loading && <div className="loader"></div>}
                        </form>
                    </div>
                    <div className="col-md-6 right-section">
                        <h1 className='main_header'>{`Code Display `}</h1>
                        <CodeDisplay code={json.output} language={selectedLanguage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Codeconverter




