import React from 'react';
import './TodoItems.css';
import {ThemeContext} from '../ThemeContext/ThemeContext';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTaskHandler} from '../../redux/todoSlice';
import {RootState} from '../../redux/store';

const TodoItems: React.FC = () => {
  
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const createTasks = (task: {text: string; key: string}) => {
    return (
      <ThemeContext.Consumer {...task}>
        {context => (
          <li key={task.key} className='todo-item'>
            <label>
              <input type='checkbox'/>
              <span className={`label-${context}`}>{task.text}</span>
            </label>
  
            <button className={`del-btn-${context} del-btn`}
            onClick={() => dispatch(deleteTaskHandler(task.key))}>X</button>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }

  return(
    <ul className='todo-list'>
      {tasks.map(createTasks)}
    </ul>
  );
}

export default TodoItems;