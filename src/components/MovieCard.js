import React from 'react';
// import './styles.css';

function MovieCard({ movie, handleImageError, handleMovieSelect, handleMovieClick }) {
    return (
        <div className="card" onClick={(e) => {
            e.stopPropagation();
            handleMovieClick(movie);
        }}>
            <div className="card-image">
                <figure className="image is-2by3">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        onError={handleImageError}
                    />
                </figure>
                <label className="custom-checkbox">
                    <input
                        type="checkbox"
                        onChange={() => handleMovieSelect(movie)
                        }
                    />
                    <span className="checkbox-checkmark"></span>
                </label>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{movie.title}</p>
                </div>
                <div className="content">{movie.overview.substring(0, 100)}...</div>
            </div>
        </div>
    );
}

export default MovieCard;
