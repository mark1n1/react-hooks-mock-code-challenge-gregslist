import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ filter }) {
  const [items, setItems] = useState([]);

  function handleItems() {
    if(filter) {
      return items.filter((item) => item.description.toLowerCase().includes(filter));
    }

    return items;
  }

  const newItems = handleItems();
  console.log(newItems);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((response) => response.json())
      .then((items) => setItems(items));
  }, []);

  function handleOnDeletedItem(deletedItem) {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedItems);
  }

  return (
    <main>
      <ul className="cards">
        { handleItems().map((item) => (
          <ListingCard
            key={ item.id }
            item={ item }
            onDeletedItem={ handleOnDeletedItem}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
