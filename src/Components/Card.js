import React from 'react';
import {Link} from 'react-router';

const Card = ({card}) => {
  return (<div className="displayCard">
      <div className="globalCard">
          <p>{card.front}</p>
          <Link to={`/deck/${card.deckId}/edit/${card.id}`}>Edit</Link>
      </div>
  </div>)
};

export default Card;