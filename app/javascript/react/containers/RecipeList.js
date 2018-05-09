import React from 'react';
import APIContainer from './APIContainer'
import RecipeTile from '../components/RecipeTile'

class RecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      recipeSelected: null,
      recipesShown: []
    }
  this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    fetch('/api/v1/recipes.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          recipes: body,
          recipesShown: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleClick(id){
    if (this.state.recipeSelected === null){
      this.setState({recipeSelected: id})
    } else {
      this.setState({recipeSelected: null})
    }
  }


 render(){
let recipes = this.state.recipes.map(recipe => {

  return (
    <RecipeTile
      key={recipe.id}
      name={recipe.name}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
      category={recipe.category}
      picture={recipe.picture}
    />
  )
})

  return(

  <div>
    <div>
    <ul>
      {recipes}
    </ul>
  </div>
  <div>
    <APIContainer
    />
  </div>
    </div>
  )
}
}

export default RecipeList;
