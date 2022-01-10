import './ToDo.css';
import React from 'react';

import Greeting  from "./components/Greeting/Greeting";
import TodoItems from './components/TodoItems';


 export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this.inputElement.value !== "") {
      let newItem = {
        text: this.inputElement.value,
        key: Date.now()
  }
  this.setState((prevState) => {
    return { 
      items: prevState.items.concat(newItem) 
    };
  });
 
  this.inputElement.value = "";
  }
  
  console.log(this.state.items);
    
  e.preventDefault();
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
  
      return (

        <div className="todo-wrapper">
          <Greeting />
          <form onSubmit={this.addItem}>
            <input className="add-place" ref={(a) => this.inputElement = a}
            placeholder="Add new task">
            </input>
            <button className='add-btn' type="submit">ADD NEW TASK</button>
          </form>
          <TodoItems entries={this.state.items}
            delete={this.deleteItem}
          />
        </div>
    
      );
  }
}


