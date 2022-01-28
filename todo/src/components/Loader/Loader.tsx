
import React from 'react';
import './Loader.css';
import Oval from './oval.svg';

const Loader: React.FC = () => {
  return(
    <div className="loading">Loading...
      <img src={Oval} alt='Loader'/>
    </div>
  )
} 
export default Loader;