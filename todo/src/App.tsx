import React from "react";
import Preview from './components/Preview/Preview';
import TodoApp from './components/TodoApp/TodoApp';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Preview/>} />
          <Route path="myTodo" element={<TodoApp />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  )

}


export default App;