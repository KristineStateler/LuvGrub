import React from 'react';

const RecipeTile = props => {
  return (
  <div>
      <h1>{props.name} </h1>
      <div className="photos">
      <img src={props.picture} />
      </div>
      <p>{props.category} </p>
      <p>{props.ingredients}</p>
      <p>{props.steps} </p>
  </div>

  )
}

export default RecipeTile;
