import './ToDo.css';
import React from 'react';
import Greeting  from "../Greeting/Greeting";
import TodoItems from '../TodoItems/TodoItems';
import {ThemeContext} from "../ThemeContext/ThemeContext";

export default class ToDo extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [],
      inputValue: '',
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this);
  }

  findDuplicateTasks(tasks, inputValue) {
    return tasks.filter((item) => {
      if(item.text.trim().toLowerCase() === inputValue.trim().toLowerCase()){
        alert('This task already exists')
        this.state.inputValue = "";
      }
    })
  }

  addTask(e) {
    e.preventDefault();

    this.findDuplicateTasks(this.state.tasks, this.state.inputValue)
    if (this.state.inputValue.trim() !== "") {
      const newTask = {
        text: this.state.inputValue,
        key: Date.now()
      }
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    
      this.state.inputValue = "";
    }
  }

  changeInputHandler(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  deleteTaskHandler(key) {
    const filteredTask = this.state.tasks.filter(task => task.key !== key);

    this.setState({
      tasks: filteredTask
    });
  }

  render() {
  
    return (
      <>
      
        <div className={`todo-wrapper-${this.context} todo-wrapper`}>
      
          <Greeting/>
          
          <form onSubmit={this.addTask}>
            <input className={`add-place-${this.context} add-place`} onChange={this.changeInputHandler}
            value={this.state.inputValue}
            placeholder="Add new task">
            </input>
            <button className={`add-btn-${this.context} add-btn`} type="submit">ADD NEW TASK</button>
          </form>

          <TodoItems entries={this.state.tasks}
            delete={this.deleteTaskHandler}
          />
        </div>
      </>
        
    );
  }
}