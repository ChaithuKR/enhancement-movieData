import './index.css'

import {Link} from 'react-router-dom'

const MovieItem = props => {
  const {movie} = props
  const {id} = movie
  return (
    <li>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie"
          className="poster-img"
        />
        <div className="text">
          <p>{movie.title}</p>
          <p>Rating :{movie.vote_average}</p>
          <button className="view-details" type="button">
            <Link to={`/movies/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </li>
  )
}

export default MovieItem
