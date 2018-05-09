import React from 'react';
import APIContainer from './APIContainer'
import RecipeTile from '../components/RecipeTile'
import LikeTile from '../components/LikeTile'
import DislikeTile from '../components/DislikeTile'

class RecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: 0
    }

    this.swipeLeft = this.swipeLeft.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);

}


swipeLeft(){
  let nextRecipe;
  if (this.state.currentRecipe < this.state.recipes.length - 1) {
    nextRecipe = this.state.currentRecipe + 1
  } else {
    nextRecipe = 0
  }
  this.setState({ currentRecipe: nextRecipe })
}


handleSwipe(type) {
  let recipeID = this.state.recipes[this.state.currentRecipe].id
  let fetchBody = { id: recipeID, type: type }
  fetch('api_v1_preferences',
    { method: "POST",
      body: JSON.stringify(fetchBody),
      credentials: 'include' })
      .then((response) => {
        let recipe = response.json()
        return recipe
      }).then((response) => {
        let name = response.name
        let nextRecipe;
        if (this.state.currentRecipe < this.state.recipes.length - 1) {
          nextRecipe == this.state.currentRecipe + 1
        } else {
          nextRecipe = 0
        }

        this.setState({ currentRecipe: nextRecipe })
      })

}


componentDidMount(){
fetch('/api/v1/recipes')
  .then(response => {
    let recipes = response.json()
    return recipes
  }).then(recipes =>{
    this.setState({
      recipes: recipes
    });
  })
}



 render(){
let recipes
if (this.state.recipes[this.state.currentRecipe]) {
  recipes = this.state.recipes[this.state.currentRecipe].picture.url
} else {
  recipes = ""
}


   let swipeRight;
   if (this.state.recipes[this.state.currentRecipe]) {
   swipeRight = () => { this.handleSwipe("right") };
 }


  return(

  <div>

        <div>
          <RecipeTile url={recipes} />
          <div className="like-buttons">
          <LikeTile
            type="right"
            handleSwipe={swipeRight}/>

        <div>
          <DislikeTile type="left"
            handleSwipe={this.swipeLeft}
          />
        </div>
        </div>
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
