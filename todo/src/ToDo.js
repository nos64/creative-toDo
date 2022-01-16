import './ToDo.css';
import React from 'react';

import Greeting  from "./components/Greeting/Greeting";
import TodoItems from './components/TodoItems/TodoItems';
import WihLoadingComponent from './components/Loader/LoaderHOC'

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [],
      inputValue: '',
      show: false,
    };
    
    this.addTask = this.addTask.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this);
  }

  addTask(e) {
    e.preventDefault();

    if (this.state.inputValue !== "") {
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
    
      <div className="todo-wrapper">
        <Greeting />

        <form onSubmit={this.addTask}>
          <input className="add-place" onChange={this.changeInputHandler}
          value={this.state.inputValue}
          placeholder="Add new task">
          </input>
          <button className='add-btn' type="submit">ADD NEW TASK</button>
        </form>

          <TodoItems entries={this.state.tasks}
            delete={this.deleteTaskHandler}
          />
      
      </div>
      
    );
  }
}

export default WihLoadingComponent(ToDo)