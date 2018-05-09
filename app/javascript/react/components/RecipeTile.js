import React from 'react';

const RecipeTile = props => {
  return (
    <div className="recipe-tile">
    <img src={props.url} />
  </div>
  )
}

export default RecipeTile;
