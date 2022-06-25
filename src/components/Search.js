import React, { useState } from "react";

function Search({ onHandleSubmit }) {
  const [searchWord, setSearchWord] = useState("");

  console.log(searchWord);

  function handleSubmit(e) {
    e.preventDefault();
    onHandleSubmit(searchWord);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ searchWord }
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
