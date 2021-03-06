import React, {Component} from 'react'
import LikedRecipe from "./LikedRecipe"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      search: '',
      finalResults: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filteredRecipes = this.filteredRecipes.bind(this)
  }

  componentDidMount() {
   fetch('api/v1/recipes')
     .then(response => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`
       }
     })
     .then(response => response.json())
     .then(body =>{
       this.setState( { recipes: body } )
     })
     .catch(error => console.error(`${error.message}`))
  }

  handleChange(event) {
    this.setState({search: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      search: this.state.search
    }
    this.filteredRecipes(formPayload)
  }

  filteredRecipes(formPayload) {
    let searchResults = []
    let search = formPayload.search.toString().toLowerCase();
    this.state.recipes.forEach((recipe) => {
      if (recipe["name"].toLowerCase().includes(search)) {
       searchResults.push(recipe)
     }
      this.setState({ finalResults: searchResults })
    })
  }

  render() {
    let finalResults = this.state.finalResults.map(recipe => {
      return(
        <LikedRecipe
          key = {recipe.id}
          id = {recipe.id}
          name = {recipe.name}
          category = {recipe.category}
          ingredients = {recipe.ingredients}
          steps = {recipe.steps}
          picture={recipe.picture.url}
        />
      )
    })
    return(
     <div className="search-bar">
       <div className="side-bar">
         <input
           id="search"
           type='text'
           value={this.state.search}
           onChange={this.handleChange}
           placeholder="Have a recipe in mind? Look here!"
         />
         <input type = 'submit' value = 'Search' onClick = {this.handleSubmit}/>
       </div>
       <div>
         {finalResults}
       </div>
     </div>
   )
  }
}

export default SearchBar;
