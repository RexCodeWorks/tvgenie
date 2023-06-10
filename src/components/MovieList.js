import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, handleImageError }) {
    return (
        <div className="columns is-multiline">
            {movies.map(movie => (
                <div key={movie.id} className="column is-one-fifth">
                    <MovieCard movie={movie} handleImageError={handleImageError} />
                </div>
            ))}
        </div>
    );
}

export default MovieList;
