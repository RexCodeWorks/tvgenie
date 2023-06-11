function MovieDetail({ movie, onClose }) {
    const { title, poster_path, release_date, vote_average, overview } = movie;

    return (
        <div>
            <div class="columns">
                <div class="column is-one-third">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </div>
                <div class="column">
                    <h1>{title}</h1>
                    <p>Release Date: {release_date}</p>
                    <p>Vote Average: {vote_average}</p>
                    <p>{overview}</p>
                    <button class="button is-danger is-small" onClick={onClose}>
                        <span class="icon is-left">
                            <i class="fas fa-times"></i>
                        </span>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
