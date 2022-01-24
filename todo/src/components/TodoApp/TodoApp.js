import React, { useState} from 'react';
import './TodoApp.css';
import ToDo from '../Todo/ToDo';
import { ThemeContext} from '../ThemeContext/ThemeContext';
import WithLoadingComponent from '../Hoc/Hoc';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import url from '../url';

const TodoApp = () => {
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

  return (
    
    <ThemeContext.Provider value={theme}>
    <Link className='preview-link' to={url.Preview}>Home Page</Link>
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

Link.propTypes = {
  children: PropTypes.string,
}

export default WithLoadingComponent(TodoApp);