import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import RecipeList from './RecipeList';
import LikedRecipes from './LikedRecipes';


const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={RecipeList} />
      <Route path='/recipes' component={RecipeList} />
      <Route path='/preferences' component={LikedRecipes} />
    </Router>
  );
}
export default App;
