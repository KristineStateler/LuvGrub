import React from 'react';

const RecipeTile = props => {
  return (
  <div>

      <div className="food-name"><h2>{props.name} </h2></div>
      <div><img src={props.picture} className="photos" /></div><br></br>
      {/* <p>{props.ingredients}</p>
      <p>{props.steps} </p> */}

  </div>

  )
}

export default RecipeTile;
