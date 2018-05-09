import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import RecipeList from './RecipeList'

const App = props => {
  return(
    <RecipeList
    />
    // <Router history={browserHistory}>
    //   <Route path='/' component={RecipeList} />
    //   <Route path='/recipes' component={RecipeList} />
    // </Router>
  );
}
export default App;
