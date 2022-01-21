import React from "react";
import { Link } from "react-router-dom";
import './Preview.css'
// import App from '../../App';

const Preview = () => {
  return (
    <div className="preview">
      <h1>Nosov Mikhail</h1>
      <Link to="/myTodo">To Do List - My first react app</Link> {" "}
    </div>
  )
}


export default Preview;