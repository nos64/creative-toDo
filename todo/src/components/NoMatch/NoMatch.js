import './NoMatch.css'
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return  (
    <>
      <Link className='preview-link' to="/">Home Page</Link>
      <div className="moMatch-text">
        <p>There's nothing here!</p>
      </div>
    </>
  )
}

export default NoMatch;