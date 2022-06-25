import React from "react";
import Search from "./Search";

function Header({ filterWord }) {
  function onHandleSubmit(searchWord) {
    filterWord(searchWord);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSubmit={ onHandleSubmit } />
    </header>
  );
}

export default Header;
