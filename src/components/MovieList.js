import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, handleImageError, handleMovieSelect, handleMovieClick }) {
    return (
        <div className="columns is-multiline">
            {movies.map(movie => (
                <div key={movie.id} className="column is-one-fifth">
                    <MovieCard
                        movie={movie}
                        handleImageError={handleImageError}
                        handleMovieSelect={handleMovieSelect}
                        handleMovieClick={handleMovieClick}
                    />
                </div>
            ))}
        </div>
    );
}

export default MovieList;
