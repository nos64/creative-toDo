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
    this.handlerToggleTheme = this.handlerToggleTheme.bind(this)
    this.handlerToggleDescriptionBtn = this.handlerToggleDescriptionBtn.bind(this)
  };

  handlerToggleTheme() {
    this.setState(state => ({
      theme:
      state.theme === 'dark' ? 'light' : 'dark'
    }))
  };

  handlerToggleDescriptionBtn(){
    const THEME_MODE = {
      DARK: 'Dark theme',
      LIGHT: 'Light theme',
    }

    this.setState(state => ({
    textBtn:
    state.textBtn === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    }))
  }

  handlerToggleThemeAndDescriptionBtn = () =>{
    this.handlerToggleTheme();
    this.handlerToggleDescriptionBtn();
  }

  render() {
    return(
      <ThemeContext.Provider value={this.state.theme}>
        <button 
          className={`switch-btn-${this.state.theme} switch-btn`}
          onClick={this.handlerToggleThemeAndDescriptionBtn}>
          {this.state.textBtn}
        </button>

        <ToDo/>
      </ThemeContext.Provider>
    )
  };
}