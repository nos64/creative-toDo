import React from 'react';
import Route from 'react-router-dom';
import Preview from '../Preview/Preview';
import TodoApp from '../TodoApp/TodoApp';
import NoMatch from '../NoMatch/NoMatch';

const routes = (
  <Route exact path="/" component={Preview}>
  <Route exact path="/myTodo" component={TodoApp}/>
  <Route exact path="*" component={NoMatch}/>
  </Route>
)


export default routes;