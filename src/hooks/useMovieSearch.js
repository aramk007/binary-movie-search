import { useState, useEffect } from "react";

const useMovieSearch = (movies) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);

  useEffect(() => {
    const newFilteredMovies = binarySearchMovies(
      movies,
      searchTerm,
      ratingFilter,
      genreFilter
    );
    setFilteredMovies(newFilteredMovies);
  }, [movies, searchTerm, ratingFilter, genreFilter]);

  const binarySearchMovies = (
    movies,
    searchTerm,
    ratingFilter,
    genreFilter
  ) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    let result = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(lowerCaseSearchTerm) &&
        (ratingFilter.length === 0 ||
          ratingFilter.includes(Math.round(movie.rating))) &&
        (genreFilter.length === 0 || genreFilter.includes(movie.category))
    );
    return result;
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredMovies,
    setRatingFilter,
    setGenreFilter,
  };
};

export default useMovieSearch;
