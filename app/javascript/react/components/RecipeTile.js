import React from 'react';

const RecipeTile = props => {
  return (
  <div>

      <div className="food-name"><h1>{props.name} </h1></div>
      <img src={props.picture} className="photos" />
      <p>{props.category} </p>
      <p>{props.ingredients}</p>
      <p>{props.steps} </p>

  </div>

  )
}

export default RecipeTile;
