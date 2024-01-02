import './index.css'
import {useState, useEffect} from 'react'
import MovieItem from '../MovieItem'

const SearchedMovie = props => {
  const {userInput} = props
  console.log(userInput)
  const [movies, setMovies] = useState([])
  const onGetResults = () => {
    const fetchData = async () => {
      const apiKey = '79126e66b5fe786f82e39d0c107bc44e'
      const page = 3
      const response = await fetch(
        `https://api.themoviedb.org/${page}/search/movie?api_key=${apiKey}&language=en-US&query=${userInput}&page=1`,
      )
      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
    }

    fetchData()
  }
  return (
    <div className="upcoming">
      <div className="upcoming">
        <form
          onSubmit={e => {
            e.preventDefault()
            onGetResults()
          }}
        >
          <button type="submit">Search</button>
        </form>
        <ul className="movie-details">
          {movies.map(each => (
            <MovieItem key={each.id} movie={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchedMovie
