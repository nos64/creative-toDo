import React from 'react';
import './TodoItems.css';
import {ThemeContext} from '../ThemeContext/ThemeContext';
import PropTypes from 'prop-types';

const TodoItems = (props) => {

  const onTaskDelete = (key) => {
    props.delete(key);
  }

  const createTasks = (item) => {

    return (
      <ThemeContext.Consumer>
        {context => (
          <li key={item.key} className='todo-item'>
            <label>
              <input type='checkbox'/>
              <span className={`label-${context}`}>{item.text}</span>
            </label>
  
            <button className={`del-btn-${context} del-btn`}
            onClick={() => onTaskDelete(item.key)}>X</button>
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