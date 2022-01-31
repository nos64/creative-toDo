import React from 'react';
import { Link } from 'react-router-dom';
import './Preview.css'
import url from '../url';

const Preview: React.FC = () => {
  return (
    <div className="preview">
      <h1>Nosov Mikhail</h1>
      <Link to={url.TodoApp}>To Do List - My first react app</Link> {" "}
    </div>
  )
}


export default Preview;