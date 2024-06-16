// src/constants/initialMovies.js

export const initialMovies = [
  {
    title: "The Matrix",
    rating: 7.5,
    category: "Action",
    reviews: [
      { content: "Amazing movie!", rating: 8.5 },
      { content: "Great action sequences.", rating: 8.3 },
    ],
  },
  {
    title: "Focus",
    rating: 6.9,
    category: "Comedy",
    reviews: [],
  },
  {
    title: "The Lazarus Effect",
    rating: 6.4,
    category: "Thriller",
    reviews: [],
  },
  {
    title: "Everly",
    rating: 5.0,
    category: "Action",
    reviews: [],
  },
  {
    title: "Maps to the Stars",
    rating: 7.5,
    category: "Drama",
    reviews: [],
  },
];

console.log("initialMovies: ", initialMovies); // Log initial movies data
