const API_KEY = "3ee1f8e156676353c52352a864bd07a2";

const fetchPopularMovies = (setPopularMovies) => {
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((popularMovies) => setPopularMovies(popularMovies.results))
    .catch((error) => console.log(error));
};

const fetchMovieById = (movieId, setMovie) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setMovie(movie))
    .catch((error) => console.log(error));
};

const fetchMovieReviews = (movieId, setReviews) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setReviews(movie.results))
    .catch((error) => console.log(error));
};
const fetchMovieCast = (movieId, setCast) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setCast(movie.cast))
    .catch((error) => console.log(error));
};

const fetchSearchMovies = (query, setSearchMovie) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setSearchMovie(movie.results))
    .catch((error) => console.log(error));
};

export {
  fetchPopularMovies,
  fetchMovieById,
  fetchMovieReviews,
  fetchMovieCast,
  fetchSearchMovies,
};
