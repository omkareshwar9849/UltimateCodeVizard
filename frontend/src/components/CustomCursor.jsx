import React, { useState, useEffect } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const updateCursorPosition = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);
  
    return (
      <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
    );
  };
  
  export default CustomCursor;
  