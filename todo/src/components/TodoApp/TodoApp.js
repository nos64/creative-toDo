import React  from 'react';
import './TodoApp.css';
import ToDo from '../Todo/ToDo';
import { ThemeContext} from '../ThemeContext/ThemeContext';
import WithLoadingComponent from '../Hoc/Hoc';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import url from '../url';
import { observer } from "mobx-react-lite"
import ThemeStore from '../../store/ThemeStore';
import TextBtnStore from '../../store/TextBtnStore';

const TodoApp = observer( () => {

  const handlerToggleThemeAndDescriptionBtn = () => {
    ThemeStore.handlerToggleTheme();
    TextBtnStore.handlerToggleDescriptionBtn();
  }

  return (
    
    <ThemeContext.Provider value={ThemeStore.theme}>
    <Link className='preview-link' to={url.Preview}>Home Page</Link>
      <button 
        className={`switch-btn-${ThemeStore.theme} switch-btn`}
        onClick={handlerToggleThemeAndDescriptionBtn}>
        {TextBtnStore.textBtn}
      </button>

      <ToDo/>
    
    </ThemeContext.Provider>
  )

})

ThemeContext.Provider.propTypes = {
  value: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}

Link.propTypes = {
  children: PropTypes.string,
}

export default WithLoadingComponent(TodoApp);