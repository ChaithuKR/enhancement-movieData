import './index.css'
import {Link} from 'react-router-dom'

import React, {useState, useEffect} from 'react'

import MovieItem from '../MovieItem'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '79126e66b5fe786f82e39d0c107bc44e'
      const page = 1
      const num = 3
      const response = await fetch(
        `https://api.themoviedb.org/${num}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`,
      )
      const data = await response.json()
      setMovies(data.results)
    }

    fetchData()
  }, [])
  return (
    <div className="upcoming">
      <h1>Top Rated Movies Page</h1>
      <ul className="movie">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
      <div className="buttons">
        <button type="button" className="butt">
          <Link to="/upcoming">Prev</Link>
        </button>
        <p className="num">3</p>
        <button type="button" className="butt">
          Next
        </button>
      </div>
    </div>
  )
}

export default TopRatedMovies
