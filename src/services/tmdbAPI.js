const API_KEY = 'cb95ab87f0a6aa64533c034cdaf1f407';
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

const fetchTrending = () => {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(res =>
    res.json(),
  );
};

const fetchMovieDetails = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then(res => res.json());
};

const fetchTrendingWithQuery = searchQuery => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&&query=${searchQuery}&page=1&include_adult=false`,
  ).then(res => res.json());
};

const tmdbAPI = {
  BASE_IMG_URL,
  fetchTrending,
  fetchMovieDetails,
  fetchTrendingWithQuery,
};

export default tmdbAPI;
