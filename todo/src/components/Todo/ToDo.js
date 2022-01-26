import './ToDo.css';
import React, {useState} from 'react';
import Greeting  from '../Greeting/Greeting';
import TodoItems from '../TodoItems/TodoItems';
import {ThemeContext} from '../ThemeContext/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {addTaskHandler} from '../../redux/todoSlice';


const ToDo = () => {

  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  const addTask = (e) => {
    e.preventDefault();

    if (tasks.some(task => task.text === inputValue)) {
      alert('This task already exists')
      setInputValue('')
      return
    }

    if (inputValue.trim()) {
      dispatch(addTaskHandler({inputValue}))
    }

    setInputValue('');
  }
 
  const changeInputHandler = (e) => setInputValue(e.target.value);

  return (
    <ThemeContext.Consumer>
    {context => (
      <div className={`todo-wrapper-${context} todo-wrapper`}>
    
        <Greeting/>
        
        <form onSubmit={addTask}>
          <input 
            className={`add-place-${context} add-place`} 
            onChange={changeInputHandler}
            value={inputValue}
            placeholder='Add new task'>
          </input>

          <button 
            className={`add-btn-${context} add-btn`} 
            type="submit">ADD NEW TASK
          </button>
        </form>

        <TodoItems/>
      </div>
    )}
      </ThemeContext.Consumer>
  );
}

export default ToDo;