import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [filter, setFilter] = useState("");

  function filterWord(searchWord) {
    setFilter(searchWord);
  }

  return (
    <div className="app">
      <Header filterWord={ filterWord }/>
      <ListingsContainer filter={ filter }/>
    </div>
  );
}

export default App;
