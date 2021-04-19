  import React from 'react';
import './QuoteCard.css';

const SimpsonsQuoteCard = ({ simpson }) => (
  <div className="SimposnsQuoteCard">
    <img src={simpson.image} alt={simpson.character} />
    <p>
      <p>{simpson.quote}</p>
      <p>{simpson.character}</p>
    </p>
  </div>
);

export default SimpsonsQuoteCard;