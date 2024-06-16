import React from "react";
import "./Autocomplete.css";

const Autocomplete = ({ filteredMovies, onSelect }) => {
  return (
    <ul className="autocomplete-list">
      {filteredMovies.map((movie, index) => (
        <li key={index} onClick={() => onSelect(movie)}>
          <div className="autocomplete-item">
            <div className="autocomplete-item-header">
              <span>{movie.title}</span>
              <span className="autocomplete-genre">{movie.category}</span>
            </div>
            <span className="autocomplete-rating">
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.round(movie.rating) ? "star filled" : "star"
                  }
                >
                  ★
                </span>
              ))}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
