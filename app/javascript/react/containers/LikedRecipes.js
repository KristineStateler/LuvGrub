import React from 'react';
import APIContainer from './APIContainer'
import LikedRecipe from '../components/LikedRecipe'

class LikedRecipes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
}

componentDidMount() {
  fetch('/api/v1/preferences', {
    credentials: 'same-origin'
  })
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
        recipes: recipes
      });
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`));
}




render() {

if (this.props.recipes) {
  var likedRecipes = this.state.likedRecipes.map((recipe) => {

    return (
        <LikedRecipe
          key = {recipe.id}
          category = {recipe.category}
          name = {recipe.name}
          picture={recipe.picture}
          steps={recipe.steps}
          ingredients={recipe.ingredients}
        />
   )
  })
}

  return(

    <div>
    {likedRecipes}

   </div>
  )
  }
}

export default LikedRecipes;
