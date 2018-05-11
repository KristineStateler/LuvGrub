import React from 'react';
import APIContainer from './APIContainer'
import LikedRecipe from '../components/LikedRecipe'

class LikedRecipes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likedRecipes: []
    }
}


componentDidMount(){
fetch('/api/v1/preferences')
  .then(response =>
    response.json())
    .then(body =>{
    this.setState({
      likedRecipes: likedRecipes
    });
  })
}


render() {

  if (this.state.likedRecipes)

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


  return(

    <div>
    {likedRecipes}

   </div>
  )
  }
}

export default LikedRecipes;
