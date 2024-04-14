import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './FeaturePlate.css'; // Import your CSS file for additional styling
// import Codegenerator from './feature/1';

function FeaturePlate(props) {
  return (
    <Link to={`./feature/${props.name}`} className="feature-plate">
      <div className="feature-content">
        <h3 className='title'>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}

export default FeaturePlate;
