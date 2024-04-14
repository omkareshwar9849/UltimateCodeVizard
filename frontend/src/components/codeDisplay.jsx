import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code }) => {
  return (
    <SyntaxHighlighter language="c" style={oneDark} showLineNumbers wrapLines>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
