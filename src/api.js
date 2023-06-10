import axios from 'axios';

const API_KEY = 'd27abfa97475905d89dff0926df744ed';

const searchMovies = async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`);
  return response.data.results;
}

export default searchMovies;