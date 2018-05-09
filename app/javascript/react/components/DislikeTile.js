import React from 'react';

const DislikeTile = props => {

  return(
    <div onClick={props.handleSwipe}>
          <button onClick={props.handleSwipe}>&#x2718;</button>
    </div>
  )
}

export default DislikeTile;
