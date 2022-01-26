import React from 'react';
import './TodoItems.css';
import {ThemeContext} from '../ThemeContext/ThemeContext';
import { observer } from "mobx-react-lite"
import TodoStore from '../../store/TodoStore';

const TodoItems = observer(() => {

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
            onClick={() => TodoStore.deleteTodo(task.key)}>X</button>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }

  return(
    <ul className='todo-list'>
      {TodoStore.tasks.map(createTasks)}
    </ul>
  );
})


export default TodoItems;