import Preview from '../src/components/Preview/Preview';
import TodoApp from './components/TodoApp/TodoApp';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preview/>} />
        <Route path="myTodo" element={<TodoApp />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )

}

BrowserRouter.propTypes = {
  children: PropTypes.element,
}

export default App;