import React from 'react';

const LikedRecipe = props => {
  return (

  <div className="liked-tile">
      <h3>{props.name} </h3>
      <img src={props.picture} className="photos" />
      <p>{props.category} </p>
      <p>{props.ingredients}</p>
      <p>{props.steps} </p>

  </div>

  )
}

export default LikedRecipe;
