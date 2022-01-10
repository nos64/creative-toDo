import React from 'react';
import "./TodoItems.css"

export default class TodoItems extends React.Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      
      <li key={item.key}>
        <div className="todo-item">
          <label>
          <input type="checkbox"/>
          <span>{item.text}</span>
          </label>
          <button className='del-btn' onClick={() => this.delete(item.key)}>X</button>
        </div>
      </li>
    
    )
    
    
  }
  render () {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    return(
      <ul className="todo-list">
          {listItems}
      </ul>
    )
  }
}