import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code, language }) => {
  
  return ( 
    <div className="code-display">
    {code ? (
      <SyntaxHighlighter language={language} style={oneDark} showLineNumbers wrapLines>
        {code}
      </SyntaxHighlighter>
    ) : (
      <SyntaxHighlighter language={language} style={oneDark} wrapLines>
        {
        "\n      WELCOME TO THE ULTIMATE CODE VIZARD\n "
        }
      </SyntaxHighlighter>
    )}
  </div>
  );
};

export default CodeDisplay;
