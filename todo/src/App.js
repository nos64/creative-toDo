import React, { useState, useEffect} from 'react';
import './App.css';
import ToDo from './components/Todo/ToDo';
import { ThemeContext} from './components/ThemeContext/ThemeContext';
import WithLoadingComponent from './components/HOC/HOC';
import PropTypes from 'prop-types';
import Loader from './components/Loader/Loader';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [textBtn, setTextBtn] = useState('Light theme');
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(isLoading = false), 1000)
  });

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
    isLoading === true ? <Loader/> :
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