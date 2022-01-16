import React from 'react';
import './App.css';
import ToDo from './components/Todo/ToDo';
import { ThemeContext} from './components/ThemeContext/ThemeContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      textBtn: 'Light theme',
    };
    this.toggleTheme = this.toggleTheme.bind(this)
    this.toggleDescriptionBtn = this.toggleDescriptionBtn.bind(this)
  };

  toggleTheme() {
    console.log();
    this.setState(state => ({
      theme:
      state.theme === 'dark' ? 'light' : 'dark'
    }))
  };

  toggleDescriptionBtn(){
    this.setState(state => ({
    textBtn:
    state.textBtn === 'Light theme' ? 'Dark theme' : 'Light theme'
    }))
  }

  toggleThemeAndDescriptionBtn = () =>{
    this.toggleTheme();
    this.toggleDescriptionBtn();
  }

  render() {
    return(
      <ThemeContext.Provider value={this.state.theme}>
        <button className={`switch-btn-${this.state.theme} switch-btn`}
        onClick={this.toggleThemeAndDescriptionBtn}>
        {this.state.textBtn}
        </button>

        <ToDo/>
      </ThemeContext.Provider>
    )
  };
}
