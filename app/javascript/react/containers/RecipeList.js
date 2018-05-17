import React from 'react';
import APIContainer from './APIContainer'
import RecipeTile from '../components/RecipeTile'
import LikeTile from '../components/LikeTile'
import DislikeTile from '../components/DislikeTile'
import SearchBar from '../components/SearchBar'

class RecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: 0,
      recipesLiked: [],
      search: '',
      finalResults: []
    }

    this.swipeLeft = this.swipeLeft.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleChange=this.handleChange.bind(this);

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


detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  var min_x = 30;  //min x swipe for horizontal swipe
  var max_x = 30;  //max x difference for vertical swipe
  var min_y = 50;  //min y swipe for vertical swipe
  var max_y = 60;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX;
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX;
    swipe_det.eY = t.screenY;
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if(swipe_det.eY > swipe_det.sY) direc = "d";
      else direc = "u";
    }

    if (direc != "") {
      if(typeof func == 'function') func(el,direc);
    }
    direc = "";
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  },false);
}

myfunction(el,d) {
  alert("you swiped on element with id '"+el+"' to "+d+" direction");
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

handleChange(event) {
  let formPayload = {search: event.target.value}
  let searchResults = []
  let search = formPayload.search.toLowerCase();

  this.state.recipes.forEach((recipe) => {
    if (recipe["name"].toLowerCase().includes(search)) {
     searchResults.push(recipe)
   }
    this.setState({
      recipes: searchResults,
      search: event.target.value
    })
    debugger
  })
}



 render(){

   let finalResults = this.state.finalResults.map(recipe => {
     debugger
         return(
           <RecipeTile
             key = {recipe.id}
             id = {recipe.id}
             title = {recipe.name}
             category = {recipe.category}
             ingredients = {recipe.ingredients}
             steps = {recipe.steps}
           />
         )
       })

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


  <div className="whole-page">
      <h1>LuvGrub</h1>
  <section class="top-bar-section">
      <div>
        <SearchBar
        />
      </div>

    </section>
      <div className="recipe-tile">
          <RecipeTile
            category={category}
            name={name}
            picture={picture}
            steps={steps}
            ingredients={ingredients}
            detectswipe={this.detectswipe}
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
