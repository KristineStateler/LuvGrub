import React from 'react';
import APIContainer from './APIContainer'
import LikedRecipe from '../components/LikedRecipe'

class LikedRecipes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
    this.allLikedRecipes = this.allLikedRecipes.bind(this)
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
        recipes: body
      });
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`));
}

allLikedRecipes(){
  if (this.state.recipes.length != 0) {
    let likedRecipes = this.state.recipes.map((recipe) => {

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
}


render() {



  return(

    <div>
      {this.allLikedRecipes()}
    </div>
  )
  }
}

export default LikedRecipes;
