import './index.css'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import MovieItem from '../MovieItem'

const Home = () => {
  const [movies, setMovies] = useState([])
  const id = 2

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '79126e66b5fe786f82e39d0c107bc44e'
      const language = 'en-US'
      const page = 1
      const num = 3
      const response = await fetch(
        `https://api.themoviedb.org/${num}/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`,
      )
      const data = await response.json()
      setMovies(data.results)
    }

    fetchData()
  }, [])
  return (
    <div>
      <h1>Popular Movies Page</h1>
      <ul className="movie">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
      <div className="buttons">
        <button type="button" className="butt">
          Prev
        </button>
        <p className="num">1</p>
        <button type="button" className="butt">
          <Link to="/upcoming">Next</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
