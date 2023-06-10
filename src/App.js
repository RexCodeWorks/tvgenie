import React, { useState } from 'react';
import searchMovies from './api';
import Header from './components/Header';
import MovieList from './components/MovieList';
import no_image from './images/no_image.png';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await searchMovies(searchQuery);
    setMovies(results);
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleImageError = (event) => {
    event.target.src = no_image;
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Header searchQuery={searchQuery} handleChange={handleChange} handleSearch={handleSearch} />
      </div>
      <div className="hero-body">
        <div className="container">
          {movies.length > 0 ? (
            <MovieList movies={movies} handleImageError={handleImageError} />
          ) : (
            <p className="has-text-centered">No movies found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
