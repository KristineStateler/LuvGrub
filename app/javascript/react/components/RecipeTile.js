import React from 'react';

const RecipeTile = props => {
  return (
    <div>
    <p>Name:{props.name}</p>
    <li>Ingredients:{props.ingredients}</li>
    <ol>Steps:{props.steps}</ol>
    <p>Category:{props.category}</p>
    <img src={props.picture} />
    </div>
  )
}

export default RecipeTile;
