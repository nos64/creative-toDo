import React from 'react';
import './TodoApp.css';
import ToDo from '../Todo/ToDo';
import { ThemeContext} from '../ThemeContext/ThemeContext';
import WithLoadingComponent from '../Hoc/Hoc';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import url from '../url';
import {useDispatch, useSelector} from 'react-redux';
import {handlerToggleTheme} from '../../redux/themeSlice';
import {handlerToggleDescriptionBtn} from '../../redux/textBtnSlice';

const TodoApp = () => {

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const textBtn = useSelector(state => state.textBtn.textBtn);

  const handlerToggleThemeAndDescriptionBtn = () => {
    dispatch(handlerToggleTheme(theme));
    dispatch(handlerToggleDescriptionBtn(textBtn));
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