import React from 'react';
import './TodoItems.css';
import {ThemeContext} from '../ThemeContext/ThemeContext';

export default class TodoItems extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  onTaskDelete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
    <li key={item.key} className='todo-item'>
        <label>
          <input type='checkbox'/>
          <span className={`label-${this.context}`}>{item.text}</span>
        </label>

        <button className={`del-btn-${this.context} del-btn`}
        onClick={() => this.onTaskDelete(item.key)}>X</button>
    </li>
    );
  }

  render () {
    return(
      <ul className='todo-list'>
        {this.props.entries.map(this.createTasks)}
      </ul>
    );
  }
}

