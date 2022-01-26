import './ToDo.css';
import React, {useState, useEffect} from 'react';
import Greeting  from '../Greeting/Greeting';
import TodoItems from '../TodoItems/TodoItems';
import {ThemeContext} from '../ThemeContext/ThemeContext';
import { observer } from "mobx-react-lite"
import TodoStore from '../../store/TodoStore';

const ToDo = observer(() => {

    let [inputValue, setInputValue] = useState('');
   
    const findDuplicateTasks = () => {
      return TodoStore.tasks.filter((task) => {
        if (task.text.trim().toLowerCase() === inputValue.trim().toLowerCase()) {
          alert('This task already exists')
          setInputValue(inputValue = '')
        }
        return TodoStore.tasks
      })
    }
      
    const addTaskHandler = (e) => {
      e.preventDefault();
      
      findDuplicateTasks(TodoStore.tasks, inputValue);

      if (inputValue.trim()) {
        TodoStore.addTask(inputValue)
      }
  
      setInputValue('')
      
      }
      
    const changeInputHandler = (e) => setInputValue(inputValue = e.target.value); 
  
    return (
      <ThemeContext.Consumer>
      {context => (
        <div className={`todo-wrapper-${context} todo-wrapper`}>
      
          <Greeting/>
          
          <form onSubmit={addTaskHandler}>
            <input className={`add-place-${context} add-place`} onChange={changeInputHandler}
            value={inputValue}
            placeholder='Add new task'>
            </input>
  
            <button className={`add-btn-${context} add-btn`} type="submit">ADD NEW TASK</button>
          </form>
  
          <TodoItems tasks={TodoStore.tasks}/>
        </div>
      )}
        </ThemeContext.Consumer>
    );
  });

export default ToDo;