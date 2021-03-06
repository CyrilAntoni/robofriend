import React from 'react';

const Card = ( {key, id, name, email} ) => {
  return (
    <div key={key} className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot-{id}" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
