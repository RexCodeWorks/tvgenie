function MovieDetail({ movie, onClose }) {
    const { title, poster_path, release_date, vote_average, overview } = movie;

    return (
        <div>
            <div className="columns">
                <div className="column is-one-third">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </div>
                <div className="column">
                    <h1>{title}</h1>
                    <p>Release Date: {release_date}</p>
                    <p>Vote Average: {vote_average}</p>
                    <p>{overview}</p>
                    <button className="button is-danger is-small" onClick={onClose}>
                        <span className="icon is-left">
                            <i className="fas fa-times"></i>
                        </span>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
