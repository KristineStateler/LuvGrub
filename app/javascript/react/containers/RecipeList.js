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
      currentRecipe: 0,
      recipesLiked: []
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


handleSwipe(type){
    let recipeId = this.state.recipes[this.state.currentRecipe].id
    let fetchR = { id: recipeId }
    fetch('/api/v1/preferences',
      { credentials: 'same-origin',
        headers: { 'Accept': 'application/json',
       'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(fetchR),
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
      .then((response) => {
        let recipe = response.json()
        return recipe
      }).then((response) => {
        let nextRecipe;
        if (this.state.currentRecipe < this.state.recipes.length - 1){
          nextRecipe= this.state.currentRecipe + 1
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
let name
if (this.state.recipes[this.state.currentRecipe]) {
  name = this.state.recipes[this.state.currentRecipe].name
} else {
  name = ""
}

let category
if (this.state.recipes[this.state.currentRecipe]) {
  category = this.state.recipes[this.state.currentRecipe].category
} else {
  category = ""
}

let picture
if (this.state.recipes[this.state.currentRecipe]) {
  picture = this.state.recipes[this.state.currentRecipe].picture.url
} else {
  picture = ""
}

let steps
if (this.state.recipes[this.state.currentRecipe]) {
  steps = this.state.recipes[this.state.currentRecipe].steps
} else {
  steps = ""
}

let ingredients
if (this.state.recipes[this.state.currentRecipe]) {
  ingredients = this.state.recipes[this.state.currentRecipe].ingredients
} else {
  ingredients = ""
}


  return(


  <div>
    <div className="side-bar">
      <div>
        TEST
        <APIContainer
        />
      </div>
    </div>
      <div className="recipe-tile">
          <RecipeTile
            category={category}
            name={name}
            picture={picture}
            steps={steps}
            ingredients={ingredients}
           />
           <div className="like-buttons">
              <LikeTile
                type="right"
                handleSwipe={this.handleSwipe}
              />
          <div>
            <DislikeTile type="left"
              handleSwipe={this.swipeLeft}
            />
          </div>
          </div>
      </div>
  </div>
    )
  }
}


export default RecipeList;
