import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/styles/feature.css';
import '../../App.css';
import Header from '../header';
import CodeDisplay from '../codeDisplay';
import CustomCursor from '../CustomCursor';

const Sqlconvert = () => {
    const [request, setRequest] = useState('');
    const [json, setJson] = useState('');
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleColorMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

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
            body: JSON.stringify({ prompt: `Please give the Sql commands for the human language by converting this  " ${request} " into Sql commands ` })
        });
        const json = await res.json();
        setJson(json);
        setLoading(false);
    };

    const handleChange = (e) => {
        if (e.target.name == "otp") {
            setRequest(e.target.value);
        }
    };

    return (
        <div>
            <setion className={darkMode ? ' dark-mode' : 'light-mode'}>
                <CustomCursor />
                <Header Mode={darkMode ? ' dark-mode' : 'light-mode'} />

                <div className='toggle-switch right-section' onClick={toggleColorMode}>
                    <div className={`toggle-slider ${darkMode ? 'dark-mode' : 'light-mode'}`}></div>
                </div>

                <div className="code">
                    <h1 className='main_header'>ULTIMATE CODE GENERATING</h1>
                    <div className="row">
                        <div className="col-md-6 left-section prompt2">
                            <form onSubmit={handleSubmit}>

                                <label htmlFor="otp" autoComplete="false" className="form-label"><h4> Enter Your Request </h4></label>
                                <input type="text" value={request} onChange={handleChange} className="form-control translucent-input" id="otp" name="otp" required />
                                <button type="submit" className="btn btn-primary">Submit</button>
                                {loading && <div className="loader"></div>}
                            </form>
                        </div>
                        <div className="col-md-6 right-section">
                            <h1 className='main_header'>{`SQL COMMAND `}</h1>
                            <CodeDisplay code={json.output} language='human language' />
                        </div>
                    </div>
                </div>
            </setion>
        </div>
    )
}

export default Sqlconvert;


