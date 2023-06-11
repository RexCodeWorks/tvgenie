import React, { useState } from 'react';
import searchMovies from './api';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import no_image from './images/no_image.png';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);


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

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleShowMovieDetail = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseMovieDetail = () => {
    setSelectedMovie(null);
  };

  const conditionallyRenderMovieList = () => {
    // Only render the movie list if no movie is selected
    return selectedMovie ? null : (
      <MovieList
        movies={movies}
        handleImageError={handleImageError}
        handleMovieSelect={handleMovieSelect}
        handleMovieClick={handleShowMovieDetail}
      />
    );
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Header searchQuery={searchQuery} handleChange={handleChange} handleSearch={handleSearch} />
      </div>
      <div className="hero-body">
        <div className="container">
          {selectedMovie && (
            <MovieDetail movie={selectedMovie} onClose={handleCloseMovieDetail} />
          )}
          {conditionallyRenderMovieList()}
        </div>
      </div>
    </section>
  );
}

export default App;
