import React, { useState } from "react";

function ListingCard({ item, onDeletedItem }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(() => onDeletedItem(item));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ item.image } alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button 
            className="emoji-button favorite active" 
            onClick={() => (setIsFavorite(!isFavorite))}
          >
              ★
          </button>) 
        : 
        (<button 
            className="emoji-button favorite"
            onClick={() => (setIsFavorite(!isFavorite))}
          >
            ☆
          </button>
        )}
        <strong>{ item.description }</strong>
        <span> · { item.location }</span>
        <button className="emoji-button delete" onClick={ handleDeleteClick }>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
