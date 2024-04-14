import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code, language }) => {
  console.log("Code Display props:", language);
  return (
    <SyntaxHighlighter language={language} style={oneDark} showLineNumbers wrapLines>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
