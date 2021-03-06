import './NoMatch.css';

import { Link } from 'react-router-dom';
import url from '../url';

const NoMatch = () => {
  return  (
    <>
      <Link className='preview-link' to={url.Preview}>Home Page</Link>
      <div className="nomatch-text">
        <p>There's nothing here!</p>
      </div>
    </>
  )
}

export default NoMatch;