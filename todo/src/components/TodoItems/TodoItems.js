import React from 'react';
import './TodoItems.css';
import {ThemeContext} from '../ThemeContext/ThemeContext';
import PropTypes from 'prop-types';

const TodoItems = (props) => {

  const onTaskDelete = (key) => {
    props.delete(key);
  }

  const createTasks = (task) => {
    return (
      <ThemeContext.Consumer key={task.key}>
        {context => (
          <li key={task.key} className='todo-item'>
            <label>
              <input type='checkbox'/>
              <span className={`label-${context}`}>{task.text}</span>
            </label>
  
            <button className={`del-btn-${context} del-btn`}
            onClick={() => onTaskDelete(task.key)}>X</button>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }

  return(
        
    <ul className='todo-list'>
      {props.entries.map(createTasks)}

    </ul>
    
  );
}

TodoItems.propTypes = {
  entries: PropTypes.array,
  delete: PropTypes.func,
}

export default TodoItems;