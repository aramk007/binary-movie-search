import React, { useState, useEffect } from "react";
import { initialMovies } from "./constants/initialMovies";
import useMovieSearch from "./hooks/useMovieSearch";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./Components/SearchBar";
import RatingFilter from "./Components/RatingFilter";
import GenreFilter from "./Components/GenreFilter";
import Autocomplete from "./Components/Autocomplete";
import "./App.css";

const App = () => {
  const [term, setTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const {
    searchTerm,
    setSearchTerm,
    filteredMovies,
    setRatingFilter,
    setGenreFilter,
  } = useMovieSearch(initialMovies);

  const debouncedTerm = useDebounce(term, 300);

  useEffect(() => {
    setSearchTerm(debouncedTerm);
  }, [debouncedTerm, setSearchTerm]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setTerm(movie.title);
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <div className="search-filters">
        <div className="filter-container">
          <SearchBar
            className="SearchBar"
            searchTerm={term}
            setSearchTerm={setTerm}
          />

          <RatingFilter setRatingFilter={setRatingFilter} />
          <GenreFilter setGenreFilter={setGenreFilter} />
        </div>
      </div>
      {term && (
        <Autocomplete
          filteredMovies={filteredMovies}
          onSelect={handleSelectMovie}
        />
      )}
      {selectedMovie && (
        <div className="movie-details">
          <h2>{selectedMovie.title}</h2>
          <div className="movie-rating">
            {Array.from({ length: 10 }, (_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(selectedMovie.rating) ? "star filled" : "star"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="movie-category">{selectedMovie.category}</span>
          <div className="movie-reviews">
            {selectedMovie.reviews.length > 0 ? (
              selectedMovie.reviews.map((review, reviewIndex) => (
                <div key={reviewIndex} className="review">
                  <p>{review.content}</p>
                  <div className="review-rating">
                    {Array.from({ length: 10 }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.round(review.rating) ? "star filled" : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
