import React from 'react';

const LikeTile = props => {

  return(
    <div className="like-button">
    <button onClick={props.handleSwipe}>&#x2714;</button>
  </div>
  )
}

export default LikeTile;
