import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots" // this is for accessibily matters, it gives the input a text to be read by fro example, screen readers
        className="tc pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robots..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
