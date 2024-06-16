import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter movie name"
      value={searchTerm}
      onChange={handleSearch}
      className="search-input"
    />
  );
};

export default SearchBar;
