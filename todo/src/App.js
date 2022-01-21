import React, { useState } from 'react';
import './App.css';
import ToDo from './components/Todo/ToDo';
import { ThemeContext} from './components/ThemeContext/ThemeContext';
import WithLoadingComponent from './components/Loader/LoaderHOC';
import PropTypes from 'prop-types';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [textBtn, setTextBtn] = useState('Light theme');

  const handlerToggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handlerToggleDescriptionBtn = () => {
    
    const THEME_MODE = {
      DARK: 'Dark theme',
      LIGHT: 'Light theme',
    };

    setTextBtn(
      textBtn === THEME_MODE.LIGHT ?
      THEME_MODE.DARK : 
      THEME_MODE.LIGHT
    );
      
  }

  const handlerToggleThemeAndDescriptionBtn = () => {
    handlerToggleTheme();
    handlerToggleDescriptionBtn();
  }

  return(
    <ThemeContext.Provider value={theme}>
      <button 
        className={`switch-btn-${theme} switch-btn`}
        onClick={handlerToggleThemeAndDescriptionBtn}>
        {textBtn}
      </button>

      <ToDo/>

    </ThemeContext.Provider>
  )

}

ThemeContext.Provider.propTypes = {
  value: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default WithLoadingComponent(App);