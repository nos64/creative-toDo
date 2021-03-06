import './ToDo.css';
import React, {useState, useEffect} from 'react';
import Greeting  from '../Greeting/Greeting';
import TodoItems from '../TodoItems/TodoItems';
import {ThemeContext} from '../ThemeContext/ThemeContext';


const ToDo = () => {

  let [tasks, setTasks] = useState([]);
  let [inputValue, setInputValue] = useState('');
 
  const findDuplicateTasks = () => {
    return tasks.filter((item) => {
      if (item.text.trim().toLowerCase() === inputValue.trim().toLowerCase()) {
        alert('This task already exists')
        setInputValue(inputValue = '')
      }
    })
  }
    
  const addTaskHandler = (e) => {
    e.preventDefault();

    findDuplicateTasks(tasks, inputValue);
    if (inputValue.trim()) {
      
      const newTask = {
        text: inputValue,
        key: Date.now().toString()
      }

      setTasks (tasks = [...tasks, newTask])
    }

    setInputValue(inputValue = '')
    
    }
    
  const changeInputHandler = (e) => setInputValue(inputValue = e.target.value);
    
  const deleteTaskHandler = (key) => {
    const filteredTask = tasks.filter(task => task.key !== key);

    setTasks (tasks = filteredTask)
  }

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

        <TodoItems entries={tasks} delete={deleteTaskHandler}/>
      </div>
    )}
      </ThemeContext.Consumer>
  );
}

export default ToDo;