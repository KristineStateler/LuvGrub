import React from 'react';

const LikeTile = props => {

  return(
    <div className="liked-buttons">
    <button onClick={props.handleSwipe}>&#x2714;</button>
  </div>
  )
}

export default LikeTile;
